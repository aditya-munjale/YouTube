import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 overflow-y-auto">
      {/* First Section */}
      <ul className="space-y-2 mb-6">
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Home
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Shorts
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Videos
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Live
        </li>
      </ul>

      {/* You Section */}
      <h1 className="text-gray-400 uppercase text-xs font-semibold mb-2">
        You
      </h1>
      <ul className="space-y-2 mb-6">
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          History
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Playlists
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Watch later
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Liked videos
        </li>
      </ul>

      {/* Subscriptions Section */}
      <h1 className="text-gray-400 uppercase text-xs font-semibold mb-2">
        Subscriptions
      </h1>
      <ul className="space-y-2">
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Music
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Sports
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Gaming
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
