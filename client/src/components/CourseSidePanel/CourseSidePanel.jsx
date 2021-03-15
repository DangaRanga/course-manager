import React, { useEffect } from "react";

import "./CourseSidePanel.css";

const departments = [
  "Development",
  "Videography",
  "Photography",
  "Animation",
  "Analytics",
];

function CourseSidePanel() {
  return (
    <aside id="courses-sidepanel">
      <h1> Departments </h1>
      <ul id="departments-filter">
        {departments.map((department) => (
          <li>{department}</li>
        ))}
      </ul>
      <hr id="category-separator" />
      <h1> Skills </h1>
      <ul id="skills-filter"></ul>
    </aside>
  );
}

export default CourseSidePanel;
