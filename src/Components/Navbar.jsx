import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/java"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              JAVA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/html"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              HTML
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sql"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              SQL
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
