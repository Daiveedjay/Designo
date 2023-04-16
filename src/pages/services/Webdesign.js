import "./Services.scss";
import data from "../../data.json";
import Service from "../../components/Service";
import Portfolio from "../../components/Portfolio";
import "../../components/Portfolio.scss";

import { useEffect, useRef } from "react";

import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Webdesign component
export default function Webdesign() {
  gsap.registerPlugin(ScrollTrigger);
  // Extract portfolio data for different services
  const webDesignportfolio = data.homePage.portfolios[0];
  const appDesignportfolio = data.homePage.portfolios[1];
  const graphicDesignportfolio = data.homePage.portfolios[2];

  let webRef = useRef(null);

  useEffect(() => {
    if (webRef.current) {
      gsap.fromTo(
        webRef.current,
        { y: "50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: Power4.easeOut,
          duration: 0.6,
          scrollTrigger: {
            trigger: webRef.current,
            start: "top 100%",
          },
        }
      );
    }
  }, []);

  const serviceRefs = useRef([]);

  useEffect(() => {
    if (serviceRefs.current.length !== 0) {
      serviceRefs.current.forEach((service, index) => {
        gsap.fromTo(
          service,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Power4.easeOut,
            duration: 0.6,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: service,
              start: "center 100%",
            },
          }
        );
      });
    }
  }, []);

  const portfolioRefs = useRef(null);

  useEffect(() => {
    if (portfolioRefs.current) {
      gsap.fromTo(
        portfolioRefs.current,
        { y: "50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: Power4.easeOut,
          duration: 0.6,
          scrollTrigger: {
            trigger: portfolioRefs.current,
            start: "top 100%",
          },
        }
      );
    }
  }, []);

  // Render the Webdesign component
  return (
    <section className="services-section">
      <div ref={webRef} className="services-hero section-spacing">
        <h2 className="lead--text">{webDesignportfolio.leadText}</h2>
        <p className="services-sub--text">{webDesignportfolio.heroText}</p>
      </div>
      {/* // Render the services project container */}
      <div className="services-project__container section-spacing">
        {webDesignportfolio &&
          webDesignportfolio.projects.map((project, index) => (
            <Service
              key={index}
              project={project}
              ref={(el) => (serviceRefs.current[index] = el)}
            />
          ))}
      </div>
      {/* // Render the portfolio container with App Design and Graphic Design
      portfolios */}
      <div className="portfolio__container">
        <Portfolio ref={portfolioRefs} portfolio={appDesignportfolio} />
        <Portfolio ref={portfolioRefs} portfolio={graphicDesignportfolio} />
      </div>
    </section>
  );
}
