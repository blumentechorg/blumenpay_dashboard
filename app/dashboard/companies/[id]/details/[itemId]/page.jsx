// app/dashboard/companies/[id]/details/[itemId]/page.jsx
"use client";

import { useRouter } from "next/router";
import LineChart from "@/components/LineChart";
import TrafficWebsite from "@/components/TrafficWebsite";
import Table from "@/components/Table";
import TopProducts from "@/components/TopProducts";
import TrafficLocation from "@/components/TrafficLocation";
import Card from "@/components/Card";
import Link from "next/link";
import { HiArrowLongLeft } from "react-icons/hi2";

const MetricDetailsPage = ({ params }) => {
  const { id, itemId } = params; // Retrieve company ID and metric ID from URL

  // Render your detailed view here
  return (
    <div className="container mx-auto py-10">
      <Link href={`/dashboard/companies/${id}`} className=" ">
        <button className="hover:scale-110 transition-transform duration-200 flex text-sm space-x-2">
          <HiArrowLongLeft className="w-5 h-5" />
          <div>Back</div>
        </button>
      </Link>
      <h1 className="text-4xl font-semibold mb-8">Details for {itemId}</h1>
      <div className="grid gap-y-4 ">
        <div>
          <Card />
        </div>
        <div className="grid lg:grid-cols-3 gap-x-5 gap-y-5 mx-auto lg:mx-0">
          <span className="w-[345px] md:w-[550px] lg:w-full lg:col-span-2 bg-gray-50 rounded-xl p-5 shadow-md">
            <div className="flex text-xs space-x-14 pb-2">
              <div className="space-x-5">
                <span className="font-semibold">Total Users</span>
                <span className="text-gray-500">Total Profits</span>
              </div>
              <div className="border-l border-gray-400 space-x-10 pl-5 flex">
                <div className="flex space-x-2 ">
                  <div className="mt-[6px]">
                    <div className="bg-blue-800 text-xs h-1 w-1 rounded-full"></div>
                  </div>
                  <div>This year</div>
                </div>
                <div className="flex space-x-2 ">
                  <div className="mt-[6px]">
                    <div className="bg-pink-300 text-xs h-1 w-1 rounded-full"></div>
                  </div>
                  <div>This year</div>
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
    </div>
  );
};

export default MetricDetailsPage;
