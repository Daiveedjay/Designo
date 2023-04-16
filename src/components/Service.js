import { forwardRef } from "react";

const Service = forwardRef(({ project }, ref) => {
  return (
    <div ref={ref} className="portfolio-item">
      <div className="project-img__container">
        <img className="project-img" src={project?.imgSrc} alt="project-img" />
      </div>
      <div className="portfolio-item__text">
        <h2>{project.projectHeader}</h2>
        <p className="services-sub--text">{project.projectDescription}</p>
      </div>
    </div>
  );
});

export default Service;
