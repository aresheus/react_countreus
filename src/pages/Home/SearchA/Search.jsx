import style from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { CountryContext, useContext } from "../../../context/country-context";

export default function Search() {
  const { countryInput, setCountryInput } = useContext(CountryContext);

  return (
    <article className={style.search}>
      <CiSearch className={style.sIcon} />

      <input
        type="text"
        placeholder="Search for a country..."
        value={countryInput}
        onChange={(e) => setCountryInput(e.target.value)}
        className={style.searchInput}
      />
    </article>
  );
}
