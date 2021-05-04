// React imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// User module imports
import RouteClient from "./components/RouteClient/RouteClient";
import EmployeeContext from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <Router>
      <EmployeeContext>
        <RouteClient />
      </EmployeeContext>
    </Router>
  );
}

export default App;
