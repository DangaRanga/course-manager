import React, { useState, useEffect } from "react";

import "./CourseCard.css";

import SkillBubble from "../SkillBubble/SkillBubble";

function CourseCard({ courseName, courseDuration, keySkills }) {
  return (
    <div className="course-card-container">
      <div className="course-flex-wrapper">
        <div className="course-details">
          <h2> {courseName}</h2>
          <p> Duration: 120 Minutes </p>
          <p> Key Skills: </p>
          <div className="skills">
            {keySkills.map((skill) => (
              <SkillBubble skillName={skill}></SkillBubble>
            ))}
          </div>
        </div>
        <div>
          <button className="btn course-btn"> Continue Learning </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
