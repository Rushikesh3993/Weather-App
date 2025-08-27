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

    fetch(forecastUrl)   // Step 1: Send request to the API URL
    .then(response => response.json())   // Step 2: Convert response into JSON (JavaScript Object)
    .then(data => {
        // Step 3: Data is ready to use
        displayHourlyForecast(data.list);   // 'list' contains hourly forecast details, data.list is simply the forecast data array.
    })
    .catch(error => {
        // Step 4: Handle any errors (like no internet, wrong API key, etc.)
        console.error('Error fetching hourly forecast data:', error); 
        alert('Error fetching hourly forecast data. Please try again.');
    });



}