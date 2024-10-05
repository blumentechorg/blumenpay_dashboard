// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl; // Extract the pathname
  const token = req.cookies.get("user"); // Get user from cookies

  // Parse the token or set an empty object if it fails
  const user = token ? JSON.parse(token?.value || "{}") : {};

  // If user is not logged in and tries to access dashboard pages
  if (!user?.role && pathname.startsWith("/dashboard")) {
    // Redirect to login page if user is not authenticated
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Super Admin can access everything
  if (user.role === "super_admin") {
    return NextResponse.next(); // Allow access to all routes
  }

  // Restrict access for Admin
  if (user.role === "admin") {
    // Admin can access both admin and user routes
    if (
      pathname.startsWith("/dashboard/admin") ||
      pathname.startsWith("/dashboard/users")
    ) {
      return NextResponse.next(); // Allow access
    } else {
      return NextResponse.redirect(
        new URL("/dashboard/admin/overview", req.url)
      ); // Redirect if trying to access other routes
    }
  }

  // Restrict access for User
  if (user.role === "user") {
    // User can only access user routes
    if (pathname.startsWith("/dashboard/user")) {
      return NextResponse.next(); // Allow access
    } else {
      return NextResponse.redirect(
        new URL("/dashboard/user/overview", req.url)
      ); // Redirect if trying to access other routes
    }
  }

  // In case none of the above matches, block access
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to dashboard pages
};
