"use client";

import React from "react";
import Layout from "@/public/svg/navbar/Layout";
import Star from "@/public/svg/navbar/Star";
import ThemeSwitch from "@/public/svg/navbar/ThemeSwitch";
import CounterClock from "@/public/svg/navbar/CounterClock";
import Bell from "@/public/svg/navbar/Bell";
import Search from "@/themes/Search";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdminMobileNav from "./AdminMobileNav";

export default function Navbar() {
  return (
    <>
      <div className="w-full sticky top-0 flex justify-between border-b py-4 px-5 bg-white shadow-b shadow-lg">
        <div className="flex space-x-3">
          {/* ltr menu */}
          <div className="">
            <AdminMobileNav />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <Layout />
          </div>

          <div className="hover:scale-110 transition-transform duration-200">
            <Star />
          </div>
          <div className="hidden lg:block pt-1">
            <Breadcrumbs />
          </div>
        </div>

        {/* rtl menu */}
        <div className="flex space-x-3">
          <div className="hidden lg:block">
            <Search />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <ThemeSwitch />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <CounterClock />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <Bell />
          </div>
          <div className="hover:scale-110 transition-transform duration-200">
            <Layout />
          </div>
        </div>
      </div>
    </>
  );
}
