import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div className=" flex justify-center space-x-4 mt-6">
      <NavLink to="/" className=" text-xl font-medium">
        Characters
      </NavLink>
      <NavLink to="/episodes" className=" text-xl font-medium">
        Episode
      </NavLink>
    </div>
  );
};

export default Navbar;
