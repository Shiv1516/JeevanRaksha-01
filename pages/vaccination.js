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
      subheading: "Ensuring Immunization for Healthy Communities",
      content:
        "Welcome to Jeevan Raksha Hospital's Vaccination Services, where we prioritize the health and well-being of individuals of all ages through comprehensive vaccination programs. Vaccination is one of the most effective ways to prevent infectious diseases and protect against serious health complications. At Jeevan Raksha Hospital, we are committed to providing safe, high-quality vaccines administered by trained healthcare professionals in a comfortable and supportive environment.",
      imageLink: "/images/pharmacy.jpg",
    },
    services: {
      title: "Services Offered",
      subheading: "Comprehensive Vaccination Programs",
      content:
        "Jeevan Raksha Hospital offers a wide range of vaccination services for individuals of all ages, from infants to seniors. Our vaccination programs include routine childhood vaccinations, adult vaccinations, travel vaccinations, and specialized vaccinations for high-risk populations. We also provide vaccination counseling, personalized vaccination schedules, and vaccine education to ensure that our patients make informed decisions about their immunization needs.",
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
      subheading: "Expert Immunization Specialists",
      content:
        "Our team of doctors, nurses, and healthcare professionals at Jeevan Raksha Hospital's Vaccination Services is dedicated to providing expert care and support throughout the vaccination process. With specialized training in immunization practices and a commitment to following national vaccination guidelines, our medical team ensures the safety and efficacy of each vaccine administered.",
    },
    facilities: {
      title: "Facilities and Technology",
      subheading: "Modern Vaccine Administration Facilities",
      content:
        "Jeevan Raksha Hospital's Vaccination Services are conducted in modern and well-equipped facilities designed to provide a safe and comfortable environment for receiving vaccines. Our vaccination clinics are equipped with state-of-the-art vaccine storage and handling facilities, ensuring the integrity and potency of vaccines. We also utilize electronic medical records and vaccine tracking systems to monitor vaccination schedules and ensure timely follow-up doses.",
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
      imageLink: "/images/pharmacy-02.jpg",
    },
  },
];

export default function vaccination() {
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
                Vaccination
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
            <section className="service-section ptb48 brd-t1 dn">
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
