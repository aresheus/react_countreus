import style from "./CountryList.module.css";
import CountryBox from "../CountryBox/CountryBox";
import { CountryContext, useContext } from "../../../context/country-context";
import sortAlpabetCountries from "../../../utils/sortAlphabetCountries";
import searchCountriesByName from "../../../utils/searchCountriesByName";
import NotFoundCountry from "./NotFoundCountry";
export default function CountryList() {
  const { countries, countryInput, dropValue } = useContext(CountryContext);

  const countryBoxes = searchCountriesByName(
    sortAlpabetCountries(countries).filter((x) =>
      x.region.toLowerCase().includes(dropValue)
    ),
    countryInput
  ).map((country, i) => <CountryBox key={i} data={country} />);

  return (
    <>
      {countryBoxes.length ? (
        <article className={style.countryLIst}>{countryBoxes}</article>
      ) : (
        <NotFoundCountry />
      )}
    </>
  );
}
