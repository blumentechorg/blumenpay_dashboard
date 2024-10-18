import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import React from "react";

const CardComponent = ({ cardData }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-4 sm:p-5 rounded-xl shadow-md items-center hover:cursor-pointer hover:shadow-lg w-full ${card.bgColor}`}
          style={{ ...card.customStyles }}
        >
          <div className="text-xs sm:text-sm">{card.title}</div>
          <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold my-2">
            {card.amount}
          </div>
          <div className="flex items-center text-xs sm:text-sm">
            <span className="mr-1">{card.percentage}</span>
            <span className="text-base">{card.svg}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage
const App = () => {
  const cardData = [
    {
      title: "Profit",
      amount: "2,000,000",
      percentage: "+11.02%",
      svg: <FaArrowTrendUp />, // Replace with your actual SVG icon
      bgColor: "bg-[#E3F5FF]", // You can pass any Tailwind background color class
      customStyles: {}, // You can pass inline styles here
    },
    {
      title: "Expenses",
      amount: "5,000,000",
      percentage: "+7.58%",
      svg: <FaArrowTrendDown />, // Replace with your actual SVG icon
      bgColor: "bg-[#EBC5FF]",
      customStyles: { border: "" }, // Custom styles for this card
    },
    {
      title: "Today",
      amount: "5,000,000",
      percentage: "+7.58%",
      svg: <FaArrowTrendUp />, // Replace with your actual SVG icon
      bgColor: "bg-[#CCFFBF]",
      customStyles: { border: "" }, // Custom styles for this card
    },
    {
      title: "All Time",
      amount: "5,000,000",
      percentage: "+7.58%",
      svg: <FaArrowTrendUp />, // Replace with your actual SVG icon
      bgColor: "bg-[#D4D3FF]",
      customStyles: { border: "" }, // Custom styles for this card
    },
  ];

  return <CardComponent cardData={cardData} />;
};

export default App;
