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
  console.log(userData);
  return (
    <div id="profile-content-container">
      <h1 id="profile-header"> My Courses </h1>
      <div id="profile-content-wrapper">
        <div id="profile-courses">
          <CourseCard
            courseName="Introduction to NextJS"
            keySkills={skills}
          ></CourseCard>
          <CourseCard
            courseName="Introduction to Django"
            keySkills={skills}
          ></CourseCard>
          <CourseCard
            courseName="Introduction to DBMS"
            keySkills={skills}
          ></CourseCard>
        </div>
        <div id="profile-stats">
          <Card description="Courses Registered" value="10"></Card>
          <Card description="Courses Availiable" value="20"></Card>
          <Card description="Courses Completed" value="30"></Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
