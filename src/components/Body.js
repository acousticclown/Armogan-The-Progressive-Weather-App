import React, { useState } from "react";
import { fetchWeather } from "../api/fetchWeather";

const Body = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter" || e.onClick === true) {
      const data = await fetchWeather(query);
      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };

  let d = new Date();

  return (
    <>
      <nav className="navbar">
        <h1 className="armogan-main">Armogan</h1>
        <div className="search-div">
          <input
            type="text"
            className="search"
            placeholder="Search for a city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          {/* <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.7347 31.4465H33.4763L32.6758 30.6747C35.4774 27.4157 37.1641 23.1847 37.1641 18.582C37.1641 8.31904 28.8451 0 18.582 0C8.31904 0 0 8.31904 0 18.582C0 28.8451 8.31904 37.1641 18.582 37.1641C23.1847 37.1641 27.4157 35.4774 30.6747 32.6758L31.4465 33.4763V35.7347L45.7404 50L50 45.7404L35.7347 31.4465V31.4465ZM18.582 31.4465C11.4637 31.4465 5.71755 25.7004 5.71755 18.582C5.71755 11.4637 11.4637 5.71755 18.582 5.71755C25.7004 5.71755 31.4465 11.4637 31.4465 18.582C31.4465 25.7004 25.7004 31.4465 18.582 31.4465Z"
              fill="white"
            />
          </svg> */}
        </div>
      </nav>

      <div className="main-div">
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <h3>{`${d.getDate()} ${d.getMonth() + 1} ${d.getFullYear()}`}</h3>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <h3>{weather.weather[0].description}</h3>
            </div>
          </div>
        )}
      </div>

      <footer>
        <h3>All Rights Reserved &copy; Shivansh Pratap</h3>
      </footer>
    </>
  );
};

export default Body;
