import React, {useState} from "react";
import SliderComponent from "./Slider";
import FindDoctorForm from "./FindDoctorForm";

const HeroSection = () => {
  const [isPopupOpenM, setIsPopupOpenM] = useState(false);

  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };
  return (
    <div className="heroSection">
      <SliderComponent onButtonClick={openPopupM}/>
      {isPopupOpenM && <FindDoctorForm isOpen={isPopupOpenM} onClose={closePopupM} />}
    </div>
  );
};

export default HeroSection;
