import React from "react";
import "./Weather.css";


export default function Weather(props) {
  const {
    name,
    country,
    description,
    icon,
    temperature,
    pressure_mb,
    uv,
    humidity,
    wind,
  } = props.weatherData.data;

  const date = new Date(),
  showDate = (date.getMonth() + 1) + ' / ' + date.getDate() + ' / ' + date.getFullYear();

  return (
    <main>
      <div className="title">
        <img src={icon} alt="icon" />
        <div>
          <h3>{showDate}</h3>
          <span>
            {name}, {country}
          </span>
          <h1>{temperature}º C</h1>
          <h2>{description}</h2>
        </div>
      </div>
      <div className="info">
          <div className="each-info">
              <h2>{uv}</h2>
              <span>UV</span>
          </div>
          <div className="each-info">
              <h2>{pressure_mb} <span>mb</span></h2>
              <span>Pressure</span>
          </div>
          <div className="each-info">
              <h2>{humidity} <span>%</span></h2>
              <span>Humidity</span>
          </div>
          <div className="each-info">
              <h2>{wind} <span>km/h</span></h2>
              <span>Wind</span>
          </div>
      </div>
    </main>
  );
}
