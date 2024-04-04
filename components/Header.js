import React from "react";
import Link from "next/link";
import Topnavbar from "./Topnavbar";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Topnavbar />
      <div className='main-navbar bg4 brd-t1'>
        <div className='wrapper v-center jcsb'>
          <Link href='/'>
            <Image
              src='/images/jeevan_logo.jpg'
              width={164}
              height={64}
              alt='company-logo'
            />
          </Link>
          <Navbar />
          <div className='nav-cta box-center fw5 br2 plr24 h48 fc4 cp bg1 bg-h1 ml32'>
            <Link href='contact-us'>Book Appointment</Link>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
