"use client";
import React, { useState } from "react";
import { FiZap, FiDroplet, FiSmartphone, FiWifi, FiTv } from "react-icons/fi";
import UtilityModal from "./Modals/UtilityModal";

const utilities = [
  {
    name: "Electricity",
    description: "Home and Office bills",
    icon: FiZap,
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-500",
  },
  {
    name: "Water",
    description: "Utility bills",
    icon: FiDroplet,
    iconBg: "bg-blue-200",
    iconColor: "text-blue-500",
  },
  {
    name: "Airtime",
    description: "Mobile top-up",
    icon: FiSmartphone,
    iconBg: "bg-green-200",
    iconColor: "text-green-500",
  },
  {
    name: "Data",
    description: "Internet subscription",
    icon: FiWifi,
    iconBg: "bg-purple-200",
    iconColor: "text-purple-500",
  },
  {
    name: "TV Subscriptions",
    description: "Cable TV bills",
    icon: FiTv,
    iconBg: "bg-[#DCFAF8]",
    iconColor: "text-[#16DBCC]",
  },
];

export default function UtilitiesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUtility, setSelectedUtility] = useState(null);

  const openModal = (utility) => {
    setSelectedUtility(utility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUtility(null);
  };

  return (
    <div className="space-y-6">
      {utilities.map((utility, index) => (
        <div
          key={index}
          className="flex justify-between text-[10px] md:text-sm rounded-xl bg-gray-50 p-5 md:p-7 lg:w-[594px] shadow-md"
        >
          <div className="flex space-x-3 md:space-x-5">
            <div className={`p-3 md:p-4 rounded-xl ${utility.iconBg}`}>
              <utility.icon className={`w-6 h-6 ${utility.iconColor}`} />
            </div>
            <div className="space-y-3">
              <div className="font-bold">{utility.name}</div>
              <div className="md:text-xs text-gray-500">
                {utility.description}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => openModal(utility)}
              className="bg-white border border-[#123288] text-xs place-content-center rounded-2xl px-2 py-1 lg:px-10 text-center"
            >
              Edit
            </button>
          </div>
        </div>
      ))}

      {selectedUtility && (
        <UtilityModal
          isOpen={isModalOpen}
          onClose={closeModal}
          utility={selectedUtility}
        />
      )}
    </div>
  );
}
