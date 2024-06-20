import axios from "axios";

async function fetchCountries() {
  const url = "https://restcountries.com/v3.1/all";

  const response = await axios.get(url);

  return response.data;
}

export default fetchCountries;
