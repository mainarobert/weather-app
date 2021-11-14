// responsible for interacting with weather api 

const key = ' zsjvuKvkoPAV6FqCFxPBLSyVcghkq7xp';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json()          // json method returns a promise
    // console.log(data[0]);
    return data[0];

};

getCity('nairobi')
.then(data => console.log(data))
.catch(err => console.log('search again'));