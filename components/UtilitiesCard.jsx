import { PiHouseSimpleFill } from "react-icons/pi";
import { FiRss } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const utilities = [
  {
    id: 1,
    name: "Electricity",
    description: "Home and Office bills",
    icon: PiHouseSimpleFill,
    iconColor: "#FF82AC",
    bgColor: "#FFE0EB",
  },
  {
    id: 2,
    name: "Data",
    description: "Internet data bundles",
    icon: FiRss,
    iconColor: "#396AFF",
    bgColor: "#E7EDFF",
  },
  {
    id: 3,
    name: "Airtime",
    description: "Make Calls",
    icon: FiPhoneCall,
    iconColor: "#FF82AC",
    bgColor: "#FFE0EB",
  },
];

export default function UtilitiesCard() {
  return (
    <div className="flex text-[10px] lg:text-sm lg: space-x-2 lg:space-x-7 w-full ">
      {utilities.map((utility) => (
        <div
          key={utility.id}
          className=" text-[10px] lg:text-sm flex space-x-2 lg:space-x-5 rounded-xl bg-gray-50 items-center p-2 lg:px-10 lg:py-7 shadow-md"
        >
          <div
            className={`p-1 md:p-3   rounded-xl h-5 md:h-12 lg:h-14  flex items-center`}
            style={{ backgroundColor: utility.bgColor }}
          >
            <utility.icon
              className="md:w-5 md:h-5 lg:h-7 lg:w-7"
              style={{ color: utility.iconColor }}
            />
          </div>
          <div className="space-y-2">
            <div className="lg:text-base font-semibold">{utility.name}</div>
            <div className=" text-gray-500">{utility.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
