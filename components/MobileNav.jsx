import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Overview from "@/public/svg/sidebar/Overview";
import Companies from "@/public/svg/sidebar/Companies";
import Customers from "@/public/svg/sidebar/Customers";
import Merchants from "@/public/svg/sidebar/Merchants";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Overview", icon: <Overview />, link: "/dashboard/overview" },
    { name: "Companies", icon: <Companies />, link: "/dashboard/companies" },
    { name: "Customers", icon: <Customers />, link: "/dashboard/customers" },
    { name: "Merchants", icon: <Merchants />, link: "/dashboard/merchants" },
    {
      name: "Utilities",
      icon: <Companies />,
      link: "/dashboard/coreservices/utilities",
    },
    {
      name: "Profile",
      icon: <Customers />,
      link: "/dashboard/coreservices/profile",
    },
  ];

  return (
    <div className="">
      {/* Hamburger Icon */}
      <button
        className="text-gray-800  rounded-md focus:outline-none  md:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="w-5 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Modal for Navigation Menu */}
      {isOpen && (
        <div className="absolute bg-gray-800 mt-4 bg-opacity-75 flex flex-col min-h-screen left-0 w-full items-center justify-center space-y-4 text-white md:hidden">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className="text-xl font-medium flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
          <Link href="/">
            <li className="mb-2 md:p-2 rounded-xl flex text-sm lg:space-x-4 items-center transition-transform transform hover:translate-x-2 lg:hover:bg-gray-100">
              Logout
            </li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
