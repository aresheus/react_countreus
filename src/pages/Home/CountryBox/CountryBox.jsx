import style from "./CountryBox.module.css";
import { useNavigate } from "react-router-dom";
export default function CountryBox({ data }) {
  const navigate = useNavigate();
  const {
    cca3,
    name: { common },
    population,
    region,
    capital,
    flags: { svg },
  } = data;

  return (
    <article
      className={style.countryBox}
      onClick={() => navigate("/country/" + cca3.toLowerCase())}
    >
      <figure className={style.fig}>
        <img src={svg} alt={common} className={style.cImg} />
      </figure>

      <div className={style.boxTextA}>
        <h1>{common}</h1>

        <div className={style.boxInfoWrapper}>
          <div className={style.boxInfo}>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>
          </div>

          <button
            onClick={() => navigate("/country/" + cca3.toLowerCase())}
            className={style.readMore}
          >
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}
