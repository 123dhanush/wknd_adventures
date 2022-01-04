/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { backgroundColor: "#FFEA00" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light header-navbar">
        <div className="container-fluid">
          <img
            src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
            alt="wknd-logo"
            className="wknd-logo"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase"
                  to="/"
                  activeClassName={Header.active}
                  exact
                >
                  Magazine
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase"
                  to="/adventures"
                  activeStyle={activeStyle}
                  exact
                >
                  Adventures
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase"
                  to="/faqs"
                  activeStyle={activeStyle}
                  exact
                >
                  FAQS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase"
                  to="/aboutus"
                  activeStyle={activeStyle}
                  exact
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <form className="d-flex">
              <div className="input-group flex-nowrap">
                <span
                  className="input-group-text search-icon"
                  id="addon-wrapping"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;