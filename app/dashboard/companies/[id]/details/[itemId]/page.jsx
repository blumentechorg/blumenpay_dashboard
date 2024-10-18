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
        <div className="mx-auto">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default MetricDetailsPage;
