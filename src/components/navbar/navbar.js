import React from "react";
import LOGO from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        
        <a class="navbar-brand" href="/" href="javascript:function() { return false; }">
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
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/books"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                Books
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/journals"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                Journals
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/events"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                Events
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/authors"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                Authors
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/about"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                to="/contact"
                exact
                className="nav-link"
                activeClassName="activeNavbar"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
