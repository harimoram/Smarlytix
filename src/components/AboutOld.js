import React from "react";
import "../styles/About.css";
import { FaSearch, FaChartLine, FaCheckCircle } from "react-icons/fa";

function AboutOld() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Title */}
        <h2>About Smarlytix</h2>

        {/* Content */}
        <p className="about-text">
        <span className="highlight-large">“</span>At <span className="highlight-large">Smarlytix</span>, we turn your data into <span className="highlight">clear, actionable insights</span>. 
        As a trusted data analytics and data management consulting firm, we help businesses 
        <strong> unlock growth</strong>, streamline operations, and make smarter decisions.

        From <span className="highlight-large">Data Governance</span> and <span className="highlight-large"> BI dashboards to ETL pipelines </span>
        and cloud analytics, our solutions are custom-built to deliver measurable results.

        Let’s transform your data into your <span className="highlight-large">'Biggest Business Advantage'</span>.
        </p>
        <p className="about-text"><span className="highlight-large">"Our approach</span> is simple, yet powerful – guiding you from insight to action in three clear steps:</p>


        {/* Our Approach */}
        <div className="approach">
          <div className="step">
            <div className="step-icon">
              <FaSearch size={50} color="#2ECC71" />
            </div>
            <h3>Discover</h3>
            <p>Understand your business needs and data challenges.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <FaChartLine size={50} color="#0A2342" />
            </div>
            <h3>Analyze</h3>
            <p>Use advanced analytics and visualization tools to uncover insights.</p>
          </div>

          <div className="step">
            <div className="step-icon">
              <FaCheckCircle size={50} color="#2ECC71" />
            </div>
            <h3>Deliver</h3>
            <p>Implement actionable solutions that drive results and growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOld;
