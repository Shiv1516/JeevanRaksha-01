import Link from "next/link";
import React from "react";
import { MdCall, MdEmail } from "react-icons/md";

const Topnavbar = () => {
  return (
    <div className="top-nav wrapper v-center jcsb fs14 ptb12">
      <ul className="top-left-link v-center">
        <li className="mlr16">
          <Link href="/">Emergency 24*7</Link>
        </li>
        <li>
          <Link href="/">Pharmacy</Link>
        </li>
      </ul>
      <div className="top-right-link v-center jscb fs14">
        <p className="v-center mlr12 fw5 fc16 fc-h1">
          <MdCall size={20} color="#1a76d1" />
          <span className="ml8">+91 - 7678356232, 011 - 35673235</span>
        </p>
        <p className="v-center mlr12 fw5 fc16 fc-h1 ml48">
          <MdEmail size={20} color="#1a76d1" />
          <span className="ml8">info@jeevanrakshahospital.com</span>
        </p>
      </div>
    </div>
  );
};

export default Topnavbar;
