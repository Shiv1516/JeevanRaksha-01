import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disease, setDisease] = useState("");
  const [callTime, setCallTime] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !phoneNumber || !disease || !callTime || !message) {
      setFormError("Please fill in all fields.");
      setTimeout(() => {
        setFormError("");
      }, 5000);
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
      return;
    }

    setPhoneNumberError("");

    // Perform any additional validation if needed

    // If all validations pass, proceed with form submission
    // For now, we'll just log the form data
    console.log({
      name,
      phoneNumber,
      disease,
      callTime,
      message,
    });

    const templateParams = {
      from_name: name,
      phoneNumber,
      disease,
      call_time: callTime,
      message,
    };

    emailjs
      .send(
        "service_f15nvit", // service ID
        "template_mgh9ha9", // template ID
        templateParams,
        "FRR4vRUj_pumYh6hL" // user ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMessage("Form submitted successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000); // Hide success message after 5 seconds
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setFormError("Failed to submit form");
        setTimeout(() => {
          setFormError("");
        }, 5000); // Hide error message after 5 seconds
      });

    // Clear form fields
    setName("");
    setPhoneNumber("");
    setDisease("");
    setCallTime("");
    setMessage("");

    // Show success message
    setSuccessMessage("Form submitted successfully!");
  };

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
            <form className="form fc4 df w100 fww" onSubmit={handleSubmit}>
              <div className="name-fild df fdc w50 plr12 mb24">
                <label className="name-label fw5 mb8" htmlFor="name">
                  Name
                </label>
                <input
                  className="name-input h48 plr12 w100 br4"
                  type="text"
                  placeholder="Your Name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="phone-fild df fdc w50 plr12 mb24">
                <label className="input-label fw5 mb8" htmlFor="phone">
                  Phone No.
                </label>
                <input
                  className="phone-input h48 plr12 w100 br4"
                  type="tel"
                  placeholder="Your Phone no..."
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!/^\d*$/.test(value)) {
                      setPhoneNumberError(
                        "Please enter only numeric characters"
                      );
                      return;
                    }
                    setPhoneNumber(value);
                    setPhoneNumberError("");
                  }}
                  minLength={10}
                  maxLength={10}
                  required
                />
                {phoneNumberError && (
                  <p className="mt4" style={{ color: "red" }}>
                    {phoneNumberError}
                  </p>
                )}
              </div>
              <div className="disease-fild df fdc w50 plr12 mb24">
                <label className="input-label fw5 mb8" htmlFor="disease">
                  Disease
                </label>
                <input
                  className="disease-input h48 plr12 w100 br4"
                  type="text"
                  placeholder="Your Disease..."
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
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
                  value={callTime}
                  onChange={(e) => setCallTime(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="lm-btn box-center mt32 ml12 h48 br4 plr24 cp bg2 fc4"
              />
            </form>
            {formError && (
              <p className="plr12 mt8" style={{ color: "red" }}>
                {formError}
              </p>
            )}
            {successMessage && (
              <p className="plr12 mt8" style={{ color: "green" }}>
                {successMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
