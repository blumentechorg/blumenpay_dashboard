import React from "react";
import CustomerCard from "@/components/customerCard";
import CustomerTable from "@/components/CustomerTable";
import { customers, data } from "@/components/CustomerTable";

export default function Customers() {
  return (
    <div className="grid gap-y-4">
      <div>
        <CustomerCard />
      </div>
      <div className="pb-24">
        <CustomerTable
          columnsData={customers}
          rowData={data}
          title="Recent Transaction"
          className="w-full text-blue-950"
        />
      </div>
    </div>
  );
}
