import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { FaDotCircle } from "react-icons/fa";
import DoctorTeam from "@/components/DoctorTeam";
import FindDoctorForm from "@/components/FindDoctorForm";

const servicePageData = [
  {
    overview: {
      title: "Overview",
      subheading: "Dedicated Care for Digestive Health",
      content:
        "Welcome to the Gastroenterology Clinic at Jeevan Raksha Hospital, where we are dedicated to providing comprehensive care for a wide spectrum of gastrointestinal conditions. Gastroenterology is a medical specialty focused on the diagnosis, treatment, and management of disorders affecting the digestive system. Our clinic is staffed by a team of experienced gastroenterologists, endoscopists, and support staff who are committed to delivering personalized, patient-centered care. We understand the impact that gastrointestinal issues can have on your quality of life, and we strive to offer timely appointments, accurate diagnoses, and effective treatments to address your concerns. Whether you are experiencing symptoms such as abdominal pain, acid reflux, or changes in bowel habits, or if you require routine screenings such as colonoscopies, we are here to provide you with the highest level of care and support. At Jeevan Raksha Hospital's Gastroenterology Clinic, your digestive health is our priority.",
      imageLink: "/images/dialysis.jpg",
    },
    services: {
      title: "Services Offered",
      subheading: "Comprehensive Gastrointestinal Care Solutions",
      content:
        "Jeevan Raksha Hospital's Gastroenterology Clinic offers a comprehensive range of diagnostic and therapeutic services for digestive disorders. Our services include endoscopic procedures, such as colonoscopy and gastroscopy, as well as medical management and lifestyle counseling for conditions such as acid reflux, inflammatory bowel disease, and liver disease.",
      additionalServices: [
        {
          icon: "customized-delivery-schedules-01",
          title: "Express Delivery Options",
          content:
            "Recognizing the urgency often associated with medical deliveries, we offer express delivery options for critical supplies. Whether it's emergency medication or life-saving equipment, our delivery team is equipped to handle expedited requests with the utmost priority.",
        },
        {
          icon: "express-delivery-options-01",
          title: "Customized Delivery Schedules",
          content:
            "We understand that every hospital operates on its unique schedule. That's why we offer customized delivery schedules to accommodate the specific needs and preferences of each facility. Whether you require daily, weekly, or monthly deliveries, we will work with you to create a schedule that ensures uninterrupted supply.",
        },
        {
          icon: "state-of-the-art-tracking-system-01",
          title: "State-of-the-Art Tracking System",
          content:
            "With our advanced tracking system, you can monitor the status of your deliveries in real-time. From the moment an order is placed to its arrival at your facility, you'll have full visibility every step of the way, providing peace of mind and allowing for efficient planning.",
        },
        {
          icon: "dedicated-delivery-team-01",
          title: "Dedicated Delivery Team",
          content:
            "Our delivery team consists of trained professionals who understand the importance of their role in supporting the healthcare industry. With their expertise and commitment to excellence, you can trust that your deliveries will be handled with care and precision.",
        },
        {
          icon: "environmental-responsibility-01",
          title: "Environmental Responsibility",
          content:
            "In addition to efficiency, we are also committed to environmental responsibility. We employ eco-friendly practices in our delivery operations, such as optimizing delivery routes to reduce fuel consumption and minimizing packaging waste.",
        },
      ],
    },
    medicalTeam: {
      title: "Medical Team",
      subheading: "Meet Our Experienced Team of Doctors",
      content:
        "Our team of experienced gastroenterologists, endoscopists, nurses, and support staff at Jeevan Raksha Hospital's Gastroenterology Clinic specializes in providing expert care for patients with digestive disorders. With advanced training and expertise in gastroenterology, our medical team ensures personalized treatment plans and compassionate support for every patient.",
    },
    facilities: {
      title: "Facilities and Technology",
      subheading: "State-of-the-Art Gastroenterology Facilities",
      content:
        "Jeevan Raksha Hospital's Gastroenterology Clinic is equipped with state-of-the-art facilities and technology for the diagnosis and treatment of digestive disorders. Our endoscopy suites are equipped with advanced imaging systems and instrumentation, ensuring accurate and efficient procedures with minimal discomfort for patients.",
      facilitiesList: [
        "Modern Infrastructure",
        "Specialized Departments",
        "Advanced Operating Theaters",
        "Diagnostic Imaging Center",
        "Laboratory Services",
      ],
      techList: [
        "Electronic Health Records (EHR)",
        "Telemedicine Services",
        "Robotic Surgery",
        "Patient Monitoring Systems",
      ],
      imageLink: "/images/dialysis-02.jpg",
    },
  },
];

