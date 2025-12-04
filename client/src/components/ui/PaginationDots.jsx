import React from "react";

export default function PaginationDots({ total, active }) {
  return (
    <div className="flex items-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            active === index
              ? "bg-green-500 scale-110 shadow-md"
              : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}
