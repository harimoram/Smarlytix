import React from "react";
import "../styles/Projects.css";

// Import images
import retailImg from "../assets/retailImg.png";
import financeImg from "../assets/financeImg.png";
import cloudImg from "../assets/hero-image.jpg";

const projects = [
  {
    title: "Retail Analytics Dashboard",
    image: retailImg,
  },
  {
    title: "Financial Data Governance",
    image: financeImg,
  },
  {
    title: "Cloud Data Migration",
    image: cloudImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-title">Our Impact</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p className="know-more">Know More →</p>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-btn">See More Projects</button>
      </div>
    </section>
  );
};

export default Projects;
