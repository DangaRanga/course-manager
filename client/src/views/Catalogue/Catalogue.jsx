import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CourseSidePanel from "../../components/CourseSidePanel/CourseSidePanel";
import CatalogueCard from "../../components/CatalogueCard/CatalogueCard";
import axios from "axios";

import "./Catalogue.css";

const skills = ["Javascript", "Python", "Potatoes"];

function Catalogue() {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  const { userData } = useContext(UserContext);
  console.log(userData);
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

  const updateEmployeeCourses = async (userCourses) => {
    let user = userData.user;
    try {
      let response = await axios.put(
        `http://localhost:5010/api/employee/${userData.user.id}`,
        { coursesInProgress: userCourses }
      );
    } catch (err) {
      console.error(err);
    }
  };
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
              onClick={() => {
                let userCourses = userData.user.coursesInProgress;
                if (userCourses.indexOf(course) === -1) {
                  userCourses.push(course);
                }
                updateEmployeeCourses(userCourses);
                history.push("/");
              }}
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
