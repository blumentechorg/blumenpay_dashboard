import UtilitiesCard from "@/app/dashboard/User/components/UtilitiesCard";
import UtilitiesList from "@/app/dashboard/User/components/UtilitiesList";
import React from "react";

export default function page() {
  return (
    <div className="grid gap-y-10 pb-60">
      <div>
        <UtilitiesCard />
      </div>
      <div className=" grid gap-y-5">
        <span className="font-semibold ">List</span>
        <UtilitiesList />
      </div>
    </div>
  );
}
