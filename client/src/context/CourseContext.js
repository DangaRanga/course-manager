import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CourseContext = createContext();

function CoursesContext({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let courses = {};
    const fetchCourses = async () => {
      try {
        courses = await axios.get(
          "https://course-manager-backend.herokuapp.com/api/course"
        );
      } catch (err) {
        console.error(err);
      }
      setCourses(courses.data);
    };

    fetchCourses();
  }, [courses]);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CoursesContext;
