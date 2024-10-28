"use client";
import { SubCardItems } from "@/lib/companycard/cards";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

export default function SubCompanyCard({ params }) {
  // Generate dynamic route based on company ID
  const getRoute = (id) => `/dashboard/admin/subCompanies/${id}`;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 pb-10 place-items-center ">
      {SubCardItems.map((company) => (
        <Link
          href={getRoute(company.id)}
          key={company.id}
          className="container grid h-[400px] w-full hover:cursor-pointer hover:shadow-lg place-items-center rounded-xl bg-gray-50 shadow-md py-4 px-5 gap-y-10"
        >
          <div className="md:text-2xl text-xl font-semibold tracking-wider place-content-start">
            {company.companyName}
          </div>

          {/* Modify logo section */}
          {company.logo ? (
            <div className="relative h-24 w-24">
              <Image
                src={company.logo} // Use the logo image path
                alt={`${company.companyName} logo`}
                layout="fill" // Ensures the image takes up the container size
                objectFit="contain" // Ensures the image scales properly within the container
              />
            </div>
          ) : (
            <div className="h-24 w-24 flex items-center justify-center bg-gray-200 rounded-full">
              <span className="text-sm text-gray-500">No Logo</span>{" "}
              {/* Placeholder */}
            </div>
          )}

          <div className="grid grid-cols-2 text-xs gap-2">
            {company.content.map((item) => (
              <div
                key={item.id}
                className={`h-12 w-30 rounded-lg ${item.bgColor} place-content-center p-2`}
              >
                <div className="font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
