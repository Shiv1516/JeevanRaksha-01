import React from "react";
import Image from "next/image";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  return (
    <section className="faq-section ptb48">
      <div className="wrapper df fww pb48">
        <div className="faq-heading mb48 mt48 flx100 v-center fdc tac">
          <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg2">FAQ</h3>
          <h2 className="heading fs36 fw6 mb16">Frequentaly Ask Questions</h2>
          <p className="heading-desc lh30 w50 ">
            Explore our comprehensive FAQ section to find answers to commonly
            asked questions about our services and policies
          </p>
        </div>

        <div className="faq-box df w100">
          <FaqAccordion />
          <div className="faq-image df flx48 pr">
            <div className="faq-image-bg flx25 bg1 pr br8"></div>
            <Image
              src="/images/about-image-02.jpg"
              width={500}
              height={400}
              alt="Picture of the author"
              className="faq-img mtb24 pr zi2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
