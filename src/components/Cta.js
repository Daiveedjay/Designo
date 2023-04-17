import React from "react";
import Button from "./Button";
import "./Cta.scss";

const Cta = React.forwardRef(({ buttonContent, link }, ref) => {
  return (
    <div ref={ref} className="cta-section">
      <div className="cta-label">
        <h2 className="medium-text">Let's talk about your project</h2>
        <p className="small-text">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="cta-button--container">
        <Button link={link} buttonContent={buttonContent.buttonText} />
      </div>
    </div>
  );
});

export default Cta;
