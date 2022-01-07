/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Dropdown, Form } from "react-bootstrap";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={scroll ? "sticky-top scroll-nav" : ""}>
      <div className="container-fluid bg-dark">
        <nav className="container-sm navbar navbar-expand-sm navbar-dark bg-dark login-nav">
          <button className="btn-dark text-uppercase ms-auto signin-btn" to="/">
            sign in
          </button>
          &nbsp;&nbsp;&nbsp;
          <Form.Select size="sm" className="lang-select">
            <option>EN-US</option>
            <option>EN-CA</option>
            <option>DE-CH</option>
            <option>DE-DE</option>
          </Form.Select>
        </nav>
      </div>

      <div className="container-sm">
        <nav
          className={
            scroll
              ? "scroll-padding navbar navbar-expand-lg sticky-top navbar-light"
              : "navbar navbar-expand-lg sticky-top navbar-light header-navbar"
          }
        >
          <div className="container-fluid">
            <NavLink className="nav-link text-uppercase" to="/" exact>
              <img
                src="https://wknd.site/content/experience-fragments/wknd/language-masters/en/site/header/master/_jcr_content/root/container/container_1195249223/image.coreimg.svg/1594412560447/wknd-logo-dk.svg"
                alt="wknd-logo"
                className="wknd-logo"
              />
            </NavLink>
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
                    className="nav-link text-uppercase nav-item"
                    to="/Magazine"
                    exact
                  >
                    Magazine
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase nav-item"
                    to="/adventures"
                    exact
                  >
                    Adventures
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase nav-item"
                    to="/faqs"
                    exact
                  >
                    FAQS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-uppercase nav-item"
                    to="/aboutus"
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
    </div>
  );
};

export default Header;
