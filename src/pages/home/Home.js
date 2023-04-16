// Import necessary components and packages
import React, { useEffect, useRef } from "react";
import Button from "../../components/Button";
import Portfolio from "../../components/Portfolio";
import Qualities from "../../components/Qualities";
import data from "../../data.json";

// Import GSAP animation library and its plugins
import { gsap, Power3, Power4, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import the Home component's stylesheet
import "./Home.scss";

// Define the Home component
export default function Home() {
  // Register the ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Initialize a reference to the app and hero image elements
  let appRef = useRef(null);

  let homeRef = useRef(null);
  let heroImgRef = useRef(null);

  // Initialize a reference to store the portfolio elements
  const portfolioRefs = useRef([]);

  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { y: "50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: Power4.easeOut,
          duration: 0.6,
          scrollTrigger: {
            trigger: homeRef.current,
            start: "top 100%",
          },
        }
      );
    }
  }, []);

  // Set the visibility of the app element to 'visible'
  useEffect(() => {
    gsap.to(appRef.current, { duration: 0, css: { visibility: "visible" } });
    TweenMax.to(heroImgRef.current, 0, { opacity: 0 });
    TweenMax.to(heroImgRef.current, 2, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.6,
    });
  }, []);

  // Animate the portfolio section elements sliding in from the left when scrolling into view
  useEffect(() => {
    if (portfolioRefs.current.length !== 0) {
      portfolioRefs.current.forEach((portfolio, index) => {
        gsap.fromTo(
          portfolio,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: Power4.easeOut, // Update the easing function
            duration: 0.2, // Reduce the animation duration
            delay: index * 0.1,
            scrollTrigger: {
              trigger: portfolio,
              start: "center 80%",
            },
          }
        );
      });
    }
  }, []);

  const qualityRefs = useRef([]);

  useEffect(() => {
    if (qualityRefs.current.length !== 0) {
      qualityRefs.current.forEach((quality) => {
        gsap.fromTo(
          quality,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Power4.easeOut,
            duration: 0.6,
            scrollTrigger: {
              trigger: quality,
              start: "center 80%",
            },
          }
        );
      });
    }
  }, []);

  // Extract home page data from the imported data file
  const HomeData = data.homePage;

  // Return the JSX to render the Home component
  return (
    <div ref={appRef} className="home">
      {/* Hero section */}
      <section ref={homeRef} className="home-hero section-spacing">
        <main className="home-hero__section">
          <div className="hero-text__container">
            <h1 className="lead--text">{HomeData?.leadText}</h1>
            <p className="small-text">{HomeData?.subText}</p>
            {/* Render Button component */}
            <Button
              link={HomeData.route}
              buttonContent={HomeData?.buttonText}
            />
          </div>
          {/* Hero image container */}
          <picture className="hero-image__container">
            <source
              media="(max-width: 40.625em)"
              srcSet=".\assets\home\desktop\image-hero-phone.png"
            />
            <img
              ref={heroImgRef}
              className="hero-image"
              src=".\assets\home\desktop\image-hero-new.png"
              alt=""
              style={{ opacity: 0 }}
            />
          </picture>
        </main>
      </section>
      {/* Portfolio section */}
      <section className="portfolio-section section-spacing ">
        {HomeData &&
          HomeData.portfolios.map((portfolio, index) => (
            // Render Portfolio component for each portfolio item
            <Portfolio
              portfolio={portfolio}
              key={index}
              ref={(el) => (portfolioRefs.current[index] = el)}
            />
          ))}
      </section>
      {/* Qualities section */}
      <section className="qualities-section">
        {HomeData &&
          HomeData.qualitiesSection.items.map((quality, index) => (
            // Render Qualities component for each quality item
            <Qualities
              key={quality.header}
              quality={quality}
              ref={(el) => (qualityRefs.current[index] = el)}
            />
          ))}
      </section>
    </div>
  );
}
