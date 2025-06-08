import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Screens/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Astronomy_pic from './Screens/Astronomy_pics/Astronomy_pics'
import Space_facts from './Screens/space_facts/Space_facts'
import Favourites from './Screens/Favourites/Favourites'
import Footer from "./Components/Footer/Footer"
import Exoplanet from './Screens/Exoplanet/Exoplanet' 
import EarthView from './Screens/Our_Planet/Our_planet';
import DeepSpace from './Screens/Deep_space/Deep_Space';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/Aop' element = {<Astronomy_pic/>}></Route>
          <Route path = '/Facts' element = {<Space_facts/>}></Route>
          <Route path = '/Favourites' element = {<Favourites/>}></Route>
          <Route path= '/Exoplanet' element = {<Exoplanet/>}></Route> 
          <Route path= '/space' element = {<DeepSpace/>}></Route>
          <Route path= '/planet' element = {<EarthView/>}></Route>     
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
