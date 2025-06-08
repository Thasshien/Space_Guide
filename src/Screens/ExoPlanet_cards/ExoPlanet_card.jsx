import React from "react"
import './ExoPlanet_card.css'

const ExoPlanet_card = ({pname,hostname, disc, radius, mass, period}) => {

    return(
        <div className="Exoplanets">
            <p>Name: {pname}</p>
            <p>Host Star: {hostname}</p>
            <p>Discovery Year: {disc}</p>
            <p>Radius (Earth): {radius}</p>
            <p>Mass (Earth): {mass}</p>
            <p>Orbital Period(days): {period}</p>
        </div>
    )
}

export default ExoPlanet_card