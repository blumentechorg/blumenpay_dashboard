"use client";

import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

export default function DropDown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div>
        <button onClick={toggleDropdown} className="text-xs ">
          <FaChevronDown
            className={`transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown for Account Options */}
      {isDropdownOpen && (
        <div className="md:p-2 rounded text-xs md:text-base ">
          <ul>
            <li className="mb-2 md:p-2  rounded-xl text-sm flex lg:space-x-4 items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100">
              Settings
            </li>
            <li className="mb-2 md:p-2 rounded-xl flex text-sm lg:space-x-4 items-center transition-transform transform hover:translate-x-2 hover:bg-gray-100">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
