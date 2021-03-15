import React from "react";
import CourseSidePanel from "../../components/CourseSidePanel/CourseSidePanel";
import CatalogueCard from "../../components/CatalogueCard/CatalogueCard";

import "./Catalogue.css";

const skills = ["Javascript", "Python", "Potatoes"];

function Catalogue() {
  return (
    <div id="course-catalogue-container">
      <CourseSidePanel />
      <div id="course-catalogue-content">
        <h1>Course Catalogue</h1>
        <div id="catalogue-cards">
          <CatalogueCard
            courseName="Introduction to Next.js"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            keySkills={skills}
          />
          <CatalogueCard
            courseName="Introduction to Next.js"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            keySkills={skills}
          />
          <CatalogueCard
            courseName="Introduction to Next.js"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            keySkills={skills}
          />
          <CatalogueCard
            courseName="Introduction to Next.js"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            keySkills={skills}
          />
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
