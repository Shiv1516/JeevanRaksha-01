// components/SliderItem.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SliderItem = ({
  imageUrl,
  heading,
  subtext,
  button1Text,
  button2Text,
}) => {
  return (
    <motion.div className="slider-item pr">
      <img src={imageUrl} alt={`Banner`} />
      <div className="hero-content v-center h100 w100 pa t0 l0 zi1">
        <div className="hero-wrapper wrapper">
          <div className="slide-content">
            <h1 className="slide-heading fs38 fw7 lh42 fc2">{heading}</h1>
            <p className="slide-subtext fs14 lh22 mt24">{subtext}</p>
            <div className="buttons v-center mt24">
              <Link
                href="/contact-us"
                className="apt-btn box-center h48 br2 plr24 bg1 fc4"
              >
                {button1Text}
              </Link>
              <Link
                href="/about-us"
                className="lm-btn box-center h48 br2 plr24 bg2 fc4 ml16 "
              >
                {button2Text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderItem;
