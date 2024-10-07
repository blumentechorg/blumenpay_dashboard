// app/dashboard/companies/[id]/page.jsx
import Aimedicare from "@/public/svg/companies/aimedicare";
import Sales from "@/public/svg/sales";
import Adduser from "@/public/svg/adduser";
import Customers from "@/public/svg/customers/customer";
import Algorizmih from "@/public/svg/companies/algorizmih";
import Goalpass from "@/public/svg/companies/goalpass";
import Amaltech from "@/public/svg/companies/amaltech";
import Citymed from "@/public/svg/companies/citymed";
import Link from "next/link"; // Import Next.js Link

export default function CompanyDetailsPage({ params }) {
  const { id } = params; // Retrieve the company ID from the URL

  // Sample data for the companies
  const companyData = {
    1: {
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "500",
          description: "Active Customers",
          change: "+5% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N120,000",
          description: "Revenue",
          change: "+10% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "15%",
          description: "Return Rate",
          change: "-3% this month",
        },
      ],
    },
    2: {
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },

    3: {
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },
    4: {
      companyName: "ERP Software",
      logo: null,
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },
    5: {
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },
    6: {
      companyName: "City Med",
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },

    7: {
      companyName: "City Med",
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },

    8: {
      companyName: "City Med",
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
        {
          id: 3,
          bgColor: "bg-blue-100",
          iconBgColor: "bg-[#50E3C2]",
          icon: <Customers />,
          amount: "320",
          description: "Active Customers",
          change: "+8% this month",
        },
        {
          id: 4,
          bgColor: "bg-green-100",
          iconBgColor: "bg-[#7ED321]",
          icon: <Customers />,
          amount: "N200,000",
          description: "Revenue",
          change: "+15% this quarter",
        },
        {
          id: 5,
          bgColor: "bg-red-100",
          iconBgColor: "bg-[#D0021B]",
          icon: <Sales />,
          amount: "10%",
          description: "Return Rate",
          change: "-5% this month",
        },
      ],
    },
    // Add more companies as needed
  };

  // Get the selected company data based on the URL ID
  const selectedCompany = companyData[id];

  if (!selectedCompany) {
    return <p>Loading...</p>; // Loading state while data is being fetched
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-semibold mb-8">
        {selectedCompany.companyName}
      </h1>

      <div className="gap-y-5 lg:gap-y-8 pb-20 place-items-center">
        <div className="w-full rounded-xl bg-gray-100 shadow-md p-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">{selectedCompany.logo}</div>

          {/* Sales and Customer Info */}
          <div className="flex flex-wrap gap-4">
            {selectedCompany.content.map((item) => (
              <Link
                key={item.id}
                href={`/dashboard/companies/${id}/details/${item.id}`}
              >
                <div
                  className={`p-4 rounded-lg ${item.bgColor} shadow-md w-[230px] hover:cursor-pointer hover:shadow-lg`}
                >
                  <div
                    className={`mb-4 ${item.iconBgColor} p-2 h-8 w-8 rounded-full`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-lg font-semibold">{item.amount}</div>
                  <div className="text-sm">{item.description}</div>
                  <div className="text-xs text-gray-500">{item.change}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
