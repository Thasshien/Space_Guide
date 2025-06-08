import React from "react"
import './Footer.css'
import { assets } from "../../assets/assets"

const Footer = () => {
    return (
        <div className="Footer">
           <p>© 2025 by Thasshien| <a href="mailto:thasshien.gr2024@vitstudent.ac.in">thasshien.gr2024@vitstudent.ac.in</a></p>
            <ul className="Socials">
                <li>
                    <a href="https://www.instagram.com/thasshien_?igsh=ZjVta2lkeHJxdXR3" target="_blank">
                        <img src = {assets.Instagram_Logo} alt="Instagram logo" width="24" height="24" loading="lazy"/>
                    </a>  
                    </li>
                    <li>
                    <a href="https://github.com/Thasshien" target="_blank" alt = " ">
                        <img src = {assets.GitHub_Logo} alt="GitHub logo" width="24" height="24" loading="lazy"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer