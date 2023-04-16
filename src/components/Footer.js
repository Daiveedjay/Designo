import "./Footer.scss";
import LogoLight from "../assets/shared/desktop/logo-light.png";
import { NavLink } from "react-router-dom";
import data from "../data.json";
import Cta from "./Cta";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const footerData = data.homePage.footerSection.logos;
  const ContactData = data.homePage.contactSection;
  const location = useLocation();
  const ctaRef = useRef();

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

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "center 80%",
          },
        }
      );
    }
  }, []);

  // If the current route is not in the validRoutes array, render nothing
  if (!validRoutes.includes(location.pathname)) return null;

  return (
    <>
      <footer className="footer-section">
        {/* // Render Cta component only if the current route is not "/contact" */}
        {location.pathname !== "/contact" && (
          <Cta
            ref={ctaRef}
            link={ContactData.route}
            buttonContent={ContactData}
          />
        )}
        <div className="footer-section__container">
          <nav className="navbar">
            <NavLink to="/">
              <img className="logo" src={LogoLight} alt="Logo dark" />
            </NavLink>
            <ul>
              <NavLink to="/about">OUR COMPANY</NavLink>
              <NavLink to="/locations">LOCATIONS</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
            </ul>
          </nav>
          <div className="footer-socials small-text">
            <address className="footer-address">
              <p>Designo Central Office </p>
              <p>3886 Wellington Street </p>
              <p>Toronto, Ontario M9C 3J5</p>
            </address>
            <div className="footer-contact">
              <p>Contact Us (Central Office)</p>
              <p> P: +234 813-9055-161</p>
              <p> M: israeladefidipe@gmail.com</p>
            </div>
            <div className="footer-icon__container">
              {data &&
                footerData.map((icon) => (
                  <NavLink key={icon.name}>
                    <img src={icon.src} alt="" />
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
