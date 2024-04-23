// components/DynamicNavigation.js
import React from "react";
import Link from "next/link";

const navigationData = {
  speciality: {
    id: 1,
    name: "Super Speciality Branches",
    bgcolor: "bg3",
    branches: [
      {
        id: 11,
        name: "row1",
        departments: [
          {
            id: 111,
            name: "Diabetes",
            url: "diabetes",
            img: "diabetes-01",
          },
          {
            id: 112,
            name: "Hypertension",
            url: "hypertension",
            img: "hypertension-01",
          },
          {
            id: 113,
            name: "Antenatal clinic",
            url: "antenatalClinic",
            img: "antenatal-clinic-01",
          },
          {
            id: 114,
            name: "Chest",
            url: "chest",
            img: "chest-01",
          },
          {
            id: 115,
            name: "Delivery",
            url: "delivery",
            img: "delivery-01",
          },
          {
            id: 116,
            name: "Phototherapy",
            url: "phototherapy",
            img: "phototherapy-01",
          },
        ],
      },
      {
        id: 12,
        name: "row2",
        bgcolor: "bg8",
        departments: [
          {
            id: 121,
            name: "Hysterectomy",
            url: "hysterectomy",
            img: "hysterectomy-01",
          },
          {
            id: 122,
            name: "Infertility clinic",
            url: "infertilityClinic",
            img: "infertility-clinic-01",
          },
          {
            id: 123,
            name: "Neonatal Intensive Care Unit (NICU)",
            url: "neonatalIntensiveCareUnit",
            img: "neonatal-intensive-care-unit-01",
          },
          {
            id: 124,
            name: "Medical Termination of Pregnancy (MTP)",
            url: "medicalTerminationOfPregnancy",
            img: "medical-termination-of-pregnancy-icon-01",
          },
          {
            id: 125,
            name: "Cesarean section (C-section)",
            url: "cesareanSection",
            img: "cesarean-section-01",
          },
          {
            id: 126,
            name: "Vaccination",
            url: "vaccination",
            img: "vaccination-01",
          },
        ],
      },
      {
        id: 13,
        name: "row3",
        departments: [
          {
            id: 131,
            name: "Well-baby clinic",
            url: "well-baby-clinic",
            img: "well-baby-clinic-01",
          },
          {
            id: 132,
            name: "Laparoscopic surgery",
            url: "laparoscopicSurgery",
            img: "laparoscopic-surgery",
          },
          {
            id: 133,
            name: "General surgery",
            url: "generalSurgery",
            img: "general-surgery",
          },
          {
            id: 134,
            name: "Thyroid disorders",
            url: "thyroidDisorders",
            img: "thyroid-disorders",
          },
          {
            id: 135,
            name: "Cosmetic and plastic surgery",
            url: "cosmeticAndPlasticSurgery",
            img: "cosmetic-and-plastic-surgery",
          },
          {
            id: 136,
            name: "Dialysis",
            url: "dialysis",
            img: "dialysis",
          },
        ],
      },
      {
        id: 14,
        name: "row4",
        bgcolor: "bg8",
        departments: [
          {
            id: 141,
            name: "Nephrology clinic",
            url: "nephrologyClinic",
            img: "nephrology-clinic",
          },
          {
            id: 142,
            name: "Fistula",
            url: "fistula",
            img: "dialysis",
          },
          {
            id: 143,
            name: "Permacath insertion",
            url: "permacathInsertion",
            img: "permacath-insertion",
          },
          {
            id: 144,
            name: "Gastroenterology clinic",
            url: "gastroenterologyClinic",
            img: "gastroenterology",
          },
        ],
      },
    ],
  },
};

const DynamicNavigation = () => {
  return (
    <ul className="dropdown df fww bg4 l0 r0 pf zi3 pr aft bef ">
      {navigationData.speciality.branches.map((branch) => (
        <li key={branch.id} className={`branch flx25 ${branch.bgcolor}`}>
          <ul>
            {branch.departments.map((department) => (
              <li className="bg-h9 mtb8 plr24 df" key={department.id}>
                <Link
                  className="w100"
                  href={`/${department.url}`}
                >
                  <span className="department-list v-center lh24 ptb4">
                    <img
                      className="mr12"
                      src={`/images/service-svg-icon/${department.img}.svg`}
                    />
                    <span className="department-name fs15">
                      {department.name}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}

      <style jsx>{`
        .dropdown {
          width: 94vw;
          max-width: 1280px;
        }

        .branch-name {
          display: block;
          font-weight: 600;
          color: #414141;
          margin-bottom: 16px;
        }

        .departments {
          display: block;
          margin-top: 10px;
        }

        .department-name {
          display: block;
          padding: 5px 0;
          color: #575757;
        }
      `}</style>
    </ul>
  );
};

export default DynamicNavigation;
