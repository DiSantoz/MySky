const cityForm = document.querySelector("form");

const newCity = async (city) => {
  // get city details
  const cityDetails = await getCity(city);
  // get weather details for city
  const weather = await getWeather(cityDetails.Key);
  //  return data as an object
  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city name entered by user
  const city = cityForm.city.value.trim();

  cityForm.reset();

  // update ui with new city
  newCity(city)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
