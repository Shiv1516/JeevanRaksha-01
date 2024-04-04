import { useRouter } from "next/router";
import Head from "next/head";
import navigationData from "../../data/navigationData.json";
import sectionsData from "../../data/sectionsData.json";
import doctorsData from "../../data/doctorteams.json";
import Breadcrumb from "../../components/Breadcrumb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaWpforms, FaDotCircle } from "react-icons/fa";

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch data for the current department
  const data = navigationData.speciality.branches
    .flatMap((b) => [b, ...b.departments])
    .find((item) => item.slug === slug);

  // Extract section data for the current department
  const departmentSections =
    sectionsData && sectionsData[slug];
  console.log("@department section", departmentSections);

  // Prepare breadcrumb items
  const breadcrumbItems = data
    ? [
        { name: "Home", url: "/" },
        {
          name: "Super Speciality Branches",
          url: "/super-speciality-branches",
        },
        data.parent
          ? {
              name: data.parent.name,
              url: `/super-speciality-branches/${data.parent.slug}`,
            }
          : null,
        { name: data.name, url: `/super-speciality-branches/${slug}` },
      ].filter(Boolean)
    : [];

  return (
    <div>
      <Head>
        <title>{data ? data.name : "Dynamic Page"}</title>
        <meta
          name="description"
          content={`Description for ${data ? data.name : "Dynamic Page"}`}
        />
        <meta
          name="keywords"
          content={`Keywords for ${data ? data.name : "Dynamic Page"}`}
        />
      </Head>

      <section className="page-heading-section pt16 pb48 bg-grdnt-01">
        <div className="wrapper">
          <h1 className="mt40 mb16 tac">{data && data.name}</h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {departmentSections && (
        <div className="section-data">
          {/* Map over sections for the specific department */}
          {Object.keys(departmentSections).map((sectionKey) => {
            const section = departmentSections[sectionKey];
            return (
              <section
                key={sectionKey}
                className={`page-sections ptb48 brd-t1 ${section.sectionalign}`}
              >
                <div className="service-contain wrapper df">
                  <article className="left-content flx1 plr48">

                  
                  


          {section.sectionalign ? (
            
        <div className="service-heading mb48 mt48 flx100 v-center fdc tac">
        <h3 className="sub-heading fs15 fc4 p8 br4 fw5 mb16 bg1">{section.title}</h3>
        <h2 className="heading fs36 fw6 mb16">{section.subheading}</h2>
        <p className="heading-desc lh30 w70">
        {section.content}
        </p>
      </div>
      ) : (
        <div className="inner-heading">
        <h2 className="v-center fs14 mb24 fc2">
            <span className="section-line"></span>{section.title}
          </h2>
          <h4 className="fs36 fw6 fc1 mb24">
            {section.subheading}
          </h4>
          <p className="lh24">
          {section.content}
          </p>
          </div>
      )}



















                    {section.doctors && (
                      
                      <div className="team-block flx100 df fww">
          {doctorsData.map((doctor, index) => (
            <div
              key={index}
              className="team flx25 plr12"
            >
              <div className="card-continer plr24 box-sd1 box-center fdc ptb24 br8 mb24 bg4">
                <div className="team-card-image box-center br50 ofh mb24 pr">
                  <img src={doctor.image} alt={doctor.name} className="w100" />
                  <ul className="doctor-social-media v-center pa">
                    <li className="box-center h40 w40 br50 bg4 brd1">
                      <a
                        href={doctor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn className="fc1" />
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="doctor-details fs15 w100">
                  <li className="doctor-specification df jcsb fs13 fw6 mb24">
                    <p className="doctor-name-text lh24 fc1 brd1 plr8 ptb4 br4">
                      {doctor.specialization}
                    </p>
                    <p className="doctor-rating-text lh24 brd1 plr8 ptb4 br4 bg1 fc4 v-center">
                      <FaStar className="mr4" /> {doctor.rating}
                    </p>
                  </li>
                  <li className="doctor-name fw6 fs18 mb16">{doctor.name}</li>
                  <li className="doctor-education df mb16 lh24">
                    <BsPersonLinesFill className="mr8 fc1 fs20" />
                    {doctor.education}
                  </li>
                  <li className="doctor-location v-center mb24">
                    <HiLocationMarker className="mr8 fc1 fs20" />
                    {doctor.location}
                  </li>
                  <li className="doctor-appoinment bg5 fc1 fs16 fw5 p12 br4 cp fc-h4 bg-h1 box-center transit2">
                    Book an Appoinment
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
                    )}
                    {!section.doctors && section.additionalServices && (
                      <div className="additional-services mt48 df fww jcsb ">
                        {section.additionalServices.map((service, index) => (
                          <div
                            key={index}
                            className="additional-service flx24 p12 brd1 mb24 br8"
                          >
                            <div className="how-card-icon box-center h64 w64 br50 bg1">
                              <img src={`/images/${service.icon}.jpg`} alt="" className="h48 w48 br24" />
                            </div>
                            <p className="fs15 fw6 ls1 mt24">{service.title}</p>
                            <p className="fs14 mt12 lh24 fc3">
                              {service.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.facilitiesList && (
                      <div className="facility-tech df jcsb">
                        <div className="facilities flx48">
                          <ul className="lh18 mt24">
                            {section.facilitiesList.map((facility, index) => (
                              <li
                                key={index}
                                className="v-center mb12 fs15 lh24 fc3"
                              >
                                <FaDotCircle className="fc1 fs18 mr8" />
                                {facility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="technology">
                          <ul className="lh18 mt24">
                            {section.techList.map((tech, index) => (
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
                    )}
                  </article>
                  {!section.doctors && !section.additionalServices && (
                    <article className="service-faq flx40 mr48">
                      <img
                        src={section.imageLink}
                        alt={section.title}
                        className="w100 brd1 br8"
                      />
                    </article>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
