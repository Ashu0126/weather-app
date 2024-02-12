import "./App.css";
import Navbar from "./components/Navbar";
import WeatherWindow from "./components/WeatherWindow";

const App = () => {
  return (
    <div className="weather-app">
      <Navbar />
      <WeatherWindow />
      <p>Copyright &copy; | All rights are reserved</p>
    </div>
  );
};

export default App;
