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

  // If authenticated, allow access to all routes
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to dashboard pages
};
