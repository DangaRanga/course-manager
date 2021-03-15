import React from "react";

import CourseCard from "../../components/CourseCard/CourseCard";
import Card from "../../components/Card/Card";

import "./Profile.css";
function Profile() {
  return (
    <div id="profile-content-container">
      <h1 id="profile-header"> My Courses </h1>
      <div id="profile-content-wrapper">
        <div id="profile-courses">
          <CourseCard courseName="Introduction to NextJS"></CourseCard>
          <CourseCard courseName="Introduction to Django"></CourseCard>
          <CourseCard courseName="Introduction to DBMS"></CourseCard>
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
