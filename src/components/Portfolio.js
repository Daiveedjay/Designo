import "./Portfolio.scss"; // Importing styles for Portfolio component
import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg"; // Importing the right arrow icon
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom library
import { forwardRef } from "react";

const Portfolio = forwardRef(({ portfolio }, ref) => {
  return (
    // Linking to the specified portfolio route
    <Link to={portfolio.route} className="portfolio" ref={ref}>
      <div className="portfolio-image__container">
        <img className="portfolio-image" src={portfolio?.imageSrc} alt="" />
      </div>
      <div className="portfolio-content">
        {/* Displaying the portfolio lead text */}
        <h2 className="medium-text">{portfolio.leadText}</h2>
        <h2 className="smaller-text">
          {/* Displaying the portfolio subtext */}
          <p>{portfolio.subText}</p>
          <span>
            {/* Displaying the right arrow icon */}
            <img src={RightArrow} alt="" />
          </span>
        </h2>
      </div>
    </Link>
  );
});

export default Portfolio;
