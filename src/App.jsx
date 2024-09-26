import { useState } from "react";
import { useEffect } from "react";

// import our service
// all the functions in weatherService being exported will be methods on the weatherService object
import * as weatherService from "./services/weatherService";

import WeatherSearch from "./components/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails";

// city is referencing what we pass into fetchData when it is called in WeatherSearch
const App = () => {
  const [cityWeather, setCityWeather] = useState({});
  // location
  // current temp
  // current weather condition

  useEffect(() => {
    console.log("useEffect is running");

    const fetchDefaultData = async () => {
      const data = await weatherService.show("Irvine");
      const newWeatherState = {
        location: data.location.name,
        currentTemp: data.current.temp_f,
        currentCondition: data.current.condition.text,
        icon: data.current.condition.icon,
      };
      setCityWeather(newWeatherState);
    };

    // call the fetch function when the page loads:
    fetchDefaultData();
  }, []);
  // empty arr says run this function once when the component mounts the dom! (you'll see two logs in development because react strict mode is on, check index.js)

  async function fetchData(city) {
    // city is referencing the argument
    const data = await weatherService.show(city);
    // if we want to do anything with data we must store it
    console.log("Data: ", data);

    setCityWeather({
      location: data.location.name,
      currentTemp: data.current.temp_f,
      currentCondition: data.current.condition.text,
      icon: data.current.condition.icon,
    });
  }

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails cityWeather={cityWeather} />
    </main>
  );
};

export default App;
