import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Projects", "Blog"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Smooth scroll handler
  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

  
  // Scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="navbar">
        {/* Left */}
        <div className="navbar-left">
          <div className="navbar-logo">Smarlytix</div>
        </div>

        {/* Center */}
        <div className="navbar-center">
          <ul className="navbar-menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="navbar-item"
                onClick={() => handleNavClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-right">
          <button className="contact-btn-nav" onClick={handleContactClick}>
            Let's Connect
          </button>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => handleNavClick(item)}>
              {item}
            </li>
          ))}
          <li onClick={handleContactClick}>Let's Connect</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
