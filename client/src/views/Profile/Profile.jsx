import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../context/UserContext";
import CourseCard from "../../components/CourseCard/CourseCard";
import Card from "../../components/Card/Card";
import "./Profile.css";

const skills = ["Javascript", "Python", "Potatoes"];

function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const { userData } = useContext(UserContext);
  let userCourses = userData.user.coursesInProgress;
  let coursesCompleted = userData.user.coursesCompleted;
  console.log(userCourses);
  return (
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
  );
}

export default Profile;
