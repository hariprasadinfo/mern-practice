import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RoutesLayout() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 relative top-10">
        <Outlet />
      </div>
    </div>
  );
}

export default RoutesLayout;
