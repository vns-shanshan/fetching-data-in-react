const WeatherDetails = ({ cityWeather }) => {
  const { location, currentTemp, currentCondition, icon } = cityWeather;
  const weatherIcon = `https:${icon}`;

  return (
    <section>
      <h2>Weather Details</h2>

      <p>Location: {location}</p>
      <p>Temperature: {currentTemp}</p>
      <p>Condition: {currentCondition}</p>
      <img src={weatherIcon} alt="weather icon" />
    </section>
  );
};

export default WeatherDetails;
