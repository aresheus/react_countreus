import style from "./Filter.module.css";
import { CountryContext, useContext } from "../../../context/country-context";
import { MdArrowDropDown } from "react-icons/md";

export default function Filter() {
  const { dropValue, setDropValue } = useContext(CountryContext);

  return (
    <article className={style.filter}>
      <select
        className={style.filterByRegion}
        defaultValue={dropValue}
        onChange={(e) => setDropValue(e.target.value)}
        name="dropMenu"
        id="dropMenu"
      >
        <option value="" className={style.option}>
          All
        </option>
        <option value="africa" className={style.option}>
          Africa
        </option>
        <option value="america" className={style.option}>
          America
        </option>
        <option value="asia" className={style.option}>
          Asia
        </option>
        <option value="europe" className={style.option}>
          Europe
        </option>
        <option value="oceania" className={style.option}>
          Oceania
        </option>
      </select>

      <label htmlFor="dropMenu" className={style.iconContainer}>
        <MdArrowDropDown className={style.ddIcon} />
      </label>
    </article>
  );
}
