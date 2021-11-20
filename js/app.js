// DOM manipulation
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

// updates the UI
const updateUi = data => {
    
    console.log(data);
    /*  const cityDetails = data.cityDetails;
        const weather = data.weather;
     */
    // Destructure
    const {cityDetails, weather} = data

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;

    // update day & night icons
    const iconSrc = `icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.IsDayTime) {
        timeSrc = 'icons/day.svg';
    } else {
        timeSrc= 'icons/night.svg';
    };
    time.setAttribute('src', timeSrc);

    // remove d-none class if present Bootstrap card
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    };

};

// updateCity is asynchronous because it has getCity function which is async and will take some time to execute
const updateCity = async (city) => {

    const cityDetails = await getCity(city);            // getCity first finishes before assigning its value to cityDetails
    const weather = await getWeather(cityDetails.Key);

    return {cityDetails, weather};           // object shorthand notation

    /*  return {
        cityDetails : cityDetails,
        weather : weather
    }; */
    // get city detail to print on console.log(city)


};

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();        // trim() removes space
    cityForm.reset();                               // reset() clears the form

    updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err));
});