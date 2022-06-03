const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;

  //   update city details template
  details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4"><span>${weather.Temperature.Imperial.Value}</span><span>&deg;F</span></div>
</div>`;

  // display data, remove class
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

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
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
