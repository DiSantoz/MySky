class Forecast {
  constructor() {
    this.key = "QSvO9DYi40y4N0f0JgvO6YAh4tE8Plky";
    this.weatherURI =
      "https://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async newCity(city) {
    // get city details
    const cityDetails = await this.getCity(city);
    // get weather details for city
    const weather = await this.getWeather(cityDetails.Key);
    //  return data as an object
    return {
      cityDetails: cityDetails,
      weather: weather,
    };
  }
  // get city information
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }
  // get weather information
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }
}
