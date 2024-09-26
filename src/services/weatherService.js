const API_KEY = "8140a15f4fe3480ea9e161250242609";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

// api call! Definition of the function, we use it inside a component!
// city will be passed in based on the city's weather we want to find
async function show(city) {
    try {
        const queryString = `&q=${city}`;
        // GET request to BASE_URL + queryString (the city we want to search for)
        const res = await fetch(BASE_URL + queryString);
        // the response is a string of json
        // we need to parse it (change the string into a JS object!)
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error, "error in show api call");
    };
};

// export the functions
export { show };