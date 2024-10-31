"use client";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import Breadcrumb from "@/components/Breadcrumb";
import UserNavbar from "@/components/user/UserNavbar";
import UserSidebar from "@/components/user/UserSidebar";
import Loading from "./loading";
import { useState, useEffect } from "react";

const UserLayout = ({ children }) => {
  return (
    <>
      <ProtectedRoute allowedRoles={["user"]}>
        <div className="flex">
          {/* Sticky Sidebar */}
          <div className="flex-none border-r min-h-screen sticky top-0 lg:block hidden">
            <UserSidebar />
          </div>
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-10">
              <UserNavbar />
            </div>
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto md:px-7 px-4 pt-7 space-y-5">
              <Breadcrumb />
              {children}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
};

export default UserLayout;
