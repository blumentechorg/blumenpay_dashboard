"use client";

const TableComponent = () => {
  const data = [
    { id: 1, name: "Amal Product", popularity: 80, sales: 250 },
    { id: 2, name: "Goal Pass", popularity: 60, sales: 150 },
    { id: 3, name: "Algorizmih", popularity: 90, sales: 320 },
    { id: 4, name: "MTN Data", popularity: 24, sales: 190 },
  ];

  const getPopularityColor = (popularity) => {
    if (popularity >= 75) return "bg-[#0095FF] text-[#0095FF] "; // Bright blue for high popularity
    if (popularity >= 50) return "bg-[#884DFF] text-[#884DFF]"; // Dark purple for medium-high popularity
    if (popularity >= 25) return "bg-[#00E096] text-[#00E096]"; // Bright green for medium popularity
    if (popularity >= 0) return "bg-[#FF8F0D] text-[#FF8F0D]"; // Orange for low popularity
    return "bg-red-500"; // Red for very low popularity or invalid value
  };

  const getBackgroundColor = (popularity) => {
    if (popularity >= 75) return "bg-[#CDE7FF]  "; // Light blue for high popularity
    if (popularity >= 50) return "bg-[#C5A8FF] "; // Light purple for medium-high popularity
    if (popularity >= 25) return "bg-[#8CFAC7] "; // Light green for medium popularity
    if (popularity >= 0) return "bg-[#FFD5A4] "; // Light orange for low popularity
    return "bg-red-200"; // Light red for very low popularity or invalid value
  };

  return (
    <div className="overflow-x-auto bg-[#F7F9FB] font-light lg:text-base md:text-sm text-xs rounded-xl p-5 pb-8 w-[345px] md:w-[550px] shadow-md  ">
      <div className="px-5 font-semibold text-[#05004E] lg:pb-2">
        Top Products
      </div>
      <table className="min-w-full table-auto">
        <thead className="">
          <tr className="text-xs text-[#1C1C1C66] font-light">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Popularity</th>
            <th className="px-4 py-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 border-b">
              <td className="px-4 py-2 text-center">{index + 1}</td>
              <td className="px-4 py-2 text-[#05004E] ">{item.name}</td>
              <td className="px-4 py-2">
                <div
                  className={`w-full  rounded-full ${getBackgroundColor(
                    item.popularity
                  )}`}
                >
                  <div
                    className={`h-1 rounded-full ${getPopularityColor(
                      item.popularity
                    )}`}
                    style={{ width: `${item.popularity}%` }}
                  ></div>
                </div>
              </td>
              <td className="px-4 py-1 text-center">
                <button
                  className={` text-white text-xs ${getBackgroundColor(
                    item.popularity
                  )} rounded-full px-1 border  transition`}
                >
                  {item.sales}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
