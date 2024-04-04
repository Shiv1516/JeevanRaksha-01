import React from "react";
import Image from "next/image";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";

const MedicalEmergency = () => {
  return (
    <section className="about-section ptb48 bg-grdnt-03">
      <div className="wrapper df ptb48">
        <div className="about-content flx1 mr24 fc2">
          <h2 className="v-center fs14 mb24">
            <span className="section-line"></span>Emergency Helpline
          </h2>
          <h4 className="fs36 fw6 fc1 mb16">Need Emergency Contact</h4>
          <p className="lh24 mb24">
            In our Emergency Room, we prioritize easy and prompt access to
            highly skilled medical professionals, including top-tier trauma
            surgeons in India who excel in performing state-of-the-art
            procedures.
          </p>
          <ul className="about-key-points v-center fww mb24">
            <li className="key-item v-center flx100 mb16">
              <IoCheckmarkDoneCircle
                size={20}
                color="#1a76d1"
                className="mr4"
              />
              24/7 Contact Our Hospital
            </li>
            <li className="key-item v-center flx100 mb16">
              <IoCheckmarkDoneCircle
                size={20}
                color="#1a76d1"
                className="mr4"
              />
              24 Hours Oncall Facilities
            </li>
            <li className="key-item v-center flx100 mb16">
              <IoCheckmarkDoneCircle
                size={20}
                color="#1a76d1"
                className="mr4"
              />
              Emergency Contact Number
            </li>
          </ul>
          <div className="hepline-cta v-center">
            <div className="call-help-btn box-center mr16 ptb8 br4 plr12 bg4 fc4 brd1">
              <div className="help-btn-icon box-center br50 bg1 w48 h48 mr12">
                <PiPhoneCallFill size={20} color="#fff" className="mr4" />
              </div>
              <div className="help-btn-text fc2 fs15 fw6">
                <span className="fs12 fw4 fc3 db mb4">Phone Number</span>
                +91 7679856232
              </div>
            </div>
            <div className="email-help-btn box-center mr16 ptb8 br4 plr12 bg4 fc4 brd1">
              <div className="help-btn-icon box-center br50 bg1 w48 h48 mr12">
                <MdMarkEmailRead size={20} color="#fff" className="mr4" />
              </div>
              <div className="help-btn-text fc2 fs15 fw6">
                <span className="fs12 fw4 fc3 db mb4">
                  Email Us for Quick Response
                </span>
                info@jeevanrakshahospital.com
              </div>
            </div>
          </div>
        </div>
        <div className="emergency-image df flx48 pr">
          <Image
            src="/images/emergency-01.svg"
            width={800}
            height={500}
            alt="Picture of the author"
            className="about-img br8"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalEmergency;
