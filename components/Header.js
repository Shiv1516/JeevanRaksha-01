import React, { useState } from "react";
import Link from "next/link";
import Topnavbar from "./Topnavbar";
import Navbar from "./Navbar";
import Image from "next/image";
import FindDoctorForm from "@/components/FindDoctorForm";

const Header = () => {

  const [isPopupOpenM, setIsPopupOpenM] = useState(false);
  
  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };

  return (
    <><FindDoctorForm isOpen={isPopupOpenM} onClose={closePopupM} />
    <header className="pf w100 t0 l0 zi96 bg4 brd-b1">
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
          <div onClick={openPopupM} className='nav-cta box-center fw5 br2 plr24 h48 fc4 cp bg1 bg-h1 ml32'>
            Book Appointment
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
