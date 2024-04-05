// components/DynamicNavigation.js
import React from "react";
import Link from "next/link";
import navigationData from "../data/navigationData.json";

const DynamicNavigation = () => {
  return (
    <ul className="dropdown df fww bg4 l0 r0 pf zi3 pr aft bef">
      {navigationData.speciality.branches.map((branch) => (
        <li key={branch.slug} className=" branch flx25">
          <ul>
            {branch.departments.map((department) => (
              <li key={department.slug}>
                <Link href={`/super-speciality-branches/${department.slug}`}>
                  <div className="department-list v-center lh24">
                    <div className="mr8">
                      <img
                        src={`/images/service-svg-icon/${department.url}.svg`}
                      />
                    </div>
                    <div className="department-name ais">{department.name}</div>
                  </div>
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
          margin: 0 auto;
          padding: 24px;
        }

        .branch {
          padding: 10px 0;
          margin: 16px 0;
          min-width: 200px;
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