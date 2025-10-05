import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <h2 className="contact-title">Let's keep in Touch...</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> hello@smarlytix.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> Dallas, TX 75202</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <p className="contact-intro">
            "Ready to turn your data into a competitive advantage? Contact us today!"
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">
              Schedule a Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
