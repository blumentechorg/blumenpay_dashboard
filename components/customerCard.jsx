import Customer from "@/public/svg/customers/customer";
import Members from "@/public/svg/customers/members";

import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";

export default function CustomerCard() {
  const isCustomerIncrease = true; // Change this based on actual data
  const isMemberIncrease = false; // Change this based on actual data

  return (
    <div className="">
      <div className="flex text-[10px] p-4 md:p-7 hover:cursor-pointer hover:shadow-lg lg:py-8 space-x-4 md:space-x-8 lg:space-x-12 rounded-xl bg-gray-50 w-full md:w-[600px] lg:w-[800px]  shadow-md    ">
        {/* Customer Section */}
        <div className="flex space-x-2 lg:space-x-5 pt-2 md:pt-0 ">
          <div className="bg-blue-200  rounded-full  w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2  lg:p-4 ">
            <Customer />
          </div>
          <div>
            <div className=" text-gray-400 lg:text-sm ">Total Customers</div>
            <div className=" text-base  lg:text-xl font-semibold">5,467</div>
            <div className="flex items-center">
              {isCustomerIncrease ? (
                <>
                  <HiArrowUp className=" text-green-500" />
                  <div className="text-green-500 pr-2 ">16%</div>
                  <div>this month</div>
                </>
              ) : (
                <>
                  <HiArrowDown className=" text-red-500" />
                  <div className="text-red-500 pr-2 ">16%</div>
                  <div>this month</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div className="flex space-x-2 lg:space-x-5 pt-2 md:pt-0  ">
          <div className="bg-green-200 rounded-full  w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 p-2 lg:p-4 ">
            <Members />
          </div>
          <div>
            <div className=" text-gray-400 lg:text-sm">Members</div>
            <div className="font-semibold text-base lg:text-xl">5,467</div>
            <div className="flex items-center">
              {isMemberIncrease ? (
                <>
                  <HiArrowUp className=" text-green-500" />
                  <div className="text-green-500 pr-2">16% </div>
                  <div>this month</div>
                </>
              ) : (
                <>
                  <HiArrowDown className=" text-red-500" />
                  <div className="text-red-500 pr-2">16%</div>
                  <div className="">this month</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
