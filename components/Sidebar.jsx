"use client";

import Image from "next/image";
import logo from "@/public/images/logo.png";
import logo2 from "@/public/images/logo2.png";
import admin from "@/public/images/admin.png";
import { GoDotFill } from "react-icons/go";
import Overview from "@/public/svg/sidebar/Overview";
import Companies from "@/public/svg/sidebar/Companies";
import Customers from "@/public/svg/sidebar/Customers";
import Merchants from "@/public/svg/sidebar/Merchants";

import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; // Import the useUser hook
import ProtectedRoute from "./Auth/ProtectedRoute";
import LogoutButton from "./Auth/LogoutButton";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const { user, logout } = useAuth(); // Add logout to the destructured values
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const favorites = [
    {
      name: "Overview",
      icon: <GoDotFill className="text-gray-600 w-3 h-5" />,
      link: "../dashboard/overview",
    },
    {
      name: "Customers",
      icon: <GoDotFill className="text-gray-600 w-3 h-5" />,
      link: "../dashboard/customers",
    },
  ];

  const dashboardItems = [
    { name: "Overview", icon: <Overview />, link: "/dashboard/overview" },
    {
      name: "Companies",
      icon: <Companies />,
      link: "/dashboard/companies",
    },
    {
      name: "Customers",
      icon: <Customers />,
      link: "/dashboard/customers",
    },
    {
      name: "Merchants",
      icon: <Merchants />,
      link: "/dashboard/merchants",
    },
  ];

  const coreServices = [
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

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirect to home page after logout
  };

  return (
    <>
      <ProtectedRoute>
        <div className="h-screen flex flex-col justify-between text-gray-800 sticky top-0">
          <div className="flex-grow overflow-y-auto pt-10 space-y-5 px-2 md:px-5 lg:px-10">
            <div className="flex justify-center">
              <Image src={logo} alt="" width={40} height={40} />
            </div>

            {/* Favorites */}
            <div className="space-y-4">
              <div className="flex text-sm space-x-3">
                <span className="text-[#1C1C1C66]">Favorites</span>
                <span className="text-gray-300">Recently</span>
              </div>
              <ul>
                {favorites.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li className="flex space-x-2 text-sm items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100 p-2 rounded-xl">
                      <span className="hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="">{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Dashboard */}
            <div className="space-y-2">
              <span className="text-[#1C1C1C66] text-sm">Dashboard</span>
              <ul className="space-y-4">
                {dashboardItems.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <li className="flex space-x-2 text-sm items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100 p-2 rounded-xl">
                      <span className="hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="">{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Core Services */}
            {/* {(user?.role === "admin" || user?.role === "super_admin") && ( */}
            <div className="space-y-2">
              <span className="text-[#1C1C1C66] text-sm">Core Services</span>
              <ul className="space-y-4">
                {coreServices.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <li className="flex space-x-2 text-sm items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100 p-2 rounded-xl">
                      <span className="hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="">{item.name}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* // )} */}
          </div>

          {/* Bottom */}
          <div className="px-2 md:px-5 pb-4">
            <div className="md:px-4 pt-4 w-full">
              <div className="flex items-center lg:space-x-8 space-x-2 pb-3 md:pb-0">
                <div className="flex space-x-2">
                  <Image
                    src={admin}
                    alt="Avatar"
                    className="md:w-10 md:h-10 w-7 h-7 rounded-full"
                    width={100}
                    height={100}
                  />
                  <div className="hidden md:block">
                    <div className="text-sm md:text-xs lg:text-sm font-semibold">
                      {user?.username || "John Doe"}
                    </div>
                    <div className="text-xs text-gray-400">
                      {user?.role || "Admin"}
                    </div>
                  </div>
                </div>
                <div>
                  <button onClick={toggleDropdown} className="text-xs">
                    <FaChevronDown
                      className={`transition-transform h-2 w-2 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Dropdown for Account Options */}
              {isDropdownOpen && (
                <div className="md:p-2 rounded text-xs">
                  <ul>
                    <li className="mb-2 md:p-2 rounded-xl flex lg:space-x-4 items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100">
                      Settings
                    </li>
                    <li
                      onClick={handleLogout}
                      className="mb-2 md:p-2 rounded-xl flex lg:space-x-4 items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex md:justify-center mt-4">
              <Image
                src={logo2}
                alt="Avatar"
                className="w-10 h-10 lg:mr-3"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
