"use client";

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

  // Mock data for the Table
  const tableData = [
    {
      description: "Office Supplies",
      id: "TX123",
      type: "Expense",
      merchant: "Staples",
      date: "2024-09-10",
      amount: "$120.50",
      receipt: true,
    },
    // ...more data
  ];

  const tableColumns = [
    { Header: "Description", accessor: "description" },
    { Header: "ID", accessor: "id" },
    { Header: "Type", accessor: "type" },
    { Header: "Merchant", accessor: "merchant" },
    { Header: "Date", accessor: "date" },
    { Header: "Amount", accessor: "amount" },
    {
      Header: "Receipt",
      accessor: "receipt",
      Cell: ({ value }) => (value ? "Yes" : "No"),
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Link href={`/dashboard/super_admin/companies/${id}`}>
        <button className="hover:scale-110 transition-transform duration-200 flex text-sm space-x-2">
          <HiArrowLongLeft className="w-5 h-5" />
          <div>Back</div>
        </button>
      </Link>
      <h1 className="text-4xl font-semibold mb-8">Details for {itemId}</h1>
      <div className="grid gap-y-4">
        <div>
          <Card />
        </div>
        <div className="mx-auto w-full">
          <Table
            columnsData={tableColumns}
            rowData={tableData}
            title="Detailed Metrics"
          />
        </div>
      </div>
    </div>
  );
};

export default MetricDetailsPage;
