import style from "./index.module.css";

const WeatherInfo = (props: any) => {
  const { weatherDetails } = props;

  return (
    <div className={style.weather}>
      <div className={style.weatherInfo}>
        <h1>{(weatherDetails?.main?.temp - 273.15).toFixed(1)}&deg;c</h1>
        <h3>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails?.weather?.[0]?.icon}@2x.png`}
            alt=""
          />
          {weatherDetails?.weather?.[0]?.main}
        </h3>
        <div className={style.extraInfo}>
          <p>
            Feels Like <br />
            {(weatherDetails?.main?.feels_like - 273.15).toFixed(1)}&deg;c
          </p>
          <p>
            Humdity <br />
            {weatherDetails?.main?.humidity + "%"}
          </p>
          <p>
            Wind <br />
            {weatherDetails?.wind?.speed + " m/s"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
