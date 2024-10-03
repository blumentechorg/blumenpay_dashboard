// "use client";

// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaChevronDown } from "react-icons/fa6";
// import Pagination from "./Pagination"; // Import the new Pagination component

// const TransactionHistory = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const rowsPerPage = 8; // Number of rows to display per page

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Example customer data
//   const customers = [
//     {
//       name: "John Doe",
//       phone: "123-456-7890",
//       email: "john@example.com",
//       services: "Web Development",
//     },
//     {
//       name: "Jane Smith",
//       phone: "987-654-3210",
//       email: "jane@example.com",
//       services: "Graphic Design",
//     },
//     {
//       name: "Sam Brown",
//       phone: "555-555-5555",
//       email: "sam@example.com",
//       services: "SEO Optimization",
//     },
//     {
//       name: "Lisa White",
//       phone: "111-222-3333",
//       email: "lisa@example.com",
//       services: "Mobile App Development",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//     {
//       name: "Michael Black",
//       phone: "333-444-5555",
//       email: "michael@example.com",
//       services: "Content Writing",
//     },
//   ];

//   // Calculate total pages
//   const totalPages = 40; // Example total pages

//   // Calculate the range of data to display for the current page
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentCustomers = customers.slice(indexOfFirstRow, indexOfLastRow);

//   // Function to handle page change
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 bg-gray-50 rounded-xl ">
//       {/* Title and Controls */}
//       <div className="flex flex-col md:flex-row justify-between items-center pb-10">
//         <h2 className="text-xl font-bold mb-4 md:mb-0">Customer Details</h2>
//         <div className="flex space-x-4">
//           {/* Search Input */}
//           <div className="flex items-center rounded-xl border overflow-hidden max-w-xs">
//             {/* Left Icon */}
//             <div className="px-2 text-gray-300">
//               <CiSearch className="text-gray-300" />
//             </div>

//             {/* Search Input */}
//             <div className="bg-blue-500">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-36 py-1 px outline-none text-sm font-light bg-gray-100"
//               />
//             </div>
//           </div>

//           {/* Sort By Dropdown */}
//           <div className="relative">
//             <button
//               className="flex items-center px-4 py-1 rounded-md focus:outline-none"
//               onClick={toggleDropdown}
//             >
//               <span className="mr-2 text-sm">Sort by:</span>
//               <FaChevronDown className="w-3 h-3" />
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Name
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Service
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto text-sm">
//         <table className="min-w-full table-auto border-collapse">
//           <thead className="font-light">
//             <tr className="text-left text-[#1C1C1C66] font-light">
//               <th className="p-4">Name</th>
//               <th className="p-4">Phone Number</th>
//               <th className="p-4">Email</th>
//               <th className="p-4">Service</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCustomers.map((customer, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-4">{customer.name}</td>
//                 <td className="p-4">{customer.phone}</td>
//                 <td className="p-4">{customer.email}</td>
//                 <td className="p-4">{customer.services}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default TransactionHistory;

"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import Pagination from "./Pagination"; // Import the new Pagination component

const CustomerTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const rowsPerPage = 8; // Number of rows to display per page

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Example customer data
  const customers = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      services: "Web Development",
      status: "Active",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      services: "Graphic Design",
      status: "Inactive",
    },
    {
      name: "Sam Brown",
      phone: "555-555-5555",
      email: "sam@example.com",
      services: "SEO Optimization",
      status: "Active",
    },
    {
      name: "Lisa White",
      phone: "111-222-3333",
      email: "lisa@example.com",
      services: "Mobile App Development",
      status: "Inactive",
    },
    {
      name: "Michael Black",
      phone: "333-444-5555",
      email: "michael@example.com",
      services: "Content Writing",
      status: "Active",
    },
    // More customer data...
  ];

  // Calculate total pages
  const totalPages = 40; // Example total pages

  // Calculate the range of data to display for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentCustomers = customers.slice(indexOfFirstRow, indexOfLastRow);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" lg:p-10 py-10 shadow-md  bg-gray-50  rounded-xl lg:w-full md:w-[500px] text-[10px] md:text-xs ">
      {/* Title and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-10 md:p-10  ">
        <h2 className="lg:text-xl md:text-lg text-base font-bold mb-4 md:mb-0">
          All Customers{" "}
        </h2>
        <div className="flex space-x-4">
          {/* Search Input */}
          <div className="flex items-center rounded-xl border overflow-hidden max-w-xs">
            {/* Left Icon */}
            <div className="px-2 text-gray-300">
              <CiSearch className="text-gray-300" />
            </div>

            {/* Search Input */}
            <div className="bg-blue-500">
              <input
                type="text"
                placeholder="Search"
                className="w-36 py-1 px outline-none  font-light bg-gray-100"
              />
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <button
              className="flex items-center px-4 py-1 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              <span className="mr-2 ">Sort by:</span>
              <FaChevronDown className="w-3 h-3" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Name
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-4   ">
        <table className="min-w-full table-auto border-collapse ">
          <thead className="font-light ">
            <tr className="text-left text-[#1C1C1C66] font-light px-2">
              <th className="md:p-4 p-1">Name</th>
              <th className="md:p-4 p-1">Phone Number</th>
              <th className="md:p-4 p-1 hidden lg:block">Email</th>
              <th className="md:p-4 p-1">Service</th>
              <th className="md:p-4 p-1">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {currentCustomers.map((customer, index) => (
              <tr key={index} className="border-t ">
                <td className="md:p-4 p-1">{customer.name}</td>
                <td className="md:p-4 p-1">{customer.phone}</td>
                <td className="md:p-4 p-1 hidden lg:block">{customer.email}</td>
                <td className="md:p-4 p-1">{customer.services}</td>
                <td className="md:p-4 p-1">
                  <button
                    className={`px-2 py-1 rounded  ${
                      customer.status === "Active"
                        ? "bg-green-300 border border-[#008767] text-[#008767]"
                        : "bg-red-300 border border-[#DF0404] text-[#DF0404]"
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default CustomerTable;
