import React from "react";
import { FaWpforms } from "react-icons/fa";
import { BsBuildingAdd } from "react-icons/bs";
import { TbCheckupList, TbReportAnalytics } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <section className="service-section ptb48 brd-t1">
      <div className="wrapper df fww pb48">
        <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
          <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">How We Work</h3>
          <h2 className="heading fs36 fw6 mb16">Our Working Process</h2>
          <p className="heading-desc lh30 w50 ">
            Catch a glimpse of 'Our Working Process' to discover how we
            streamline tasks, foster collaboration, and deliver exceptional
            results.
          </p>
        </div>
        <div className="how-work-block flx100 v-center fc3">
          <div className="how-card flx25 pr">
            <div className="card-num-1 pa"><span className="">1</span></div>
            <div className="how-cards transit2 p24 bs2 mlr12 br4 bg4 ">
              <div className="how-card-icons h64 w64 br50 bg5 box-center bs3 mb24">
                <div className="how-card-icon box-center h48 w48 br50 bg2">
                  <FaWpforms size={24} color="#fff" />
                </div>
              </div>
              <h3 className="how-card-title fw6 fs20 mb16">
                Fill The Form
              </h3>
              <p className="how-card-text lh24 mb24 fs15">
                You can schedule an appointment with a specialist either by
                using our online appointment booking system or by contacting our
                reception.
              </p>
            </div>
          </div>
          <div className="how-card flx25 pr mt48 pt48">
          <div className="card-num-2 pa"><span className="">2</span></div>
            <div className="how-cards transit2 p24 bs2 mlr12 br4 bg4 mt40">
              <div className="how-card-icons h64 w64 br50 bg5 box-center bs3 mb24">
                <div className="how-card-icon box-center h48 w48 br50 bg1">
                  <BsBuildingAdd size={24} color="#fff" />
                </div>
              </div>
              <h3 className="how-card-title fw6 fs20 mb16">
                Book an appointment
              </h3>
              <p className="how-card-text lh24 mb24 fs15">
                Visiting hours are from 10 AM to 8 PM every day. However,
                exceptions may apply in specific cases, so it's advisable to
                check with the hospital staff.
              </p>
            </div>
          </div>
          <div className="how-card flx25 pr">
          <div className="card-num-3 pa"><span className="">3</span></div>
            <div className="how-cards transit2 p24 bs2 mlr12 br4 bg4">
              <div className="how-card-icons h64 w64 br50 bg5 box-center bs3 mb24">
                <div className="how-card-icon box-center h48 w48 br50 bg2">
                  <TbCheckupList size={24} color="#fff" />
                </div>
              </div>
              <h3 className="how-card-title fw6 fs20 mb16 ">Check-Ups</h3>
              <p className="how-card-text lh24 mb24 fs15">
                The hospital provides parking facilities for visitors. Please
                follow the designated parking areas and inquire at the reception
                for more information.
              </p>
            </div>
          </div>
          <div className="how-card flx25 pr mt48 pt48">
          <div className="card-num-4 pa"><span className="">4</span></div>
            <div className="how-cards transit2 p24 bs2 mlr12 br4 bg4 mt40">
              <div className="how-card-icons h64 w64 br50 bg5 box-center bs3 mb24">
                <div className="how-card-icon box-center h48 w48 br50 bg1">
                  <TbReportAnalytics size={24} color="#fff" />
                </div>
              </div>
              <h3 className="how-card-title fw6 fs20 mb16">Get Reports</h3>
              <p className="how-card-text lh24 mb24 fs15">
                Patients can access their medical records online through our
                secure patient portal. Please register on our website or contact
                our medical records.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
