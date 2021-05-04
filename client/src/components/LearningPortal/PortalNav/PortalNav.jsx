// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets imports
import "./PortalNav.css";

function PortalNav() {
  // Initiaizing component state
  const [active, setActive] = useState({
    dashboard: false,
    courses: false,
  });

  // Setting the nav links
  const navLinks = [
    { route: "/dashboard", label: "Dashboard", icon="" },
    { route: "/courses", label: "Courses", icon="" },
  ];

  const navItems = navLinks.map((link, index) = (
      <Link key={index}
      to={link.route}

      // Used for toggling the active CSS class
      className={
          window.location.pathname === link.route ? "active" : ""
      }>
          {link.label}
      </Link>
  ))
  return (
    <aside id="portal-nav">
      <div id="sidebar-header"> Logo </div>
      <hr className="portal-divider" />
      <ul className="portal-nav-items">
        {navItems.map((item) => (
            item
        ))}
      </ul>
    </aside>
  );
}

export default PortalNav;