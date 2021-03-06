const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;

  //   update city details template
  details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4"><span>${weather.Temperature.Imperial.Value}</span><span>&deg;F</span></div>
</div>`;

  // update images and icons

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }
  //  sets src to correct img depending on day or night
  time.setAttribute("src", timeSrc);

  // display data, remove class
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city name entered by user
  const city = cityForm.city.value.trim();

  cityForm.reset();

  // update ui with new city
  forecast
    .newCity(city)
    .then((data) => {
      console.log(data);
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // set localstorage of city name

  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .newCity(localStorage.getItem("city"))
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
