"use client";
import Aimedicare from "@/public/svg/companies/aimedicare";
import Sales from "@/public/svg/sales";
import Adduser from "@/public/svg/adduser";
import Algorizmih from "@/public/svg/companies/algorizmih";
import Goalpass from "@/public/svg/companies/goalpass";
import Amaltech from "@/public/svg/companies/amaltech";
import Citymed from "@/public/svg/companies/citymed";
import Link from "next/link";

export default function CompanyCard() {
  const cardItems = [
    {
      id: 1,
      companyName: "AI Medicare",
      logo: <Aimedicare />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
    {
      id: 2,
      companyName: "Algorizmih",
      logo: <Algorizmih />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
    // Add more objects to generate 6 cards total
    {
      id: 3,
      companyName: "Goal Pass",
      logo: <Goalpass />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
    {
      id: 4,
      companyName: "ERP Software",
      logo: <Aimedicare />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
    {
      id: 5,
      companyName: "AmalTech Store",
      logo: <Amaltech />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
    {
      id: 6,
      companyName: "CityMed",
      logo: <Citymed />,
      content: [
        {
          id: 1,
          bgColor: "bg-yellow-100",
          iconBgColor: "bg-[#F8E71C]",
          icon: <Sales />,
          amount: "N80,000",
          description: "Sales",
          change: "+2% this week",
        },
        {
          id: 2,
          bgColor: "bg-pink-100",
          iconBgColor: "bg-[#BD10E0]",
          icon: <Adduser />,
          amount: "22",
          description: "New Customers",
          change: "+12% this week",
        },
      ],
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-y-8 pb-20 place-items-center ">
      {cardItems.map((company) => (
        <Link
          href={"/dashboard/companies/" + company.companyid}
          key={company.id}
          className="container grid h-96 w-full  md:w-4/5 lg:w-[320px]  place-items-center rounded-xl bg-gray-100 shadow-md py-4 gap-y-5"
        >
          <div className="lg:text-4xl md:text-2xl text-xl font-semibold tracking-wider">
            {company.companyName}
          </div>

          <div>{company.logo}</div>

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
                <div className="font-semibold">{item.amount}</div>
                <div className="text-xs">{item.description}</div>
                <div className="text-xs">{item.change}</div>
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
