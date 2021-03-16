// React imports
import React, { useState, useEffect, useContext } from "react";

// Context imports
import { CourseContext } from "../../context/CourseContext";

// CSS and image imports
import "./Search.css";

function Search() {
  const { courses, setCourses } = useContext(CourseContext);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  return (
    <div>
      <input
        id="search-box"
        placeholder="Search Courses"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
