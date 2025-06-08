import React, { useEffect, useState } from 'react';
import './Our_planet.css';

const Ourplanet = () => {
  const [images, setImages] = useState([]);
  const [date, setDate] = useState('2024-05-01');
  const [loading, setLoading] = useState(false);

  const apiKey = 'fMchaRcyIZYzrwbLgVgwiYBf4qE9LDvPgxs3cDRz';

  const fetchEarthImages = async (selectedDate) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const baseUrl = 'https://epic.gsfc.nasa.gov/archive/natural';

      const formattedImages = data.map((item) => {
        const dateParts = selectedDate.split('-');
        const imageUrl = `${baseUrl}/${dateParts[0]}/${dateParts[1]}/${dateParts[2]}/png/${item.image}.png`;
        return { url: imageUrl, caption: item.caption };
      });

      setImages(formattedImages);
    } catch (error) {
      console.error('Error fetching Earth images:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEarthImages(date);
  }, [date]);

  return (
    <div className="earth-view">
      <h1>Earth's Daily View</h1>

      <label>Select Date: </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min="2015-06-13"
        max={new Date().toISOString().split('T')[0]}
      />

      {loading ? (
        <p className='loading'>Loading images...</p>
      ) : (
        <div className="earth-images">
          {images.length > 0 ? (
            images.map((img, index) => (
              <div key={index} className="earth-image-card">
                <img src={img.url} alt="Earth" />
                <p>{img.caption}</p>
              </div>
            ))
          ) : (
            <p>No images available for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Ourplanet;

