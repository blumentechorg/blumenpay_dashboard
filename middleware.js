// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const user = JSON.parse(req.cookies.get("user")?.value || "{}");

  // Check if user is authenticated
  if (!user?.role && pathname.startsWith("/dashboard")) {
    // Redirect to login page if user is not authenticated
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Restrict access to admin routes
  if (pathname.startsWith("/dashboard/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard/users/overview", req.url));
  }

  // Restrict access to user routes
  if (pathname.startsWith("/dashboard/users") && user.role !== "user") {
    return NextResponse.redirect(new URL("/dashboard/admin/overview", req.url));
  }

  // Allow access if authenticated and role matches
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to dashboard pages
};
