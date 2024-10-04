"use client";

import LineChart from "@/app/dashboard/User/components/LineChart";
import TrafficWebsite from "@/app/dashboard/User/components/TrafficWebsite";
import Table from "@/app/dashboard/User/components/Table";
import React from "react";
import Card from "@/app/dashboard/User/components/Card";
import TopProducts from "@/app/dashboard/User/components/TopProducts";
import TrafficLocation from "@/app/dashboard/User/components/TrafficLocation";

const OverView = () => {
  return (
    <div className="grid gap-y-4 ">
      <div>
        <Card />
      </div>
      <div className="grid lg:grid-cols-3 gap-x-5 gap-y-5 mx-auto lg:mx-0">
        <span className="w-[345px] md:w-[550px] lg:w-full lg:col-span-2 bg-gray-50 shadow-md rounded-xl p-5">
          <div className="flex text-xs space-x-14 pb-2">
            <div className="space-x-5">
              <span className="font-semibold">Total Users</span>
              <span className="text-gray-500">Total Profits</span>
            </div>
            <div className="border-l border-gray-400 space-x-8 pl-5 flex">
              <div className="flex space-x-2 ">
                <div className="mt-[6px]">
                  <div className="bg-blue-800 text-xs h-1 w-1 rounded-full"></div>
                </div>
                <div>This year</div>
              </div>
              <div className="flex space-x-2">
                <div className="mt-[6px]">
                  <div className="bg-pink-300 text-xs h-1 w-1 rounded-full"></div>
                </div>
                <div>Last year</div>
              </div>
            </div>
          </div>
          <LineChart />
        </span>
        <span>
          <TrafficWebsite />
        </span>
      </div>
      <div className="lg:flex lg:space-x-5 mx-auto grid gap-y-5">
        <span>
          <TopProducts />
        </span>
        <span>
          <TrafficLocation />
        </span>
      </div>
      <div className="mx-auto">
        <Table />
      </div>
    </div>
  );
};

export default OverView;