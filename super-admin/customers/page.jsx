import React from "react";
import CustomerCard from "@/app/dashboard/User/components/customerCard";
import CustomerTable from "@/app/dashboard/User/components/CustomerTable";

export default function Customers() {
  return (
    <div className="grid gap-y-4">
      <div>
        <CustomerCard />
      </div>
      <div className="pb-24">
        <CustomerTable />
      </div>
    </div>
  );
}
