import React, { useState } from "react";
import DoctorTeam from "./DoctorTeam";

const DoctorSection = () => {
  return (
    <>
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
              Discover the exceptional expertise and dedication of our
              experienced team, committed to providing top-notch healthcare
              services.
            </p>
          </div>
        </div>
        <DoctorTeam/>
      </section>
    </>
  );
};

export default DoctorSection;
