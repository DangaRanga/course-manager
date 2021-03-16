import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context/UserContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import "./Profile.css";

const skills = ["Javascript", "Python", "Potatoes"];

function Profile() {
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(UserContext);
  const user = userData.user;
  console.log(userData);
  let userCourses = [];
  let coursesCompleted = [];

  // Adjust the value of loading when the context updates
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
    <div>
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
    </div>
  );
}

export default Profile;
