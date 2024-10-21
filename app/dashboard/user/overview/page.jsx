"use client";

import LineChart from "@/components/LineChart";
import TrafficWebsite from "@/components/TrafficWebsite";
import Table from "@/components/Table";
import React from "react";
import Card from "@/components/Card";
import TopProducts from "@/components/TopProducts";
import TrafficLocation from "@/components/TrafficLocation";

const columns = [
  {
    Header: "Description",
    accessor: "description", // Key in the data
  },
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Merchant",
    accessor: "merchant",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Receipt",
    accessor: "receipt",
    // Adding a custom render to display whether receipt is available
    Cell: ({ value }) => (value ? "Yes" : "No"),
  },
];

// Mock data for the table
const data = [
  {
    description: "Office Supplies",
    id: "TX123",
    type: "Expense",
    merchant: "Staples",
    date: "2024-09-10",
    amount: "$120.50",
    receipt: true,
  },
  {
    description: "Business Travel",
    id: "TX124",
    type: "Expense",
    merchant: "Delta Airlines",
    date: "2024-09-12",
    amount: "$450.75",
    receipt: true,
  },
  {
    description: "Client Lunch",
    id: "TX125",
    type: "Expense",
    merchant: "The Grill",
    date: "2024-09-15",
    amount: "$75.80",
    receipt: false,
  },
  {
    description: "Software Purchase",
    id: "TX126",
    type: "Expense",
    merchant: "Microsoft",
    date: "2024-09-17",
    amount: "$299.99",
    receipt: true,
  },
  {
    description: "Office Rent",
    id: "TX127",
    type: "Expense",
    merchant: "WeWork",
    date: "2024-09-20",
    amount: "$1500.00",
    receipt: true,
  },
  {
    description: "Website Hosting",
    id: "TX128",
    type: "Expense",
    merchant: "AWS",
    date: "2024-09-22",
    amount: "$85.30",
    receipt: true,
  },
  {
    description: "Team Building Event",
    id: "TX129",
    type: "Expense",
    merchant: "Escape Room",
    date: "2024-09-25",
    amount: "$250.00",
    receipt: false,
  },
  {
    description: "Advertising Campaign",
    id: "TX130",
    type: "Expense",
    merchant: "Google Ads",
    date: "2024-09-28",
    amount: "$500.00",
    receipt: true,
  },
];

const UserOverView = () => {
  return (
    <div className="grid gap-y-4 ">
      <div>
        <Card />
      </div>
      <div className="grid lg:grid-cols-3 gap-x-5 gap-y-5 ">
        <span className=" lg:col-span-2 bg-gray-50 rounded-xl p-5 shadow-md hover:cursor-pointer hover:shadow-lg">
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
      <div className="grid lg:grid-cols-2 gap-5">
        <span className="w-full">
          <TopProducts />
        </span>
        <span className="w-full ">
          <TrafficLocation />
        </span>
      </div>
      <div className="mb-10 ">
        <Table
          columnsData={columns}
          rowData={data}
          title="Recent Transaction"
          className="w-full text-blue-950"
        />
      </div>
    </div>
  );
};

export default UserOverView;
