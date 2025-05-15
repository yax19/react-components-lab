import React from 'react';
import './WeatherForecast.css';

const WeatherForecast = ({ Day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{Day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
};

export default WeatherForecast;
