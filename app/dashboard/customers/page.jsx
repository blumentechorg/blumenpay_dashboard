"use client";

import React from "react";
import CustomerCard from "@/components/customerCard";
import CustomerTable from "@/components/CustomerTable";
import { customers, data } from "@/app/api/data"; // Assuming you've moved the data to this file

export default function Customers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>
      <div className="grid gap-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Customer Overview</h2>
          <CustomerCard />
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <CustomerTable
            columnsData={customers}
            rowData={data}
            className="w-full text-blue-950"
          />
        </section>
      </div>
    </div>
  );
}
