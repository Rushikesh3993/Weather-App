function getWeather() {
    //here we add the api key
    const apikey = '52b026d44bd089443334fe164b56d0f6';
    //here we use value to fetch the data
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please Enter a City');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    fetch(currentWeatherUrl)   // makes a request to the API (URL string)
    .then(response => response.json())   // converts response into JSON
    .then(data => {
        displayWeather(data);   // passes the JSON data to your custom function
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error); 
        alert('Error fetching current weather data. Please try again.');
    });

}