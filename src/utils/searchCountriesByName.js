function searchCountriesByName(countries, input) {
  return countries.filter((x) => x.name.common.toLowerCase().includes(input));
}

export default searchCountriesByName;
