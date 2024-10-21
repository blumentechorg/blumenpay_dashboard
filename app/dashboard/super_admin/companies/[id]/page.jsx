import Aimedicare from "@/public/svg/companies/aimedicare";
import Customers from "@/public/svg/customers/customer";
import Algorizmih from "@/public/svg/companies/algorizmih";
import Goalpass from "@/public/svg/companies/goalpass";
import Amaltech from "@/public/svg/companies/amaltech";
import { HiArrowLongLeft } from "react-icons/hi2";
import Link from "next/link"; // Import Next.js Link

export default function CompanyDetailsPage({ params }) {
  const { id } = params; // Retrieve the company ID from the URL

  // Sample data for the companies
  const companyData = {
    1: {
      companyName: "ERP Software",
      logo: null,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Customers />,
          name: "Khaliques Group",
          projects: [
            "Yanna Apartments",
            "Khaliques Global",
            "Village Restaurant",
            "Spa",
            "Gym",
          ],
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E1]",
          icon: <Customers />,
          name: "Khaliques Group",
          projects: [
            "Yanna Apartments",
            "Khaliques Global",
            "Village Restaurant",
            "Spa",
            "Gym",
          ],
        },
      ],
    },
    2: {
      companyName: "Blumen MarketPlace",
      logo: null,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Customers />,
          name: "Amaltech Store",
          projects: ["Blumen ERP Integration", "Blumen Data Analytics"],
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Customers />,
          name: "Squid Energy Store",
          projects: ["Squid Inventory Management"],
        },
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          name: "Switch Box Store",
          projects: ["Switch Box Optimization"],
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          name: "Jetson Store",
          projects: ["Jetson Payment Gateway"],
        },
      ],
    },
    3: {
      companyName: "Facilities Management Services",
      logo: null,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Customers />,
          name: "Jetson Store",
          projects: ["Jetson Facility Maintenance", "Jetson Logistics"],
        },
      ],
    },
    4: {
      companyName: "Vending Machines",
      logo: null,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Customers />,
          name: "Band Project and Property",
          projects: ["Band Property Setup", "Vending Operations"],
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Customers />,
          name: "Amd Facilities",
          projects: ["Facility Management", "Amd Project Renovation"],
        },
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          name: "Brave Rock Estate",
          projects: ["Brave Rock Expansion", "Brave Rock Security Enhancement"],
        },
      ],
    },
    5: {
      companyName: "Goal Pass",
      logo: null,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Customers />,
          name: "Band Project and Property",
          projects: ["Band Property Setup", "Vending Operations"],
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Customers />,
          name: "Amd Facilities",
          projects: ["Facility Management", "Amd Project Renovation"],
        },
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          name: "Brave Rock Estate",
          projects: ["Brave Rock Expansion", "Brave Rock Security Enhancement"],
        },
      ],
    },
  };

  // Get the selected company data based on the URL ID
  const selectedCompany = companyData[id];

  if (!selectedCompany) {
    return <p>Loading...</p>; // Loading state while data is being fetched
  }

  return (
    <div className="container mx-auto py-10">
      <Link href="/dashboard/companies/" className=" ">
        <button className="hover:scale-110 transition-transform duration-200 flex text-sm space-x-2">
          <HiArrowLongLeft className="w-5 h-5" />
          <div>Back</div>
        </button>
      </Link>
      <h1 className="text-4xl font-semibold mb-8">
        {selectedCompany.companyName}
      </h1>

      <div className="gap-y-5 lg:gap-y-8 pb-24 place-items-center">
        <div className="w-full rounded-xl bg-gray-50 shadow-md p-6">
          {/* Displaying company content */}
          <div className="flex flex-wrap gap-4">
            {selectedCompany.content.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/companies/${id}/details/${encodeURIComponent(
                  item.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
                className={`p-4 rounded-lg ${item.bgColor} shadow-md w-[230px]  hover:cursor-pointer hover:shadow-lg`}
              >
                <div
                  className={`mb-4 ${item.iconBgColor} p-2 h-8 w-8 rounded-full`}
                >
                  {item.icon}
                </div>
                <div className="font-semibold">{item.name}</div>
                {/* List of projects */}
                <ul className="mt-2 text-sm">
                  {item.projects.map((project, index) => (
                    <li key={index} className="list-disc ml-4">
                      {project}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
