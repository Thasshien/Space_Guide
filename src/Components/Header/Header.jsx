import React from "react"
import './Header.css'

const Header = ({onExploreClick}) => {
    return (
        <div className="Header">
            <h1>Welcome to Space Guide</h1>
            <p>
Explore the universe with real NASA data — in one click. From breathtaking images captured by the Hubble and James Webb Space Telescopes to real-time views of our Earth from above, this app lets you witness space like never before. Choose a date and see what NASA saw that day. Zoom into Earth, admire stunning deep-space photos, explore fascinating exoplanets, and enjoy the Astronomy Picture of the Day — all updated daily and fetched live from NASA’s official APIs. Built with love for space nerds, science lovers, and curious minds.</p>
            <button onClick = {onExploreClick} className="Header-button">Explore Now</button>
        </div>
    )
}

export default Header