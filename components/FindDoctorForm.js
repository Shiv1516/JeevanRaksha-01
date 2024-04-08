import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FindDoctorForm = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [disease, setdisease] = useState("");
  const [volunteerInterests, setVolunteerInterests] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      phoneNumber,
      membershipType,
      disease,
      volunteerInterests,
      additionalInfo,
      appointmentDate
    });

    resetForm();
  };

  const resetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setMembershipType("");
    setdisease("");
    setVolunteerInterests([]);
    setAdditionalInfo("");
    setAppointmentDate(new Date());
  };

  return (
    <div
      className={`membership-form pf t0 b0 w100 ${isOpen ? "open-m-form" : ""}`}
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
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

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
            onClick={onClose}
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
      </form>
    </div>
  );
};

export default FindDoctorForm;
