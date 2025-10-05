import React from "react";
import "../styles/Blogs.css";

import retailImg from "../assets/hero-image.jpg";
import financeImg from "../assets/hero-image.jpg";
import cloudImg from "../assets/hero-image.jpg";

// Blog articles
const articles = [
  {
    title: "5 Ways to Improve Your Data Quality Today",
    image: retailImg,
  },
  {
    title: "Predictive Analytics: The Future of Business Decisions",
    image: financeImg,
  },
  {
    title: "Cloud Data Migration Best Practices",
    image: cloudImg,
  },
];

const Blogs = () => {
  return (
    <section id="blog" className="blog-section">
      <h2 className="blogs-section-title">Insights & Updates</h2>
      <div className="blog-grid">
        {articles.map((article, index) => (
          <div className="blog-card" key={index}>
            <div className="image-container">
              <img src={article.image} alt={article.title} />
            </div>
            <h3>{article.title}</h3>
            <p className="read-more">Read More →</p>
          </div>
        ))}
      </div>
      <div className="cta-container">
        <button className="cta-btn">Read More Insights</button>
      </div>

      {/* Centered horizontal line */}
      <div className="section-line"></div>
    </section>
  );
};

export default Blogs;
