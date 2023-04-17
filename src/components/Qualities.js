import "./Qualities.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Qualities = forwardRef(({ quality }, ref) => {
  return (
    <div className="quality-container" ref={ref}>
      <div className="quality-image-container">
        <img className="quality-image" src={quality.image} alt="" />
      </div>
      <div>
        <h2 className="small-text">{quality.header}</h2>
        <p className="small-text">{quality.description}</p>
      </div>
    </div>
  );
});

export default Qualities;
