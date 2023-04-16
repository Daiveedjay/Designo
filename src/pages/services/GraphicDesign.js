import "./Services.scss";
import data from "../../data.json";
import Service from "../../components/Service";
import Portfolio from "../../components/Portfolio";

import { useEffect, useRef } from "react";

import { Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GraphicDesign component
export default function GraphicDesign() {
  gsap.registerPlugin(ScrollTrigger);
  // Extract portfolio data for different services
  const webDesignportfolio = data.homePage.portfolios[0];
  const appDesignportfolio = data.homePage.portfolios[1];
  const graphicDesignportfolio = data.homePage.portfolios[2];

  let graphicRef = useRef(null);

  useEffect(() => {
    if (graphicRef.current) {
      gsap.fromTo(
        graphicRef.current,
        { y: "50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          ease: Power4.easeOut,
          duration: 0.6,
          scrollTrigger: {
            trigger: graphicRef.current,
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
  // Render the GraphicDesign component
  return (
    <section className="services-section">
      <div ref={graphicRef} className="services-hero section-spacing">
        <h2 className="lead--text">{graphicDesignportfolio.leadText}</h2>
        <p className="services-sub--text">{graphicDesignportfolio.heroText}</p>
      </div>
      {/* // Render the services project container */}
      <div className="services-project__container section-spacing">
        {graphicDesignportfolio &&
          graphicDesignportfolio.projects.map((project, index) => (
            <Service
              key={index}
              project={project}
              ref={(el) => (serviceRefs.current[index] = el)}
            />
          ))}
      </div>
      {/* // Render the portfolio container with Web Design and App Design
      portfolios */}
      <div className="portfolio__container">
        <Portfolio ref={portfolioRefs} portfolio={webDesignportfolio} />
        <Portfolio ref={portfolioRefs} portfolio={appDesignportfolio} />
      </div>
    </section>
  );
}
