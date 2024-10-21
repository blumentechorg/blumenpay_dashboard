import { NextResponse } from "next/server";

// Middleware function to check role-based access
export function middleware(req) {
  const token = req.cookies.get("token"); // Get token from cookies
  const role = req.cookies.get("role"); // Get role from cookies

  const { pathname } = req.nextUrl;

  // Protect dashboard pages
  if (pathname.startsWith("/dashboard")) {
    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirect based on role
    if (pathname.startsWith("/dashboard/companies") && role !== "super_admin") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (
      pathname.startsWith("/dashboard/sub-companies") &&
      role === "super_admin"
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Continue request if all checks pass
  return NextResponse.next();
}
