import React, { useState } from "react";
import Link from "next/link";
import DynamicNavigation from "./DynamicNavigation";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  return (
    <nav className='navbar v-center fww'>
      <ul className='nav-list v-center cp fww fc2'>
        <li
          className='nav-item fw4 transit2 fs16 p16 mlr4 fc-h1 pr'
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          <Link href='/' className='v-center'>
            Super Speciality Branches{" "}
            <IoIosArrowDown size={18} className='fc2 ml4 mt4' />
          </Link>
          {isServicesHovered && <DynamicNavigation />}
        </li>
        <li className='nav-item fw4 transit2 fs16 p16 mlr4 fc-h1'>
          <Link href='/about-us'>About Us</Link>
        </li>
        <li className='nav-item fw4 transit2 fs16 p16 mlr4 fc-h1'>
          <Link href='/contact-us'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
