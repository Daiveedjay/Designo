// Import the Location component's stylesheet
import "./Location.scss";

// Import necessary components and data
import EmbeddedMap from "../../components/EmbeddedMap";
import data from "../../data.json";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the Location component
export default function Location() {
  // Extract location data from the imported data file
  const locationData = data.aboutPage.locationData.location;

  // Define a ref for each container element
  const locationContainers = useRef([]);

  // Use useEffect to set up the gsap animation with ScrollTrigger
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Iterate over each location container and set up a gsap animation for each
    locationContainers.current.forEach((container, index) => {
      const [textArea, mapArea] = container.children;

      gsap.fromTo(
        [textArea, mapArea],
        {
          xPercent: index % 2 === 0 ? 100 : -100,
        },
        {
          xPercent: 0,
          ease: "power1.out",
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );
    });
  }, []);
  // Return the JSX to render the Location component
  return (
    <section className="location-section">
      {locationData &&
        locationData.map((loc, index) => (
          // Render location details for each location item
          <div
            key={loc.name}
            className="location-details__container "
            ref={(el) => (locationContainers.current[index] = el)}
          >
            {/* Location text area */}
            <div className="location-text-area">
              <h2 className="location-name medium-text">{loc.name}</h2>

              {/* Location address and contact details */}
              <div className="location-details ">
                <ul className="location-list">
                  {loc.address.map((locItem, index) => (
                    <li className="location-list-item " key={index}>
                      {locItem.addressLoc}
                    </li>
                  ))}
                </ul>
                <ul className="location-list">
                  {loc.contact.map((locItem, index) => (
                    <li className="location-list-item " key={index}>
                      {locItem.contactInfo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Location map area */}
            <div className="location-map-area">
              {/* Render EmbeddedMap component */}
              <EmbeddedMap
                url={loc.mapSrc}
                imgSrc="../../assets/locations/desktop/image-map-australia.png"
              />
            </div>
          </div>
        ))}
    </section>
  );
}
