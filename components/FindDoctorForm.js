import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

const FindDoctorForm = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [disease, setdisease] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !phoneNumber ||
      !disease ||
      !additionalInfo ||
      !appointmentDate
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
      return;
    }

    setPhoneNumberError("");
    // EmailJS integration
    const templateParams = {
      fullName,
      phoneNumber,
      disease,
      additionalInfo,
      appointmentDate: appointmentDate.toLocaleString(),
    };

    emailjs
      .send(
        "service_bgj85q9", // service ID
        "template_uh2krmi", // template ID
        templateParams,
        "OlRitH0iIQNzkucp1" // user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          resetForm();
          onClose();
          alert("Form submitted successfully!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to submit form");
        }
      );
  };

  const resetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setdisease("");
    setAdditionalInfo("");
    setAppointmentDate(new Date());
  };

  return (
    <div
      className={`bookappoinment-form pf t0 b0 w100 ${
        isOpen ? "open-m-form" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="m-form ofh br8 bg4 p24 pr fs15 fc6"
      >
        <ImCross
          className="pa r0 t0 mr24 mt24 fs16 box-center cp"
          onClick={onClose}
        />
        <h2 className="form-title fs24 tac fw6">Book Appoinment</h2>

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (!/^\d*$/.test(value)) {
              setPhoneNumberError("Please enter only numeric characters");
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

        <label htmlFor="disease">Disease:</label>
        <input
          type="text"
          id="disease"
          value={disease}
          onChange={(e) => setdisease(e.target.value)}
          required
        />

        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea
          className="w100"
          id="additionalInfo"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          rows="4"
          required
        ></textarea>

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <DatePicker
          id="appointmentDate"
          selected={appointmentDate}
          onChange={(date) => setAppointmentDate(date)}
          minDate={new Date()}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          required
        />

        <div className="popup-submit df ">
          <button
            type="submit"
            className="submit-btn transit2 h48 box-center br8 bg1 fc4 ptb24 plr48 fw7 mt24 cp mr32"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={resetForm}
            className="reset-btn transit2 h48 box-center br8 bg5 fc1 ptb24 plr48 fw7 mt24 cp"
          >
            Reset
          </button>
        </div>
        {errorMessage && (
          <p className="mt8" style={{ color: "red" }}>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default FindDoctorForm;
