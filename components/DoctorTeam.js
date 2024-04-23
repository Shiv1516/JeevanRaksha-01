import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import FindDoctorForm from "@/components/FindDoctorForm";

const doctorsData = [
  {
    name: "Dr. Maria Hernandez",
    image: "/images/doctor2.png",
    specialization: "Medicine Specialist",
    rating: "(124)",
    education: "MDS - Periodontology and Oral Implantology",
    location: "Delhi",
    linkedin: "linkedin.com/mariahernandez",
  },
  {
    name: "Dr. Robert Turner",
    image: "/images/doctor3.png",
    specialization: "Cardiologist",
    rating: "(124)",
    education: "MDS - Periodontology and Oral Implantology",
    location: "Lucknow",
    linkedin: "linkedin.com/turner",
  },
  {
    name: "Dr. John Smith",
    image: "/images/doctor4.png",
    specialization: "Neurosurgeon",
    rating: "(124)",
    education: "MDS - Periodontology and Oral Implantology",
    location: "Noida",
    linkedin: "linkedin.com/johnsmith",
  },
  {
    name: "Dr. Sarah Davis",
    image: "/images/doctor5.png",
    specialization: "Pediatrician",
    rating: "(124)",
    education: "MDS - Periodontology and Oral Implantology",
    location: "Gurgram",
    linkedin: "linkedin.com/johnsmith",
  },
];

const DoctorTeam = () => {
  const [isPopupOpenM, setIsPopupOpenM] = useState(false);

  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };

  return (
    <>
      <FindDoctorForm isOpen={isPopupOpenM} onClose={closePopupM} />
      <div className="team-block flx100 df fww wrapper">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="team flx25 plr12">
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
                <li
                  onClick={openPopupM}
                  className="doctor-appoinment bg5 fc1 fs16 fw5 p12 br4 cp fc-h4 bg-h1 box-center transit2"
                >
                  Book an Appoinment
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DoctorTeam;
