import Sales from "@/public/svg/sales";
import Adduser from "@/public/svg/adduser";
import Goalpass from "@/public/svg/companies/goalpass";

export const cardItems = [
  {
    id: 1,
    companyName: "ERP Software",
    logo: null,
    content: [
      {
        id: 1,
        bgColor: "bg-yellow-100",
        iconBgColor: "bg-[#F8E71C]",
        icon: <Sales />,

        project: {
          project1: "Khaliques Group",
          project2: "",
          project3: "",
          project4: "",
          project5: "",
        },
      },
      {
        id: 2,
        bgColor: "bg-pink-100",
        iconBgColor: "bg-[#BD10E0]",
        icon: <Adduser />,

        project: {
          project1: "Khaliques Group",
          project2: "",
          project3: "",
          project4: "",
          project5: "",
        },
      },
    ],
  },
  {
    id: 2,
    companyName: "Blumen MarketPlace",
    logo: null,
    content: [
      {
        id: 1,
        bgColor: "bg-yellow-100",
        iconBgColor: "bg-[#F8E71C]",
        icon: <Sales />,

        project: {
          project1: "Amaltech Store",
          project2: "Squid Energy Store",
          project3: "Switch-Box Store",
          project4: "Jetson Store",
          project5: "",
        },
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
    id: 3,
    companyName: "Facility Management Services",
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
    ],
  },
  {
    id: 4,
    companyName: "Vending Services",
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
    ],
  },
  {
    id: 5,
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
];
