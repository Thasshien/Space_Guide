import React, { useState, useEffect } from 'react';
import './Deep_space.css';

const categories = [
  { name: 'Nebulae', query: 'nebula' },
  { name: 'Galaxies', query: 'galaxy' },
  { name: 'Black Holes', query: 'black hole' },
  { name: 'Supernovae', query: 'supernova' },
  { name: 'Hubble’s Best', query: 'hubble' },
];

const Deepspace = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image`
      );
      const data = await response.json();
      const items = data.collection.items.slice(0, 30);
      setImages(items);
    } catch (error) {
      console.error("Failed to fetch images:", error);
      setImages([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages(selectedCategory.query);
  }, [selectedCategory]);

  return (
    <div className="deep-space">
      <h1>Deep Space Explorer</h1>

      <div className="category-buttons">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={selectedCategory.name === cat.name ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            <h5>{cat.name}</h5>
          </button>
        ))}
      </div>

      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="image-grid">
          {images.map((item, idx) => {
            const data = item.data[0];
            const link = item.links?.[0]?.href;
            return (
              <div className="image-card" key={idx}>
                <img src={link} alt={data.title} />
                <h4>{data.title}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Deepspace;
