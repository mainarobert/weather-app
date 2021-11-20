// responsible for interacting with weather api 

const key = 'mYdTXerDCIXgPYtS6AK0oMSS7ZvYgop3';

// get location information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json()          // json method returns a promise
    // console.log(data[0]);
    return data[0];

};


// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch (base+query);
    const data = await response.json();

    return data[0]
};


/* getCity('nairobi')
.then(data => {
    return getWeather(data.Key)             
}).then(data => console.log(data))
.catch(err => console.log(err));
 */