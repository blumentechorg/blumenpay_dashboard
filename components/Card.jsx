import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import React from "react";

const CardComponent = ({ cardData }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-y-4 gap-x-3 text-[10px] md:text-xs  ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-5   rounded-xl  shadow-md items-center  ${card.bgColor}`}
          style={{ ...card.customStyles }}
        >
          <div className="">{card.title}</div>
          <div className="text-xl md:text-2xl lg:text-[34px] lg:pt-2 lg:pb-1 ">
            {card.amount}
          </div>

          <div className="flex">
            <div className="">{card.percentage}</div>
            <div className="py-1">{card.svg}</div>
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
