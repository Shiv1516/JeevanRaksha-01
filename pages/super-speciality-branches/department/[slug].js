import { useRouter } from "next/router";
import Head from "next/head";
import navigationData from "../../../data/navigationData.json";
import sectionsData from "../../../data/sectionsData.json";
import Breadcrumb from "../../../components/Breadcrumb";
import { FaLinkedinIn } from "react-icons/fa";
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
    sectionsData.medicines && sectionsData.medicines[slug];
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
            console.log("section", section);
            return (
              <section
                key={sectionKey}
                className={`page-sections ptb48 brd-t1`}
              >
                <div className="service-contain wrapper df">
                  <article className="left-content flx1 plr48">
                    <h2 className="fs20 mb24 fc1">{section.title}</h2>
                    <p className="fs15 lh24 fc3">{section.content}</p>
                    {section.doctors && (
                      <div className="team-block flx100 v-center jcsb fww mt48">
                        {section.doctors.map((doctor, index) => (
                          <div
                            key={index}
                            className="team flx24 plr24 box-sd1 box-center fdc ptb24 br8 mb24"
                          >
                            <div className="team-card-image box-center br50">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w100"
                              />
                            </div>
                            <h3 className="doctor-name fw6 fs18 mt16">
                              {doctor.name}
                            </h3>
                            <p className="doctor-name-text lh24 fs14 fc3 mt8">
                              {doctor.specialization}
                            </p>
                            <ul className="v-center mt16">
                              <li className="box-center h40 w40 br50 bg4 brd1 mr8">
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
                              <FaWpforms size={24} color="#fff" />
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
                              <li key={index} className="v-center mb12 fs15 lh24 fc3">
                                <FaDotCircle className="fc1 fs18 mr8" />
                                {facility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="technology">
                          <ul className="lh18 mt24">  
                            {section.techList.map((tech, index) => (
                              <li key={index} className="v-center mb12 fs15 lh24 fc3">
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
