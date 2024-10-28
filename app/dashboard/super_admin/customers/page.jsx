"use client";

import React from "react";
import CustomerCard from "@/components/customerCard";
import CustomerTable from "@/components/CustomerTable";
// import { columns } from "@/components/CustomerTable"; // Assuming you've moved the data to this file

export default function Customers() {
  return (
    <div className="container lg:px-4 py-8">
      <div className="grid gap-y-8">
        <section>
          <CustomerCard />
        </section>
        <section>
          <CustomerTable
            // columnsData={columns}
            // rowData={data}
            className="w-[350px]  text-blue-950"
          />
        </section>
      </div>
    </div>
  );
}
