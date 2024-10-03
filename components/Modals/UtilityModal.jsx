"use client";

import React, { useState } from "react";

const UtilityModal = ({ isOpen, onClose, utility }) => {
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [percentageChange, setPercentageChange] = useState("");

  if (!isOpen) return null;

  // Function to get dynamic labels and placeholders based on utility
  const getLabelAndPlaceholder = (utilityName) => {
    switch (utilityName) {
      case "Electricity":
        return {
          priceLabel: "Price Per Unit",
          pricePlaceholder: "Enter price per unit",
          percentageLabel: "Percentage Change",
        };
      case "Water":
        return {
          priceLabel: "Price Per Gallon",
          pricePlaceholder: "Enter price per gallon",
          percentageLabel: "Percentage Change in Rate",
        };
      case "Airtime":
        return {
          priceLabel: "Top-up Amount",
          pricePlaceholder: "Enter top-up amount",
          percentageLabel: "Discount Percentage",
        };
      case "Data":
        return {
          priceLabel: "Data Plan Price",
          pricePlaceholder: "Enter data plan price",
          percentageLabel: "Price Change",
        };
      case "TV Subscriptions":
        return {
          priceLabel: "Subscription Fee",
          pricePlaceholder: "Enter subscription fee",
          percentageLabel: "Discount Percentage",
        };
      default:
        return {
          priceLabel: "Amount",
          pricePlaceholder: "Enter amount",
          percentageLabel: "Percentage Change",
        };
    }
  };

  // Get labels and placeholders for the current utility
  const { priceLabel, pricePlaceholder, percentageLabel } =
    getLabelAndPlaceholder(utility.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 text-xs">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            {utility.name} Form
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &#x2715;
          </button>
        </div>
        <form className="flex justify-evenly">
          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="pricePerUnit">
              {priceLabel}
            </label>
            <input
              type="text"
              id="pricePerUnit"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder={pricePlaceholder}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 mb-2"
              htmlFor="percentageChange"
            >
              {percentageLabel}
            </label>
            <input
              type="text"
              id="percentageChange"
              value={percentageChange}
              onChange={(e) => setPercentageChange(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Enter percentage change"
            />
          </div>
        </form>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            type="submit"
            className=" text-white px-4 py-2 rounded-lg bg-black hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UtilityModal;
