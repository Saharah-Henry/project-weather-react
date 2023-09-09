import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Navigation() {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <ul>
          <li class="nav-item">
            <a class="nav-link">Lisbon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Paris</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Sydney</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">San Francisco</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
