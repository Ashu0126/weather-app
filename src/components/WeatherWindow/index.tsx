import { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo";
import style from "./index.module.css";
import location from "./../../location-marker.svg";

const WeatherWindow = () => {
  const [city, setCity] = useState("Delhi");
  const [weatherDetails, setWeatherDetails] = useState<any>({});

  const fetchWeather = async (city: any) => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=08ce7282cd0064b893a956da861a56e5"
    );

    const data = await res.json();
    setWeatherDetails(data);
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCity: any = formData.get("cityInput");
    setCity(newCity);
  };

  return (
    <div className="WeatherWindow">
      <div className={style.weatherHeader}>
        <div className={style.cityName}>
          <img src={location} alt="" />
          <h2>
            {weatherDetails?.cod !== "404"
              ? `${weatherDetails?.name}, ${weatherDetails?.sys?.country}`
              : "City Unavailable"}
          </h2>
        </div>
        <form className={style.searchBar} onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter City Name" name="cityInput" />
          <button>
            <img
              src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png"
              alt=""
            />
          </button>
        </form>
      </div>
      <WeatherInfo weatherDetails={weatherDetails} />
    </div>
  );
};

export default WeatherWindow;
