import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("user"); // Get the user token from cookies
  const { pathname } = req.nextUrl; // Get the current URL details
  const url = req.nextUrl.clone(); // Clone the current URL for modification

  console.log("Request Pathname:", pathname); // Log the pathname for debugging

  // Public paths that do not require authentication (like login)
  if (pathname === "/login") {
    return NextResponse.next(); // Allow login page access
  }

  // If no token is found, redirect to the login page with an absolute URL
  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  let user;
  try {
    user = JSON.parse(token); // Assuming the token contains the user object
  } catch (error) {
    console.error("Error parsing token:", error); // Log parsing error
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Super Admin Access Control
  if (pathname.startsWith("/admin-super") && user.role !== "super_admin") {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  // Admin Access Control
  if (
    pathname.startsWith("/admin") &&
    user.role !== "admin" &&
    user.role !== "super_admin"
  ) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  // User Access Control
  if (pathname.startsWith("/user") && user.role !== "user") {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Proceed with the request if access is valid
}
