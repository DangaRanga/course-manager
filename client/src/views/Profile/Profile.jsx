// React imports
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Component imports
import CourseCard from "../../components/CourseCard/CourseCard";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

import { UserContext } from "../../context/UserContext";

// CSS and image imports
import "./Profile.css";

function Profile() {
  // Initializing key variables
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);
  let userCourses = [];
  let coursesCompleted = [];

  // Toggle the loading spinner while the context is loaded
  useEffect(() => {
    if (userData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userData]);

  // Try Catch to allow context to load in
  try {
    userCourses = userData.user.coursesInProgress;
    coursesCompleted = userData.user.coursesCompleted;
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
        <div id="profile-content-container">
          <h1 id="profile-header"> My Courses </h1>
          <div id="profile-content-wrapper">
            <div id="profile-courses">
              {userCourses.map((course) => (
                <CourseCard
                  courseName={course.title}
                  keySkills={course.keySkills}
                  externalUrl={course.externalUrl}
                  courseDuration={course.duration}
                ></CourseCard>
              ))}
            </div>
            <div id="profile-stats">
              <Card
                description="Courses Registered"
                value={userCourses.length}
              ></Card>
              <Card description="Courses Availiable" value="20"></Card>
              <Card
                description="Courses Completed"
                value={coursesCompleted.length}
              ></Card>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Profile;
