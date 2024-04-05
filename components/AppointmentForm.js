import React, { useState } from "react";
import Link from "next/link";
import { MdCall } from "react-icons/md";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    time: "",
  });

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
                    In urgent situations, every second counts. Our emergency
                    services ensure swift response and expert care. Trust us to
                    be there when you need us most, providing immediate
                    assistance and support.
                  </p>
                </div>
                <Link href="#" className="v-center fw5 fc4 fs24">
                  <MdCall size={30} className="mr8" />
                  +91 1234567890
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
                    Need to book a doctor? Our platform simplifies the process.
                    Find a specialist, schedule appointments, and manage your
                    healthcare effortlessly. Your wellness is our priority.
                  </p>
                </div>
                <button className="lm-btn box-center h48 br2 plr24 bg2 fc4">
                  Book Now
                </button>
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
                  <h3 className="fs24 fw6 fc4 lh24">Opening Hours</h3>
                </div>
                <div className="card-details mb24">
                  <ul className="pt-list-info fc5">
                    <li className="df jcsb pb8 mb8 lh34 brd-b3">
                      <div className="pt-info-hours-title">
                        Monday - Friday{" "}
                      </div>
                      <div className="pt-info-hours-content">
                        8:00 - 7:00 PM{" "}
                      </div>
                    </li>
                    <li className="df jcsb pb8 mb8 lh34 brd-b3">
                      <div className="pt-info-hours-title">Saturday </div>
                      <div className="pt-info-hours-content">
                        6:00 - 5:00 PM{" "}
                      </div>
                    </li>
                    <li className="df jcsb pb8 mb8 lh34 brd-b3">
                      <div className="pt-info-hours-title">Sunday </div>
                      <div className="pt-info-hours-content">
                        9:00 - 4:00 PM{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
