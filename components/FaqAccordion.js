import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import styles from "../styles/faqAccordion.module.css";

const faqData = [
  {
    id: 1,
    question: "What medical services does the hospital provide?",
    answer:
      "The hospital offers many medical services like heart care, bone and joint treatment, children's health, urgent care, and more. We also provide services for diabetes, high blood pressure, pregnancy check-ups, chest problems, childbirth, and infertility issues.",
  },
  {
    id: 2,
    question: "How can I schedule an appointment with a specialist?",
    answer:
      "You can schedule an appointment with a specialist either by using our online appointment booking system or by contacting our reception.",
  },
  {
    id: 3,
    question: "What are the hospital's visiting hours?",
    answer:
      "Our hospital offers 24/7 visiting hours. For updates and inquiries, you can also contact us via WhatsApp.",
  },
  {
    id: 4,
    question: "Is there a parking facility available for visitors?",
    answer:
      "Yes, the hospital provides parking facilities for visitors. Please follow the designated parking areas and inquire at the reception for more information.",
  },
  {
    id: 5,
    question: "How can I access my medical records online?",
    answer: "Connect with live chat on whatsapp, for any kind of update. ",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
