const key = "HEB7FwuMX1r2r2fNSwqb9xYCyI5scy8t";

const getCity = async (city) => {
  const base =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("london")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
