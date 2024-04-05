import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const FindDoctorForm = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [volunteerInterests, setVolunteerInterests] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      phoneNumber,
      membershipType,
      donationAmount,
      volunteerInterests,
    });

    resetForm();
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMembershipType("");
    setDonationAmount("");
    setVolunteerInterests([]);
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

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label htmlFor="donationAmount">Disease</label>
        <input
          type="text"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />

        <div className="popup-submit df jcc">
          <button
            type="submit"
            onClick={onClose}
            className="transit2 h48 box-center br8 bg5 fc1 p24 fw7 mt24"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindDoctorForm;
