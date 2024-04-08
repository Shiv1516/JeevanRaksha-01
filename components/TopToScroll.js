import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const TopToScroll = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{ display: showScrollButton ? "flex" : "none" }}
      className="scrollToTopBtn bg1 br8 aic jcc fdc"
    >
      <IoIosArrowUp className="scroll-top-icon fs20 fc5"/>
      <span className="scroll-top-text fs18 fc5 br50 transit2"> Top</span>
    </div>
  );
};

export default TopToScroll;
