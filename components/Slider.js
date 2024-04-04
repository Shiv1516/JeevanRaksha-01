import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/bannerdata");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

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
      {data.map((slide, index) => (
        <SliderItem key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
