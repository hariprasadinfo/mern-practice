import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="bg-red-400 h-screen">
      <div className="text-9xl text-center text-white pt-60">
        Page NOT FOUND
      </div>
      <div className="text-xl text-green-950 text-center mt-14">
        Back to
        <NavLink to="/login">login here </NavLink>
      </div>
    </div>
  );
}

export default Error;
