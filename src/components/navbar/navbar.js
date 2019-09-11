import React from "react";
import LOGO from "../../assets/images/logo.jpg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src={LOGO} width="40" height="40" alt="" />
          &nbsp; &nbsp; Victorious Publishers (INDIA)
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Books
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Journals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Authors
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
