import React, { useEffect } from "react";
import "../styles/Background.css";

export default function Background() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const overlay = document.querySelector(".overlay");
      if (overlay) {
        overlay.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background-container">
      <div className="grid-bg"></div>
      <div className="overlay"></div>
    </div>
  );
}
