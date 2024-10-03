import React from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function Arrowup() {
  return (
    <div>
      <div
        className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        <span className="sr-only"> Download </span>

        <MdOutlineArrowUpward />
      </div>
    </div>
  );
}
