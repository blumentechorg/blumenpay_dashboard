"use client";

import React from "react";
import CustomerCard from "@/components/customerCard";
import CustomerTable from "@/components/CustomerTable";
import { customers, data } from "@/app/api/data"; // Assuming you've moved the data to this file

export default function Customers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-y-8">
        <section>
          <CustomerCard />
        </section>
        <section>
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
