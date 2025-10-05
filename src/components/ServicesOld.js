import React from "react";
import "../styles/Services.css";
import analyticsImg from "../assets/analyticsImg.png"; // replace with your images
import dataMgmtImg from "../assets/dataMgmtImg.png";
import etlImg from "../assets/etl.png";
import cloudImg from "../assets/cloudImg.png";
import AIsolutions from "../assets/AIsolutions.png";

const services = [
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with dashboards, reporting, and predictive analytics.",
    img: analyticsImg,
    points: [
    ],
  },
  {
    title: "Data Management",
    desc: "Ensure accuracy, compliance, and consistency with robust data governance and quality frameworks.",
    img: dataMgmtImg,
    points: [
    ],
  },
  {
    title: "ETL & Data Pipelines",
    desc: "Seamlessly integrate, automate, and scale data flows with optimized ETL pipelines.",
    img: etlImg,
    points: [
    ],
  },
  {
    title: "AI Solutions",
    desc: "Unlock innovation with AI-driven automation, predictive models, and machine learning insights.",
    img: AIsolutions,
    points: [
    ],
  },
  {
    title: "Cloud Data Solutions",
    desc: "Leverage AWS, Azure, and GCP for secure, scalable, and cost-efficient data solutions.",
    img: cloudImg,
    points: [
    ],
  },
];

function ServicesOld() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className={`service-card ${index % 2 === 0 ? "normal" : "reverse"}`}
            key={index}
          >
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
                <ul>
                    {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className="service-image">
              <img src={service.img} alt={service.title} />
              <button className="btn contact-btn-services">Contact Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesOld;
