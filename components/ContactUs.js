import React from "react";

const ContactUs = () => {
  return (
    <section className="form-section bg-grdnt-01 ptb48">
      <div className="wrapper df ptb40">
        <div className="faq-image df flx48 pr32">
          <img
            src="/images/about-image-02.jpg"
            height={400}
            alt="Picture of the author"
            className="mtb24 w100 br24"
          />
        </div>
        <div className="form-contan flx1">
          <div className="form-container pl32 pl16">
            <h3 className="form-heading fs38 fc4 lh30 fw6 mb32 tac">
              Book your Appointment
            </h3>
            <form className="form fc4 df w100 fww">
              <div className="name-fild df fdc w50 plr12 mb24">
                <label className="name-label fw5 mb8" htmlFor="name">
                  Name
                </label>
                <input
                  className="name-input h48 plr12 w100 br4"
                  type="text"
                  placeholder="Your Name..."
                  required
                />
              </div>

              <div className="phone-fild df fdc w50 plr12 mb24">
                <label className="input-label fw5 mb8" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  className="phone-input h48 plr12 w100 br4"
                  type="number"
                  placeholder="Your Phone no..."
                  required
                />
              </div>
              <div className="disease-fild df fdc w50 plr12 mb24">
                <label className="input-label fw5 mb8" htmlFor="disease">
                  Disease
                </label>
                <input
                  className="disease-input h48 plr12 w100 br4"
                  type="text"
                  placeholder="Your Disease..."
                  required
                />
              </div>
              <div className="call-timeing-fild df fdc w50 plr12 mb24">
                <label
                  className="call-timeing-label fw5 mb8"
                  htmlFor="call-time"
                >
                  When can we call you?
                </label>
                <input
                  className="call-timeing-input h48 plr12 w100 br4"
                  type="time"
                  id="call-time"
                  name="call-time"
                  required
                />
              </div>
              <div className="message-fild df fdc w100 plr12 ">
                <label className="message-label fw5 mb8" htmlFor="message">
                  How can we help you?
                </label>
                <textarea
                  className="message-input plr12 pt8 br4"
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="lm-btn box-center mt32 ml12 h48 br4 plr24 cp bg2 fc4"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
