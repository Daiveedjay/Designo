// // // Import the About component's stylesheet
// // import "./About.scss";

// // // Import necessary components and data
// // import data from "../../data.json";
// // import Locations from "../../components/Locations";
// // import { gsap } from "gsap";
// // import { useRef, useEffect } from "react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // // Define the About component
// // export default function About() {
// //   gsap.registerPlugin(ScrollTrigger);

// //   const worldClassRef = useRef(null);

// //   useEffect(() => {
// //     console.log(worldClassRef.current);
// //     const animateSections = () => {
// //       gsap.from(worldClassRef.current, {
// //         x: "-100%",
// //         scrollTrigger: {
// //           trigger: ".world-class",
// //           start: "top 80%",
// //         },
// //       });
// //     };

// //     animateSections();
// //   }, []);

// //   // Extract about page data from the imported data file
// //   const about = data.aboutPage;
// //   const { aboutUs, worldClass, realDeal, locationData } = about;

// //   // Return the JSX to render the About component
// //   return (
// //     <main className="about-section">
// //       {/* About Us section */}
// //       <section className="about-us section-spacing">
// //         <div className="about-us-text__container">
// //           <h2 className="lead--text">{aboutUs.leadText}</h2>
// //           <p className="small-text">{aboutUs.description}</p>
// //         </div>
// //         <div className="about-us-image__container"></div>
// //       </section>
// //       {/* World Class section */}
// //       <section ref={worldClassRef} className="world-class section-spacing">
// //         <div className="world-class-image__container "></div>
// //         <div className="world-class-text__container">
// //           <h2 className="lead--text">{worldClass.leadText}</h2>
// //           <p className="small-text">{worldClass.description_1}</p>
// //           <p className="small-text">{worldClass.description_2}</p>
// //         </div>
// //       </section>
// //       {/* Locations section */}
// //       <section className="locations-section section-spacing">
// //         {locationData &&
// //           locationData.location.map((location, key) => (
// //             // Render Locations component for each location item
// //             <Locations location={location} key={key} />
// //           ))}
// //       </section>
// //       {/* Real Deal section */}
// //       <section className="real-deal section-spacing">
// //         <div className="read-deal-text__container">
// //           <h2 className="lead--text">{realDeal.leadText}</h2>
// //           <p className="small-text">{realDeal.description_1}</p>
// //           <p className="small-text">{realDeal.description_2}</p>
// //         </div>
// //         <div className="real-deal-image__container "></div>
// //       </section>
// //     </main>
// //   );
// // }

// // Import the About component's stylesheet
// import "./About.scss";

// // Import necessary components and data
// import data from "../../data.json";
// import Locations from "../../components/Locations";
// import { gsap } from "gsap";
// import { useRef, useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Define the About component
// export default function About() {
//   gsap.registerPlugin(ScrollTrigger);

//   const worldClassRef = useRef(null);

//   useEffect(() => {
//     console.log(worldClassRef.current);
//     const animateSections = () => {
//       gsap.from(worldClassRef.current, {
//         x: "-100%",
//         scrollTrigger: {
//           trigger: worldClassRef.current,
//           start: "top 80%",
//         },
//       });
//     };

//     animateSections();
//   }, []);

//   // Extract about page data from the imported data file
//   const about = data.aboutPage;
//   const { aboutUs, worldClass, realDeal, locationData } = about;

