// components/FaqAccordion.js
import React, { useState, useEffect } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import styles from "../styles/faqAccordion.module.css";

const FaqAccordion = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch("/api/faq");
        const data = await response.json();
        setFaqData(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`${styles["faq-accordion"]} h48`}>
      {faqData.map((faq, index) => (
        <div
          key={faq.id}
          className={`${styles["faq-item"]} ${
            index === activeIndex ? styles.active : ""
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className={`${styles["question"]} fc3 fw6`}>
            {index === activeIndex ? (
              <RiSubtractLine size={32} color="#414d58" className="mr16" />
            ) : (
              <RiAddLine size={32} color="#414d58" className="mr16" />
            )}
            <span className="mt4">{faq.question}</span>
          </div>
          <div
            className={`${styles.answer} ${
              index === activeIndex ? styles.visible : styles.hidden
            } pl48 fc3 lh22`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
