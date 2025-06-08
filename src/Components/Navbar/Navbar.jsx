import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import './Navbar.css';
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="Navbar">
      <img src={assets.Icon} onClick={() => navigate('/')} className="Icon" alt="Website logo" />

      <ul className="Navbar-menu">
        <li onClick={() => {setMenu('Home'); navigate('/');}} className= {`hitem ${menu === 'Home' ? 'active' : ''}`}>Home</li>
        <li onClick={() => {setMenu('Astronomy_Pics'); navigate('/Aop');}} className={`Aitems ${menu === 'Astronomy_Pics' ? 'active' : ''}`}>Celestial Hub</li>
        <li onClick={() => {setMenu('Exoplanet'); navigate('/Exoplanet');}} className= {`Eitems ${menu === 'Exoplanet' ? 'active' : ''}`}>Exoplanet </li>
        <li onClick={() => {setMenu('Space_facts'); navigate('/Facts');}} className= {`Sitems ${menu === 'Space_facts' ? 'active' : ''}`}>Space Facts</li>
      </ul>

      <div className="Navbar-right">
        <img src={assets.Favourites_Icon} className="Favourites_icon" alt="Favourites icon" />
        <button className="Toggle_themes" onClick={() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
