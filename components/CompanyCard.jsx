"use client";
import { cardItems } from "@/lib/companycard/cardItems";
import Link from "next/link";

export default function CompanyCard() {
  // Generate dynamic route based on company ID
  const getRoute = (id) => `/dashboard/companies/${id}`;

  return (
    <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-y-8 pb-20 place-items-center">
      {cardItems.map((company) => (
        <Link
          href={getRoute(company.id)}
          key={company.id}
          className="container grid h-[400px] w-full md:w-4/5 lg:w-[320px] place-items-center rounded-xl bg-gray-50 shadow-md py-4 px-5 gap-y-5"
        >
          {/* Company Name */}
          <div className="md:text-2xl text-xl font-semibold ">
            {company.companyName}
          </div>

          {/* Company Logo (Render only if it exists) */}
          {company.logo && <div>{company.logo}</div>}

          {/* Content Section */}
          <div className="flex space-x-4 text-sm">
            {company.content.map((item) => (
              <div
                key={item.id}
                className={`h-30 w-30 rounded-xl ${item.bgColor} p-4`}
              >
                <div
                  className={`mb-5 ${item.iconBgColor} p-1 h-7 w-7 rounded-full`}
                >
                  {item.icon}
                </div>
                {/* <div className="font-semibold">{item.name}</div> */}
                {/* Project Items */}
                {item.project && (
                  <>
                    <div className="text-xs">{item.project.project1}</div>
                    <div className="text-xs">{item.project.project2}</div>
                    <div className="text-xs">{item.project.project3}</div>
                    <div className="text-xs">{item.project.project4}</div>
                    <div className="text-xs">{item.project.project5}</div>
                  </>
                )}

                {/* Amount and Description (if available) */}
                {item.amount && (
                  <>
                    <div className="text-sm font-semibold">{item.amount}</div>
                    <div className="text-xs text-gray-600">
                      {item.description}
                    </div>
                    <div className="text-xs text-green-600">{item.change}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
