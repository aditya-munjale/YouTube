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
    <div className="flex gap-2 overflow-x-auto py-2 px-4 bg-white shadow-sm">
      {btnList.map((btn, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-black whitespace-nowrap"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
