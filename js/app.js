// DOM manipulation
const cityForm = document.querySelector('form');

// updateCity is asynchronous because it has getCity function which is async and will take some time to execute
const updateCity = async (city) => {

    const cityDets = await getCity(city);            // getCity first finishes before assigning its value to cityDetails
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails : cityDets,
        weather : weather
    };

    // get city detail to print on console.log(city)
};

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();        // trim() removes space
    cityForm.reset();                               // reset() clears the form

    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});