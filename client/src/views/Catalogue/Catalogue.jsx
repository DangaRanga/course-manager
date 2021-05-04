// React imports
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

// Component imports
import CourseSidePanel from "../../components/CourseSidePanel/CourseSidePanel";
import CatalogueCard from "../../components/CatalogueCard/CatalogueCard";
import Spinner from "../../components/Spinner/Spinner";

// Context imports
import { UserContext } from "../../context/UserContext";

// Utility imports
import { updateEmployeeCourses, fetchCourses } from "../../util/data-fetching";
import { objectInArray } from "../../util/data-processing";

// CSS and image imports
import "./Catalogue.css";

function Catalogue() {
  // Initializing key variables
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  const { userData } = useContext(UserContext);
  // Toggle the loading spinner while the context is loaded

  useEffect(() => {
    const updateCourses = async () => {
      let fetchedCourses = await fetchCourses();
      setCourses(fetchedCourses);
      setLoading(false);
    };
    updateCourses();
  }, []);

  // Try Catch to allow context to load in
  try {
    console.log(courses);
  } catch (err) {
    console.log("Loading Context");
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
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
    </motion.div>
  );
}

export default Catalogue;
