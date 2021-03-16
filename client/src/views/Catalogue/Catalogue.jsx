import React, { useState, useEffect, useContext } from "react";
import CourseSidePanel from "../../components/CourseSidePanel/CourseSidePanel";
import CatalogueCard from "../../components/CatalogueCard/CatalogueCard";
import axios from "axios";

import "./Catalogue.css";

const skills = ["Javascript", "Python", "Potatoes"];

function Catalogue() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let courses = {};
    const fetchCourses = async () => {
      try {
        courses = await axios.get("http://localhost:5010/api/course");
      } catch (err) {
        console.error(err);
      }
      setCourses(courses.data);
    };

    fetchCourses();
  }, []);

  return (
    <div id="course-catalogue-container">
      <CourseSidePanel />
      <div id="course-catalogue-content">
        <h1>Course Catalogue</h1>
        <div id="catalogue-cards">
          {courses.map((course) => (
            <CatalogueCard
              courseName={course.title}
              description={course.description}
              keySkills={course.keySkills}
            />
          ))}
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
