import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FindDoctorForm from "@/components/FindDoctorForm";

const Footer = () => {
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
      <footer className="footer bg1 ptb48 fc4">
        <div className="wrapper">
          <div className="footer-top-sec v-center fww">
            <div className="footer-logo-contain mb24 flx1">
              <Link href="/">
                <Image
                  className="footer-logo"
                  src="/images/jeevan_logo.jpg"
                  width={164}
                  height={64}
                  alt="company-logo"
                />
              </Link>
            </div>
            <div className="newsletter-form mb24 flx3">
              <form action="#" className="df fww">
                <input
                  className="name-input h48 plr12 w60 br4"
                  type="email"
                  placeholder="Enter your email for news"
                  required=""
                />
                <input
                  type="submit"
                  className="newsletter-btn box-center ml12 h48 br4 plr24 cp bg2 fc4"
                  value="Subscribe"
                ></input>
              </form>
            </div>
          </div>
          <div className="links-container df fww">
            <div className="footer-list flx25">
              <h4 className="footer-list-title aft pr mb24 fs22 fw6 lh22 pb12">
                For Patients
              </h4>
              <ul className="footer-links-list">
                <li className="footer-links mb16">
                  <Link href="/about-us" className="footer-link transit2">
                    About Us
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/contact-us" className="footer-link transit2">
                    Contact
                  </Link>
                </li>
                <li onClick={openPopupM} className="footer-links mb16 cp">
                  <Link href="/" className="footer-link transit2">
                    Find a Doctor
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/contact-us" className="footer-link transit2">
                    Emerency 24x7
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-list flx25">
              <h4 className="footer-list-title aft pr mb24 fs22 fw6 lh22 pb12">
                Super Speciality
              </h4>
              <ul className="footer-links-list">
                <li className="footer-links mb16">
                  <Link href="/diabetes" className="footer-link transit2">
                    Diabetes
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/hypertension" className="footer-link transit2">
                    Hypertension
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/antenatalClinic"
                    className="footer-link transit2"
                  >
                    Antenatal clinic
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/chest" className="footer-link transit2">
                    Chest
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/delivery" className="footer-link transit2">
                    Delivery
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/phototherapy" className="footer-link transit2">
                    Phototherapy
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/hysterectomy" className="footer-link transit2">
                    Hysterectomy
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/infertilityClinic"
                    className="footer-link transit2"
                  >
                    Infertility clinic
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-list flx25">
              <ul className="footer-links-list mt56">
                <li className="footer-links mb16">
                  <Link
                    href="/neonatalIntensiveCareUnit"
                    className="footer-link transit2"
                  >
                    Neonatal Intensive Care Unit (NICU)
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/medicalTerminationOfPregnancy"
                    className="footer-link transit2"
                  >
                    Medical Termination of Pregnancy (MTP)
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/cesareanSection"
                    className="footer-link transit2"
                  >
                    Cesarean section (C-section)
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/vaccination" className="footer-link transit2">
                    Vaccination
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/well-baby-clinic"
                    className="footer-link transit2"
                  >
                    Well-baby clinic
                  </Link>
                </li>

                <li className="footer-links mb16">
                  <Link
                    href="/laparoscopicSurgery"
                    className="footer-link transit2"
                  >
                    Laparoscopic surgery
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/generalSurgery" className="footer-link transit2">
                    General surgery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-list flx25">
              <ul className="footer-links-list mt56">
                <li className="footer-links mb16">
                  <Link
                    href="/thyroidDisorders"
                    className="footer-link transit2"
                  >
                    Thyroid disorders
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/cosmeticAndPlasticSurgery"
                    className="footer-link transit2"
                  >
                    Cosmetic and plastic surgery
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/dialysis" className="footer-link transit2">
                    Dialysis
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/nephrologyClinic"
                    className="footer-link transit2"
                  >
                    Nephrology clinic
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link href="/fistula" className="footer-link transit2">
                    Fistula
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/permacathInsertion"
                    className="footer-link transit2"
                  >
                    Permacath insertion
                  </Link>
                </li>
                <li className="footer-links mb16">
                  <Link
                    href="/gastroenterologyClinic"
                    className="footer-link transit2"
                  >
                    Gastroenterology clinic
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom bg6">
        <div className="wrapper pb4 ptb16 v-center jcsb">
          <div className="copyright">
            <p className="fc4 fw4 fs14 v-center">
              Copyright © 2024
              <Link className="plr4 fw6" href="/">
                Jeevan Raksha
              </Link>
              || All Rights Reserved. Powered by
              <Link
                target="_blank"
                href="https://aajux.com/"
                className="plr4 fw6"
              >
                Aajux
              </Link>
            </p>
          </div>
          <div className="footer-social">
            <ul className="footer-social-list v-center jcc">
              <li className="fsl mlr12">
                <Link
                  className="fsl-link transit2 fb"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FaFacebookF className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link
                  className="fsl-link transit2 twitter"
                  target="_blank"
                  href="https://twitter.com/"
                >
                  <FaXTwitter className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link
                  className="fsl-link transit2 linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <FaLinkedinIn className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link
                  className="fsl-link transit2 instagram"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <FaInstagram className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl ml12">
                <Link
                  className="fsl-link transit2 youtube"
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  <FaYoutube className="fs20 fc4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