export default function gastroenterologyClinic() {
  const [isPopupOpenM, setIsPopupOpenM] = useState(false);

  const openPopupM = () => {
    setIsPopupOpenM(true);
  };

  const closePopupM = () => {
    setIsPopupOpenM(false);
  };

  return (
    <>
      <Head>
        <title>Jeevan Raksha - Hospital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FindDoctorForm isOpen={isPopupOpenM} onClose={closePopupM} />
      <section className="page-heading-section w100 df pr">
        <div className="banner-btn pa l0 w100">
          <div className="wrapper">
            <div className="page-heading-content">
              <h1 className="page-heading mb16 fs24 fw6 dib bg6 fc4 br4 ptb12 plr24">
                Gastroenterology clinic
              </h1>
              <div className="page-button df">
                <Link
                  onClick={openPopupM}
                  href="#"
                  className="appoinment-button bg7 ptb12 plr32 fs13 fw5 br4 mr16 transit2"
                >
                  Book Appoinment
                </Link>
                <Link
                  onClick={openPopupM}
                  href="#"
                  className="doctor-button bg4 ptb12 plr32 fs13 fw5 br4 transit2"
                >
                  Find a Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="main w100 ofh">
        {servicePageData.map((section) => (
          <>
            <section className="page-sections ptb48 brd-t1">
              <div className="service-contain wrapper df ptb48">
                <article className="left-content flx1 plr48">
                  <div className="inner-heading">
                    <h2 className="v-center fs14 mb24 fc2">
                      <span className="section-line lh48"></span>
                      {section.overview.title}
                    </h2>
                    <h4 className="fs36 fw6 fc1 mb24">
                      {section.overview.subheading}
                    </h4>
                    <p className="lh26 fc3">{section.overview.content}</p>
                  </div>
                </article>
                <article className="service-faq flx40 mr48">
                  <img
                    src={section.overview.imageLink}
                    alt={section.overview.title}
                    className="w100 brd1 br8"
                  />
                </article>
              </div>
            </section>
            <section className="page-sections ptb48 brd-t1 bg7">
              <div className="service-contain wrapper">
                <article className="left-content flx1 plr48">
                  <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
                    <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">
                      {section.services.title}
                    </h3>
                    <p className="heading-desc lh26 fc3 w70">
                      {section.services.content}
                    </p>
                  </div>
                </article>
                <div className="additional-services mt48 df fww ">
                  {section.services.additionalServices.map((service, index) => (
                    <div
                      key={index}
                      className="additional-service flx31 p16 bs4 mb24 br8 bg4 mlr12"
                    >
                      <div className="v-center mb24">
                        <div className="how-card-icon box-center h64 w64 br50 bg1 df">
                          <img
                            src={`/images/svg-icon/${service.icon}.svg`}
                            alt="additional-service-img"
                            className="h48 w48 br24"
                          />
                        </div>
                        <h3 className="fs17 fw6 ls1 ml16 lh22">
                          {service.title}
                        </h3>
                      </div>
                      <p className="fs14 mt12 lh24 fc3">{service.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="service-section ptb48 brd-t1">
              <div className="service-contain wrapper">
                <article className="left-content flx1 plr48">
                  <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
                    <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">
                      {section.medicalTeam.title}
                    </h3>
                    <h2 className="heading fs36 fw6 mb16">
                      {section.medicalTeam.subheading}
                    </h2>
                    <p className="heading-desc lh26 fc3 w70">
                      {section.medicalTeam.content}
                    </p>
                  </div>
                </article>
              </div>
              <DoctorTeam />
            </section>
            <section className="page-sections ptb48 brd-t1">
              <div className="service-contain wrapper df ptb48">
                <article className="left-content flx1 plr48">
                  <div className="inner-heading">
                    <h2 className="v-center fs14 mb24 fc2">
                      <span className="section-line lh48"></span>
                      {section.facilities.title}
                    </h2>
                    <h4 className="fs36 fw6 fc1 mb24">
                      {section.facilities.subheading}
                    </h4>
                    <p className="lh26 fc3">{section.facilities.content}</p>
                  </div>
                  <div className="facility-tech df jcsb">
                    <div className="facilities flx48">
                      <ul className="lh18 mt24">
                        {section.facilities.facilitiesList.map(
                          (facility, index) => (
                            <li
                              key={index}
                              className="v-center mb12 fs15 lh24 fc3"
                            >
                              <FaDotCircle className="fc1 fs18 mr8" />
                              {facility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="technology">
                      <ul className="lh18 mt24">
                        {section.facilities.techList.map((tech, index) => (
                          <li
                            key={index}
                            className="v-center mb12 fs15 lh24 fc3"
                          >
                            <FaDotCircle className="fc1 fs18 mr4" />
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="service-faq flx40 mr48">
                  <img
                    src={section.facilities.imageLink}
                    alt={section.facilities.title}
                    className="w100 brd1 br8"
                  />
                </article>
              </div>
            </section>
          </>
        ))}
      </main>
    </>
  );
}
