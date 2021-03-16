// React imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import Search from "../Search/Search";

// CSS and Asset imports
import logo from "../../assets/icons/logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <div id="nav-wrapper">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div id="search">
          {" "}
          <Search />
        </div>
        <ul className="nav-items">
          <Link to="/profile">
            <li> My Home</li>
          </Link>
          <Link to="/courses">
            <li> Courses </li>
          </Link>
          <div id="profile-icon"></div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
