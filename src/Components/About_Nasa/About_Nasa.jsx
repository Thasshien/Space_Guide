import React from "react";
import "./About_Nasa.css";

const AboutNASA = () => {
  return (
    <div className="about-nasa">
      <h2>🔗 Powered by NASA APIs</h2>
      <p>
        This project uses NASA’s free and public APIs to bring space closer to you. All images and data are fetched in real-time from:
      </p>
      <p className="note">
        Want to explore more? Visit <a href="https://api.nasa.gov" target="_blank" rel="noreferrer">api.nasa.gov</a>
      </p>
    </div>
  );
};

export default AboutNASA;
