import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const WhatsApp = () => {
  const [isMsgVisible, setIsMsgVisible] = useState(true);

  const handleCloseClick = () => {
    setIsMsgVisible(false);
  };

  return (
    <div className="whatsapp-sticky v-center">
      {isMsgVisible && (
        <div className="whatsapp-msg ptb4 plr12 fc4 mr8 br8 bef pr">
          <span>Need Help? Chat with us</span>
          <IoCloseOutline
            className="whatsapp-msg-close fc2 fs17 br24 pa t0 l0 bg4 cp"
            onClick={handleCloseClick}
          />
        </div>
      )}
      <Link
        className="whatsapp-btn"
        href="https://api.whatsapp.com/send?phone=917678356232"
        target="_blank"
      >
        <img src="/images/whatsapp-icon1.png" alt="WhatsApp" />
      </Link>
    </div>
  );
};

export default WhatsApp;
