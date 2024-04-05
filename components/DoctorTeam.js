import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import doctorsData from "../data/doctorteams";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const DoctorTeam = () => {
  return (
    <section className="service-section ptb48 brd-t1">
      <div className="wrapper df fww">
        <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
          <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">
            Meet Our Experienced Team of Doctors
          </h3>
          <h2 className="heading fs36 fw6 mb16">
            Our Expert Medical Professionals
          </h2>
          <p className="heading-desc lh30 w50 ">
            Discover the exceptional expertise and dedication of our experienced
            team, committed to providing top-notch healthcare services.
          </p>
        </div>
        <div className="team-block flx100 df fww">
          {doctorsData.map((doctor, index) => (
            <div
              key={index}
              className="team flx25 plr12"
            >
              <div className="card-continer plr24 box-sd1 box-center fdc ptb24 br8 mb24 bg4">
                <div className="team-card-image box-center br50 ofh mb24 pr">
                  <img src={doctor.image} alt={doctor.name} className="w100" />
                  <ul className="doctor-social-media v-center pa">
                    <li className="box-center h40 w40 br50 bg4 brd1">
                      <Link
                        href={doctor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="fc1" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <ul className="doctor-details fs15 w100">
                  <li className="doctor-specification df jcsb fs13 fw6 mb24">
                    <p className="doctor-name-text lh24 fc1 brd1 plr8 ptb4 br4">
                      {doctor.specialization}
                    </p>
                    <p className="doctor-rating-text lh24 brd1 plr8 ptb4 br4 bg1 fc4 v-center">
                      <FaStar className="mr4" /> {doctor.rating}
                    </p>
                  </li>
                  <li className="doctor-name fw6 fs18 mb16">{doctor.name}</li>
                  <li className="doctor-education df mb16 lh24">
                    <BsPersonLinesFill className="mr8 fc1 fs20" />
                    {doctor.education}
                  </li>
                  <li className="doctor-location v-center mb24">
                    <HiLocationMarker className="mr8 fc1 fs20" />
                    {doctor.location}
                  </li>
                  <li className="doctor-appoinment bg5 fc1 fs16 fw5 p12 br4 cp fc-h4 bg-h1 box-center transit2">
                    Book an Appoinment
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorTeam;
