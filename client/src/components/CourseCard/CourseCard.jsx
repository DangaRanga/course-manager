import React from "react";

import "./CourseCard.css";

import SkillBubble from "../SkillBubble/SkillBubble";

function CourseCard({ courseName, courseDuration, keySkills, externalUrl }) {
  return (
    <div className="course-card-container">
      <div className="course-flex-wrapper">
        <div className="course-details">
          <h2> {courseName}</h2>
          <p> Duration: {courseDuration} </p>
          <p> Key Skills: </p>
          <div className="skills">
            {keySkills.map((skill) => (
              <SkillBubble skillName={skill}></SkillBubble>
            ))}
          </div>
        </div>
        <div>
          <a href={externalUrl}>
            <button className="btn course-btn"> Continue Learning </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
