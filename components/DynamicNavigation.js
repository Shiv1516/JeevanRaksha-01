// components/DynamicNavigation.js
import React from "react";
import Link from "next/link";
import navigationData from "../data/navigationData.json";

const DynamicNavigation = () => {
  return (
    <ul className="dropdown df fww bg4 l0 r0 pf zi3 pr aft bef ">
      {navigationData.speciality.branches.map((branch) => (
        <li key={branch.slug} className={`branch flx25 ${branch.bgcolor}`}>
          <ul>
            {branch.departments.map((department) => (
              <li className="bg-h9 mtb8 plr24 df" key={department.slug}>
                <Link className="w100" href={`/super-speciality-branches/${department.slug}`}>
                  <span className="department-list v-center lh24 ptb4">
                      <img className="mr12"
                        src={`/images/service-svg-icon/${department.url}.svg`}
                      />
                    <span className="department-name fs15">{department.name}</span>
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