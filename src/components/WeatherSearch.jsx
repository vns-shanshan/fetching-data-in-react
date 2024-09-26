import { useState } from "react";

const WeatherSearch = ({ fetchData }) => {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // This stops the form/browser from refreshing the page because a GET request is being made by the browser
    console.log("handleSubmit is being called!");

    // We'll call our fetch function here
    // city is referencing the state
    fetchData(city);

    // reset the input
    setCity("");
  }

  return (
    <section>
      <h2>Search</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search Weather</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
