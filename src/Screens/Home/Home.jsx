import React from "react"
import { useRef } from 'react';
import Header from "../../Components/Header/Header"
import Features from "../../Components/Features/Features"
import AboutNASA from '../../Components/About_Nasa/About_Nasa'

import "./Home.css"

const Home = () => {

  const exploreRef = useRef(null);

  const handleExploreScroll = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <Header onExploreClick = {handleExploreScroll}/>
      <div ref = {exploreRef}>
        <Features/>
      </div>
      <AboutNASA/>
    </div>
  )
}

export default Home