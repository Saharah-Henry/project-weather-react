import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Navigation() {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <ul>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/Saharah-Henry/project-weather-react"
            >
              Lisbon
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/Saharah-Henry/project-weather-react"
            >
              Paris
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/Saharah-Henry/project-weather-react"
            >
              Sydney
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/Saharah-Henry/project-weather-react"
            >
              San Francisco
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
