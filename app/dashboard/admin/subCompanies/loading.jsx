// loading.jsx

import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-grow items-center justify-center h-full bg-white flex-col">
      <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-700 text-lg font-medium">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
