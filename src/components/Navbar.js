// Styles
import "./Navbar.scss";

import LogoDark from "../assets/shared/desktop/logo-dark.png";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Close from "../assets/shared/mobile/icon-close.svg";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  // Close the mobile navigation menu when the user navigates to a new page
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  // List of valid routes
  const validRoutes = [
    "/",
    "/about",
    "/locations",
    "/contact",
    "/services/webdesign",
    "/services/appdesign",
    "/services/graphicdesign",
  ];

  // Only render the Navbar component for valid routes
  if (!validRoutes.includes(pathname)) {
    return null;
  }

  return (
    <nav className="navbar">
      {/* // Render the logo with a link to the homepage */}
      <NavLink to="/">
        <img className="logo" src={LogoDark} alt="Logo dark" />
      </NavLink>
      {/* // Render the desktop navigation menu */}
      <ul className="desktop-nav">
        <NavLink to="/about">OUR COMPANY</NavLink>
        <NavLink to="/locations">LOCATIONS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </ul>
      {/* // Render the mobile navigation menu with a hamburger icon and toggle
      functionality */}
      <div onClick={toggleNav} className="hamburger-nav">
        <span className="hamburger-toggle">
          <img src={navOpen ? Close : Hamburger} alt="" />
        </span>
      </div>

      {navOpen && (
        <div className="mobile-background">
          {navOpen && (
            <ul className="mobile-nav">
              <NavLink to="/about" className="medium-text">
                Our Company
              </NavLink>
              <NavLink to="/locations" className="medium-text">
                Locations
              </NavLink>
              <NavLink to="/contact" className="medium-text">
                Contact
              </NavLink>
              <img
                onClick={toggleNav}
                src={navOpen ? Close : Hamburger}
                alt=""
                className="close"
              />
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}
