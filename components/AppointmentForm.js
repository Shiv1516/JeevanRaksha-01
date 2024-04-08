import React, { useState } from "react";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import FindDoctorForm from "@/components/FindDoctorForm";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    time: "",
  });
  const [isPopupOpenM, setIsPopupOpenM] = useState(false);
  
  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., API call, validation)
    console.log("Form submitted:", formData);
  };

  return (
    <><FindDoctorForm isOpen={isPopupOpenM} onClose={closePopupM} />
    <section className="appointment-form ">
      <div className="wrapper br8 pt24 pb48 pr ">
        <div className="cards-container df fww">
          <div className="card-col-3 flx33 df">
            <div className="card p24 df w100 bg1 mlr12 br4">
              <div className="card-icon">
                <img
                  src="images/svg-icon/emergency-doctor.svg"
                  alt="card-icon"
                />
              </div>
              <div className="card-text pl16">
                <div className="card-heading mb12">
                  <h3 className="fs24 fw6 fc4 lh24">Emergency Cases</h3>
                </div>
                <div className="card-details mb24">
                  <p className="fc5 lh24">
                    Urgent situations demand swift response. Trust our emergency
                    services for immediate expert care and support.
                  </p>
                </div>
                <Link href="#" className="v-center fw5 fc4 fs24">
                  <MdCall size={30} className="mr8" />
                  +91 7678356232
                </Link>
              </div>
            </div>
          </div>
          <div className="card-col-3 flx33 df">
            <div className="card p24 df w100 bg6 mlr12 br4">
              <div className="card-icon">
                <img
                  src="images/svg-icon/emergency-cases.svg"
                  alt="card-icon"
                />
              </div>
              <div className="card-text pl16">
                <div className="card-heading mb12">
                  <h3 className="fs24 fw6 fc4 lh24">Book A Doctor</h3>
                </div>
                <div className="card-details mb24">
                  <p className="fc5 lh24">
                    Easily book doctors, find specialists, and manage
                    appointments for seamless healthcare access.
                  </p>
                </div>
                <div className="book-now-btn dib cp">
                  <div onClick={openPopupM}
                    className="lm-btn box-center h48 br2 plr24 bg2 fc4  "
                  >
                    Book Now
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-col-3 flx33 df">
            <div className="card p24 df w100 bg1 mlr12 br4">
              <div className="card-icon">
                <img src="images/svg-icon/opening-hours.svg" alt="card-icon" />
              </div>
              <div className="card-text pl16 w100">
                <div className="card-heading mb12">
                  <h3 className="fs24 fw6 fc4 lh24">Medical Counseling</h3>
                </div>
                <div className="card-details mb24">
                  <p className="fc5 lh24">
                    Professional guidance and support for addressing
                    health-related concerns, managing conditions, and improving
                    overall well-being through personalized advice and
                    counseling sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AppointmentForm;
