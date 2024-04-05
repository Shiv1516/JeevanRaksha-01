import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer bg1 ptb48 fc4">
        <div className="wrapper">
          <div className="footer-top-sec v-center">
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
              <form action="#" className="df">
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
          <div className="links-container df">
            <div className="footer-nav-links flx1">
              <div className="footer-nav-list">
                <div className="footer-list-title aft pr mb24">
                  <h3 className="fs22 fw6 lh22 pb12">For Patients</h3>
                </div>
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
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Find a Doctor
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Emerency 24x7
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Doctor Videos
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Treatments
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Book an Appointment
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link href="/" className="footer-link transit2">
                      Immigration Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-ser-links flx3">
              <div className="footer-list-title aft pr mb24">
                <h3 className="fs22 fw6 lh22 pb12">Super Speciality</h3>
              </div>
              <div className="df">
                <ul className="footer-links-list flx33">
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/diabetes"
                      className="footer-link transit2"
                    >
                      Diabetes
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/hypertension"
                      className="footer-link transit2"
                    >
                      Hypertension
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/antenatalClinic"
                      className="footer-link transit2"
                    >
                      Antenatal clinic
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/chest"
                      className="footer-link transit2"
                    >
                      Chest
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/delivery"
                      className="footer-link transit2"
                    >
                      Delivery
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/phototherapy"
                      className="footer-link transit2"
                    >
                      Phototherapy
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/hysterectomy"
                      className="footer-link transit2"
                    >
                      Hysterectomy
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/infertilityClinic"
                      className="footer-link transit2"
                    >
                      Infertility clinic
                    </Link>
                  </li>
                </ul>
                <ul className="footer-links-list flx33">
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/neonatalIntensiveCareUnit"
                      className="footer-link transit2"
                    >
                      Neonatal Intensive Care Unit (NICU)
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/medicalTerminationOfPregnancy"
                      className="footer-link transit2"
                    >
                      Medical Termination of Pregnancy (MTP)
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/cesareanSection"
                      className="footer-link transit2"
                    >
                      Cesarean section (C-section)
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/vaccination"
                      className="footer-link transit2"
                    >
                      Vaccination
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/wellBabyClinic"
                      className="footer-link transit2"
                    >
                      Well-baby clinic
                    </Link>
                  </li>

                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/laparoscopicSurgery"
                      className="footer-link transit2"
                    >
                      Laparoscopic surgery
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/generalSurgery"
                      className="footer-link transit2"
                    >
                      General surgery
                    </Link>
                  </li>
                </ul>
                <ul className="footer-links-list flx33">
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/thyroidDisorders"
                      className="footer-link transit2"
                    >
                      Thyroid disorders
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/cosmeticAndPlasticSurgery"
                      className="footer-link transit2"
                    >
                      Cosmetic and plastic surgery
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/dialysis"
                      className="footer-link transit2"
                    >
                      Dialysis
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/nephrologyClinic"
                      className="footer-link transit2"
                    >
                      Nephrology clinic
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/fistula"
                      className="footer-link transit2"
                    >
                      Fistula
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/permacathInsertion"
                      className="footer-link transit2"
                    >
                      Permacath insertion
                    </Link>
                  </li>
                  <li className="footer-links mb16">
                    <Link
                      href="/super-speciality-branches/gastroenterologyClinic"
                      className="footer-link transit2"
                    >
                      Gastroenterology clinic
                    </Link>
                  </li>
                </ul>
              </div>
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
                <Link className="fsl-link transit2 fb" target="_blank" href="https://www.facebook.com/">
                  <FaFacebookF className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link className="fsl-link transit2 twitter" target="_blank" href="https://twitter.com/">
                  <FaXTwitter className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link className="fsl-link transit2 linkedin" target="_blank" href="https://www.linkedin.com/">
                  <FaLinkedinIn className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl mlr12">
                <Link className="fsl-link transit2 instagram" target="_blank" href="https://www.instagram.com/">
                  <FaInstagram className="fs20 fc4" />
                </Link>
              </li>
              <li className="fsl ml12">
                <Link className="fsl-link transit2 youtube" target="_blank" href="https://www.youtube.com/">
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