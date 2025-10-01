import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-64 bg-white h-[calc(100vh-64px)] sticky top-16 overflow-y-auto border-r border-gray-200 flex-shrink-0">
      <div className="p-4">
        {/* First Section */}
        <ul className="space-y-1 mb-6">
          <Link to={"/"}>
            {" "}
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              <span className="text-gray-800 font-medium">Home</span>
            </li>
          </Link>
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-gray-800 font-medium">Shorts</span>
          </li>
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-800 font-medium">Videos</span>
          </li>
          <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-800 font-medium">Live</span>
          </li>
        </ul>

        {/* You Section */}
        <h1 className="text-gray-500 uppercase text-xs font-semibold mb-3 px-3">
          You
        </h1>
        <ul className="space-y-1 mb-6">
          {["History", "Playlists", "Watch later", "Liked videos"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            )
          )}
        </ul>

        {/* Subscriptions Section */}
        <h1 className="text-gray-500 uppercase text-xs font-semibold mb-3 px-3">
          Subscriptions
        </h1>
        <ul className="space-y-1">
          {["Music", "Sports", "Gaming", "Movies"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{item[0]}</span>
              </div>
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
