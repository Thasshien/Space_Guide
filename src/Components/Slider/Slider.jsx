import React, { useState } from 'react';
import './Slider.css'; // optional for custom styling

const Slider = ({ max, onSelect }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    const val = Number(e.target.value);
    setValue(val);
    onSelect(val); // notify parent
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="1"
        max={max}
        value={value}
        onChange={handleChange}
      />
      <p>Selected Index: {value}</p>
    </div>
  );
};

export default Slider;
