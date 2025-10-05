import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Title */}
        <h2>Who We Are</h2>

        {/* Content */}
        <p className="about-text">
            <span className="highlight-large">Smarlytix</span> is a <span className="highlight">data analytics and data management consulting firm,</span> specializing in transforming raw data into actionable insights. We provide expertise in <span className="highlight-large">Business Intelligence, ETL pipelines, AI-driven analytics,</span> and <span className="highlight-large">Cloud data solutions,</span> enabling organizations to optimize operations and make informed decisions.
        </p>
        <p className="about-text">
            Our team focuses on delivering <span className="highlight">tailored solutions for</span><span className="highlight-large"> Data Governance, Predictive Modeling,</span> and <span className="highlight-large">Advanced Analytics.</span> With Smarlytix, businesses gain <span className="highlight">clean, reliable, and scalable data workflows,</span> empowering smarter strategies and measurable growth across industries.
        </p>
      </div>
    </section>
  );
}

export default About;
