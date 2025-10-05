import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero-image.jpg"; // replace with your actual image

function Hero() {

// Scroll to Contact section with fast start and slow end
const scrollToContact = () => {
  const target = document.getElementById("contact");
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 3000; // total scroll time in ms
  let startTime = null;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  // Easing function: fast start, slow end
  const easeOutCubic = (t, b, c, d) => {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  requestAnimationFrame(animateScroll);
};

/*
  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
*/

  // Scroll to About section with fast start and slow end
const scrollToAbout = () => {
  const target = document.getElementById("about");
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000; // total scroll time in ms
  let startTime = null;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  // Easing function: fast start, slow end
  const easeOutCubic = (t, b, c, d) => {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  requestAnimationFrame(animateScroll);
};


  return (
    <section id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Turning Complex Data into Strategic Brilliance</h1>
          <p>
            "Smarlytix empowers Small and Midsize Business (SMBs) with actionable insights, intelligent analytics, and data-driven strategies to drive growth, efficiency, and smarter decisions."
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={scrollToContact}>Get a Free Consultation</button>
            <button className="btn secondary" onClick={scrollToAbout}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
