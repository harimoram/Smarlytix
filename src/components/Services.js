import React from "react";
import '../styles/Services.css';
import { BarChart2, Database, GitPullRequest, Cpu, Cloud } from "lucide-react";

const services = [
  {
    title: "Data Analytics",
    desc: "Unlock meaningful insights from your data through dashboards and predictive modeling.",
    icon: <BarChart2 size={24} />,
  },
  {
    title: "Data Management",
    desc: "Ensure your data is accurate, consistent, and compliant for smarter decisions.",
    icon: <Database size={24} />,
  },
  {
    title: "ETL & Data Pipelines",
    desc: "Automate data workflows integrating multiple sources efficiently and reliably.",
    icon: <GitPullRequest size={24} />,
  },
  {
    title: "AI Solutions",
    desc: "Bring AI & ML solutions to drive predictive insights and intelligent automation.",
    icon: <Cpu size={24} />,
  },
  {
    title: "Cloud Data Solutions",
    desc: "Leverage cloud platforms like AWS, Azure, GCP for secure, scalable storage.",
    icon: <Cloud size={24} />,
  },
];

function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="services">
      <h2>What We Offer</h2>
      <p>Smarlytix empowers businesses to harness their data and transform it into actionable intelligence.</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="contact-btn-services" onClick={scrollToContact}>Contact Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
