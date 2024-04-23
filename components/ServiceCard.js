// components/ServiceCard.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const serviceCardData = [
  {
    id: 1,
    name: "Diabetes",
    description:
      "A chronic condition affecting blood sugar levels. Manageable with medication, diet, and lifestyle changes. Regular monitoring is essential.",
    image: "about-image-01.jpg",
    serviceUrl: "super-speciality-branches/diabetes",
  },
  {
    id: 2,
    name: "Well Baby Clinic",
    description:
      "With state-of-the-art facilities and a dedicated team, we're here to support your personalized healthcare solutions..",
    image: "about-image-02.jpg",
    serviceUrl: "super-speciality-branches/wellBabyClinic",
  },
  {
    id: 3,
    name: "Phototherapy",
    description:
      "From specialized treatments to emergency care, we're committed to providing exceptional...",
    image: "about-image.jpg",
    serviceUrl: "super-speciality-branches/phototherapy",
  },
  {
    id: 4,
    name: "Laproscopic",
    description:
      "pharmacy, and advanced diagnostic imaging like x-ray, ECG, and ABG ound-the-clock care, including..",
    image: "about-image-01.jpg",
    serviceUrl: "super-speciality-branches/laparoscopicSurgery",
  },
  {
    id: 5,
    name: "Cosmetic & Plastic Surgery",
    description:
      "Our emergency services offer round-the-clock care, including ICU and NICU facilities, ambulance services...",
    image: "about-image-02.jpg",
    serviceUrl: "super-speciality-branches/cosmeticAndPlasticSurgery",
  },
  {
    id: 6,
    name: "Nephrology",
    description:
      "From specialized treatments to emergency care, we're committed to providing exceptional...",
    image: "about-image-01.jpg",
    serviceUrl: "super-speciality-branches/nephrologyClinic",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ServiceCard = () => {
  return (
    <section className="service-section ptb48 brd-t1">
      <div className="wrapper df fww pb48">
        <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
          <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">
            The Great Service
          </h3>
          <h2 className="heading fs36 fw6 mb16">Our Medical Services</h2>
          <p className="heading-desc lh30 w50">
            Our Medical Services: Comprehensive, compassionate, and cutting-edge
            healthcare solutions tailored to your needs for optimal well-being
            and peace of mind.
          </p>
        </div>
        <Slider {...settings}>
          {serviceCardData.map((serviceData) => (
            <div className="service-card plr12" key={serviceData.id}>
              <div className="service-card-img aisc">
                <Image
                  src={`/images/${serviceData.image}`}
                  alt={serviceData.name}
                  width={320}
                  height={210}
                />
              </div>
              <div className="service-card-content plr16 ptb24">
                <h3 className="fs20 fw6 mb16">{serviceData.name}</h3>
                <p className="fs15 lh24 fc3 mb24 text-row lc3">
                  {serviceData.description}
                </p>
                <Link
                  href={`${serviceData.serviceUrl}`}
                  className="fs15 fc1 dif aic bg4 mt16 mb24 cp"
                >
                  <span className="v-center">
                    Explore More
                    <MdOutlineArrowRightAlt size={24} className="ml8" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceCard;
