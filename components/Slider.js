import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerData = [
  {
    imageUrl: "images/slider1.jpg",
    heading: "Comprehensive Healthcare Solutions",
    subtext:
      "From specialized treatments to emergency care, we're committed to providing exceptional medical services for you and your loved ones.",
    button1Text: "Book Appointment",
    button2Text: "Learn More",
  },
  {
    imageUrl: "images/slider2.jpg",
    heading: "Expertise Across Specialties",
    subtext:
      "Explore our super specialty branches, including Medicine, Pediatrics, Nephrology, Gynecology, Orthopedics, Surgery, Gastroenterology, and Emergency Services.",
    button1Text: "Book Appointment",
    button2Text: "Learn More",
  },
  {
    imageUrl: "images/slider3.jpg",
    heading: "Emergency Care at Your Fingertips",
    subtext:
      "Our emergency services offer round-the-clock care, including ICU and NICU facilities, ambulance services, lab, pharmacy, and advanced diagnostic imaging like x-ray, ECG, and ABG.",
    button1Text: "Book Appointment",
    button2Text: "Learn More",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {bannerData.map((slide, index) => (
        <SliderItem key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
