// React imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// User module imports
import RouteClient from "./components/RouteClient/RouteClient";
import EmployeeContext from "./context/UserContext";
import CoursesContext from "./context/CourseContext";
import "./App.css";

function App() {
  return (
    <Router>
      <CoursesContext>
        <EmployeeContext>
          <RouteClient />
        </EmployeeContext>
      </CoursesContext>
    </Router>
  );
}

export default App;
