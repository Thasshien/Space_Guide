import React, { useEffect, useState } from 'react';
import './Exoplanet.css';
import Planet_card from '../ExoPlanet_cards/ExoPlanet_card';
import Slider from '../../Components/Slider/Slider';

const Exoplanet = () => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('./Exo.json'); // Make sure Exo.json is in the public folder or accessible from this path
        const data = await response.json();
        const limitedData = data.slice(0, 1000);
        setPlanets(limitedData);
        setFilteredPlanets(limitedData);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
      setLoading(false);
    };

    fetchPlanets();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = planets.filter((planet) =>
      planet.pl_name?.toLowerCase().includes(value)
    );
    setFilteredPlanets(filtered);
  };

  if (loading) return <p className='loading'>Loading exoplanets...</p>;

  return (
    <div className="Exoplanetdisplay">
      <h1>Exoplanet Explorer</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search planet by name..."
        value={search}
        onChange={handleSearch}
      />

      <div className='Objects'>
        {filteredPlanets.map((planet, index) => (
          <Planet_card
            key={index}
            pname={planet.pl_name}
            hostname={planet.hostname}
            disc={planet.disc_year}
            radius={planet.pl_rade || '-'}
            mass={planet.pl_bmasse || '-'}
            period={planet.pl_orbper || '-'}
          />
        ))}
      </div>
    </div>
  );
};

export default Exoplanet;
