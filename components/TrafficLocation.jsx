"use client";

import React from "react";
import DoughnutChart from "./DoughnutChart";

export default function TrafficLocation() {
  return (
    <div>
      <div className=" lg:w-full py-6 px-10 rounded-xl font-light bg-[#F7F9FB] hover:cursor-pointer hover:shadow-lg space-y-8 place-content-center  lg:text-base md:text-sm text-xs shadow-md md:h-[325px] h-full w-full min-w-[350px] ">
        <div className=" font-semibold pb-1">Traffic by Location</div>
        <div className="flex flex-row space-x-10">
          <div className="basis-1/3 pt-5">
            <DoughnutChart />
          </div>

          <div className=" text-sm space-y-5">
            <div className="flex lg:space-x-24 md:space-x-16 space-x-10">
              <div className="basis-1/2">Abuja</div>
              <div className="basis-1/2">35.0%</div>
            </div>
            <div className="flex lg:space-x-24 md:space-x-16 space-x-10">
              <div className="basis-1/2">Gombe</div>
              <div className="basis-1/2">35.0%</div>
            </div>
            <div className="flex lg:space-x-24 md:space-x-16 space-x-10">
              <div className="basis-1/2">Kano</div>
              <div className="basis-1/2">35.0%</div>
            </div>
            <div className="flex lg:space-x-24 md:space-x-16 space-x-10">
              <div className="basis-1/2">Other</div>
              <div className="basis-1/2">35.0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
