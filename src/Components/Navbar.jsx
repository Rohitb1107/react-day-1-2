import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Links from "./Links";
import Contacts from "./Contact";

const Navbar = () => {
  return (
    <>
      <div className="navbar-div">
        <Logo />
        <Links />
        <Contacts />
      </div>
    </>
  );
};

export default Navbar;
