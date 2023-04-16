import "./Locations.scss";
import Button from "../components/Button";
import { forwardRef } from "react";

const Locations = forwardRef(({ location }, ref) => {
  return (
    <div ref={ref} className="location-container">
      <div className="location-item">
        {/* // Render the location image inside a container */}
        <div className="location-image__container">
          <img className="location-image" src={location.src} alt="" />
        </div>
        {/* // Render the location name as a heading */}
        <h2 className="small-text">{location.name}</h2>
        {/* // Render a Button component with a link to the location's route and its
        buttonText as content */}
        <Button link={location.route} buttonContent={location.buttonText} />
      </div>
    </div>
  );
});

export default Locations;
