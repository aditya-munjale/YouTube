import React from "react";
import Head from "./Head"; // Remove "/components"
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Remove "/components"

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Head />

      {/* Sidebar + MainContent */}
      <div className="flex flex-1">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