//   // Return the JSX to render the About component
//   return (
//     <main className="about-section">
//       {/* About Us section */}
//       <section className="about-us section-spacing">
//         <div className="about-us-text__container">
//           <h2 className="lead--text">{aboutUs.leadText}</h2>
//           <p className="small-text">{aboutUs.description}</p>
//         </div>
//         <div className="about-us-image__container"></div>
//       </section>
//       {/* World Class section */}
//       <section ref={worldClassRef} className="world-class section-spacing">
//         <div className="world-class-image__container "></div>
//         <div className="world-class-text__container">
//           <h2 className="lead--text">{worldClass.leadText}</h2>
//           <p className="small-text">{worldClass.description_1}</p>
//           <p className="small-text">{worldClass.description_2}</p>
//         </div>
//       </section>
//       {/* Locations section */}
//       <section className="locations-section section-spacing">
//         {locationData &&
//           locationData.location.map((location, key) => (
//             // Render Locations component for each location item
//             <Locations location={location} key={key} />
//           ))}
//       </section>
//       {/* Real Deal section */}
//       <section className="real-deal section-spacing">
//         <div className="read-deal-text__container">
//           <h2 className="lead--text">{realDeal.leadText}</h2>
//           <p className="small-text">{realDeal.description_1}</p>
//           <p className="small-text">{realDeal.description_2}</p>
//         </div>
//         <div className="real-deal-image__container "></div>
//       </section>
//     </main>
//   );
// }

// Import the About component's stylesheet
import "./About.scss";

// Import necessary components and data
import data from "../../data.json";
import Locations from "../../components/Locations";
import { gsap, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the About component
export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const worldClassRef = useRef(null);
  const aboutUsRef = useRef(null);
  const realDealRef = useRef(null);

  useEffect(() => {
    const animateSections = () => {
      gsap.fromTo(
        aboutUsRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          scrollTrigger: {
            trigger: aboutUsRef.current,
            start: "top 20%",
          },
        }
      );
      gsap.fromTo(
        worldClassRef.current,
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.5,
          scrollTrigger: {
            trigger: worldClassRef.current,
            start: "center 80%",
          },
        }
      );
      gsap.fromTo(
        realDealRef.current,
        { x: "100%", autoAlpha: 0 },
        {
          x: "0%",
          autoAlpha: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: realDealRef.current,
            start: "center 80%",
          },
        }
      );
    };

    animateSections();
  }, []);

  const locationRefs = useRef([]);

  useEffect(() => {
    if (locationRefs.current.length !== 0) {
      locationRefs.current.forEach((location) => {
        gsap.fromTo(
          location,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Power4.easeOut,
            duration: 0.6,
            scrollTrigger: {
              trigger: location,
              start: "center 80%",
            },
          }
        );
      });
    }
  }, []);

  // Extract about page data from the imported data file
  const about = data.aboutPage;
  const { aboutUs, worldClass, realDeal, locationData } = about;

  // Return the JSX to render the About component
  return (
    <main className="about-section">
      {/* About Us section */}
      <section ref={aboutUsRef} className="about-us section-spacing">
        <div className="about-us-text__container">
          <h2 className="lead--text">{aboutUs.leadText}</h2>
          <p className="small-text">{aboutUs.description}</p>
        </div>
        <div className="about-us-image__container"></div>
      </section>
      {/* World Class section */}
      <section ref={worldClassRef} className="world-class section-spacing">
        <div className="world-class-image__container "></div>
        <div className="world-class-text__container">
          <h2 className="lead--text">{worldClass.leadText}</h2>
          <p className="small-text">{worldClass.description_1}</p>
          <p className="small-text">{worldClass.description_2}</p>
        </div>
      </section>
      {/* Locations section */}
      <section className="locations-section section-spacing">
        {locationData &&
          locationData.location.map((location, index) => (
            // Render Locations component for each location item
            <Locations
              location={location}
              key={index}
              ref={(el) => (locationRefs.current[index] = el)}
            />
          ))}
      </section>
      {/* Real Deal section */}
      <section ref={realDealRef} className="real-deal section-spacing">
        <div className="read-deal-text__container">
          <h2 className="lead--text">{realDeal.leadText}</h2>
          <p className="small-text">{realDeal.description_1}</p>
          <p className="small-text">{realDeal.description_2}</p>
        </div>
        <div className="real-deal-image__container "></div>
      </section>
    </main>
  );
}
