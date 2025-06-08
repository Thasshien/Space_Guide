import React from "react"
import { useEffect, useState } from "react";
import "./Space_facts.css";

const Space_facts = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=fMchaRcyIZYzrwbLgVgwiYBf4qE9LDvPgxs3cDRz")
      .then((res) => res.json())
      .then((data) => setApodData(data))
      .catch((err) => console.error("Failed to fetch APOD:", err));
  }, []);

  return (
    <div className="apod-page">
      <h1>Astronomy Picture of the Day (AOPD)</h1>

      {apodData ? (
        <div className="apod-content">
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} className="apod-img" />
          <p className="apod-date">Date: {apodData.date}</p>
          <p className="apod-desc">{apodData.explanation}</p>
        </div>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  )
}

export default Space_facts;