import React from "react";
import SkillBubble from "../SkillBubble/SkillBubble";

import "./CatalogueCard.css";

function CatalogueCard({
  courseName,
  courseDuration,
  description,
  keySkills,
  onClick,
}) {
  return (
    <div className="catalogue-card-wrapper">
      <div className="catalogue-card-container">
        <div className="catalogue-course-details">
          <h2>{courseName}</h2>
          <p>
            <span className="course-desc">{description}</span>{" "}
          </p>
          <p>Duration: {courseDuration}</p>
          <p>Key Skills:</p>
          <div className="skills">
            {keySkills.map((skill) => (
              <SkillBubble skillName={skill}></SkillBubble>
            ))}
          </div>
        </div>
      </div>
      <hr className="catalogue-separator" />
      <div className="btn-flex-wrapper">
        <button className="btn course-btn" onClick={onClick}>
          {" "}
          Start Course{" "}
        </button>
      </div>
    </div>
  );
}

export default CatalogueCard;
