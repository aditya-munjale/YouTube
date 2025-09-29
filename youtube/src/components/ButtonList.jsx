import React from "react";

const ButtonList = () => {
  const btnList = [
    "All",
    "News",
    "Music",
    "Cricket",
    "Movies",
    "Hollywood",
    "Spiritual",
    "Tollywood",
    "TV Shows",
    "Education",
    "Tech",
  ];

  return (
    <div className="flex gap-3 py-4 px-6 bg-white shadow-sm overflow-x-auto no-scrollbar">
      {btnList.map((btn, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 border border-gray-200"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
