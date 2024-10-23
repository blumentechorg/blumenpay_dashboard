"use client";

import React from "react";

import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="">
      <div className="flex items-center rounded-xl border bg-gray-100 overflow-hidden ">
        {/* Left Icon */}
        <div className="px-2 text-gray-300 ">
          <CiSearch className="text-gray-300" />
        </div>

        {/* Search Input */}
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="w-16 py-1 outline-none focus:outline-none focus:ring-0 text-sm font-light bg-gray-100"
          />
        </div>

        {/* Right Icon */}
        <div className="px-3 text-gray-300 ">&#8984;/</div>
      </div>
    </div>
  );
}
