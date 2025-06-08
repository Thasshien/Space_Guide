import React from "react"
import './Astronomy_pics.css'
import { useNavigate } from "react-router-dom"

const Astronomy_pics = () => {

  const navigate = useNavigate()

  return (
    <div className="Astronomy_pics">
      <h1>Celestial Hub</h1>
      <ul className="Astro_menu">
        <li onClick={() => {navigate('/planet');}} className= {'Planet'}>Our Planet</li>
        <li onClick={() => {navigate('/space');}} className= {'Space'}>Deep Space</li>
      </ul>
    </div>
  )
}

export default Astronomy_pics 