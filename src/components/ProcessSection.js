import React from "react";
import { Search, BarChart2, Package } from "lucide-react";
import "../styles/ProcessSection.css";

const steps = [
  {
    title: "1. Discover",
    desc: "We analyze your business and data landscape to uncover insights and identify opportunities.",
    icon: <Search size={32} color="#0A2342" />
  },
  {
    title: "2. Analyze",
    desc: "We transform complex datasets into actionable insights using analytics and BI tools.",
    icon: <BarChart2 size={32} color="#0A2342" />
  },
  {
    title: "3. Deliver",
    desc: "We implement scalable and efficient data solutions that drive measurable results.",
    icon: <Package size={32} color="#0A2342" />
  }
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-intro">
        <h2>Our Approach is Simple</h2>
        <p>Guiding you from insight to action in three clear steps</p>
      </div>

      <div className="process-cards">
        {steps.map((step, i) => (
          <div key={i} className="process-card">
            <div className="icon-wrapper">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
