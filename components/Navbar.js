import React, { useState } from "react";
import Link from "next/link";
import DynamicNavigation from "./DynamicNavigation";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`menu-btn w48 h48 cp box-center fdc ml32 p8 ${
          isNavbarOpen ? "nav-close" : ""
        }`}
        onClick={toggleNavbar}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>

      <nav className={`navbar v-center fww ${isNavbarOpen ? "on-nav" : ""}`}>
        <ul className="nav-list v-center cp fww fc2">
          <li
            className="nav-item fw4 transit2 fs16 p16 mlr4 fc-h1 pr"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <Link href="/" className="v-center">
              Super Speciality Branches{" "}
              <IoIosArrowDown size={18} className="fc2 ml4 mt4" />
            </Link>
            {isServicesHovered && <DynamicNavigation />}
            {isNavbarOpen && !isServicesHovered && <DynamicNavigation />}
          </li>
          <li className="nav-item fw4 transit2 fs16 p16 mlr4 fc-h1">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="nav-item fw4 transit2 fs16 p16 mlr4 fc-h1">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
