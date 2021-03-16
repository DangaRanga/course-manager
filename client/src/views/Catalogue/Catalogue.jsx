// React imports
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

// Component imports
import CourseSidePanel from "../../components/CourseSidePanel/CourseSidePanel";
import CatalogueCard from "../../components/CatalogueCard/CatalogueCard";
import Spinner from "../../components/Spinner/Spinner";

// Context imports
import { UserContext } from "../../context/UserContext";
import { CourseContext } from "../../context/CourseContext";

// Utility imports
import { updateEmployeeCourses } from "../../util/data-fetching";
import { objectInArray } from "../../util/data-processing";

// CSS and image imports
import "./Catalogue.css";

function Catalogue() {
  // Initializing key variables
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const { courses } = useContext(CourseContext);

  // Toggle the loading spinner while the context is loaded
  useEffect(() => {
    if (courses) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [courses]);

  // Try Catch to allow context to load in
  try {
    console.log(courses);
  } catch (err) {
    console.log("Loading Context");
  }

  return (
    <div>
      {loading ? (
        <div id="loader">
          <Spinner></Spinner>
        </div>
      ) : (
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
                  courseDuration={course.duration}
                  onClick={() => {
                    let userCourses = userData.user.coursesInProgress;
                    if (objectInArray(userCourses, course) === false) {
                      userCourses.push(course);
                      updateEmployeeCourses(userCourses, userData);
                    }
                    history.push("/");
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogue;
