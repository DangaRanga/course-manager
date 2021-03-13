import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteClient from "./components/RouteClient/RouteClient";
import "./App.css";

function App() {
  return (
    <Router>
      <RouteClient />
    </Router>
  );
}

export default App;
