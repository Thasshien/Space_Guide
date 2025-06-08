import React from "react"
import { useNavigate } from "react-router-dom"
import "./Features.css"

const Features = () => {
  const navigate = useNavigate();

const screen = (cl, state) => {
  const el = document.querySelector(`.${cl}`);
  if (el) {
    el.classList.add(state);
  }
};

  return (
    <div className="Features">
        <h2>Explore</h2>
        <ul className="Features-list">
            <li onClick={() => {screen('Aitem','active'); navigate('/Aop');}} className = "Earth">Celestial Hub</li>
            <li onClick={() => {screen('Eitem','active'); navigate('/Exoplanet');}} className = "Exoplanet">Exoplanets</li>
            <li onClick={() => {screen('Fitem','active'); navigate('/Facts');}} className = "APOD">APOD</li>
        </ul>
    </div>
  )
}

export default Features