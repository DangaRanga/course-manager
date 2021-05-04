// React imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import Search from "../Search/Search";

// CSS and Asset imports
import Logo from "../../assets/icons/Logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <div id="nav-wrapper">
      <nav>
        <img src={Logo} alt="logo" className="logo" />
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
          <Link to="/">
            <li
              onClick={(e) => {
                localStorage.removeItem("auth-token");
              }}
            >
              Logout
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
