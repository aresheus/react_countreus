import style from "./CityDetail.module.css";
import { useParams } from "react-router-dom";
import { CountryContext, useContext } from "../../context/country-context";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import { BiWorld } from "react-icons/bi";

import { FaPeopleGroup } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { TbWorldBolt } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function CityDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const { countries } = useContext(CountryContext);



  const currentCountry = countries.find(
    (x) => x.cca3.toLowerCase() == params.id
  );

  
  const {
    name: { common, nativeName },
    population,
    area,
    region,
    subregion,
    borders,
    currencies,
    languages,
    capital,
    flags: { svg },
    maps: { googleMaps },
  } = currentCountry;

  const borderBoxes = borders?.length ? (
    borders.map((x, i) => (
      <h1 key={i} className={style.borderStyle}>
        {x}
      </h1>
    ))
  ) : (
    <h1 className={style.borderStyle}>No Border Countries</h1>
  );

  return (
    <section className={style.CityDetail}>
      <button className={style.backBtn} onClick={() => navigate("/")}>
        <FaArrowLeftLong className={style.backIcon} />
        <h1>Back</h1>
      </button>

      <div className={style.countryDeatilBox}>
        <div className={style.imgArea}>
          <figure className={style.fig}>
            <img src={svg} alt={common} className={style.img} />
          </figure>
        </div>

        <div className={style.infoBox}>
          <h1>{common}</h1>

          <div className={style.detailBox}>
            <div className={style.detailBox1}>
              <div className={style.infoLabel}>
                <BiWorld className={style.labelIcon} />
                <h1>Native Name :</h1>
                <p>
                  {nativeName
                    ? `${Object.values(nativeName)[0].official}, ${
                        Object.values(nativeName)[0].common
                      }`
                    : "Unknown"}
                </p>
              </div>

              <div className={style.infoLabel}>
                <FaPeopleGroup className={style.labelIcon} />
                <h1> Population :</h1>
                <p>{population ?? "Unknown"}</p>
              </div>

              <div className={style.infoLabel}>
                <TbWorld className={style.labelIcon} />
                <h1>Region : </h1>
                <p>{region ?? "Unknown"}</p>
              </div>

              <div className={style.infoLabel}>
                <TbWorldBolt className={style.labelIcon} />
                <h1>Sub Region : </h1>
                <p>{subregion ?? "Unknown"}</p>
              </div>

              <div className={style.infoLabel}>
                <FaCity className={style.labelIcon} />
                <h1>Capital : </h1>
                <p>{capital ?? "Unknown"}</p>
              </div>
            </div>
            <div className={style.detailBox2}>
              <div className={style.infoLabel}>
                <AiOutlineAreaChart className={style.labelIcon} />
                <h1>Area :</h1>
                <p>{area ?? "Unknown"} km²</p>
              </div>

              <div className={style.infoLabel}>
                <FaMoneyBillWave className={style.labelIcon} />
                <h1>Currencies :</h1>
                <p>
                  {currencies
                    ? `${Object.values(currencies)[0].name}, ${
                        Object.values(currencies)[0].symbol
                      }`
                    : "Unknown"}
                </p>
              </div>

              <div className={style.infoLabel}>
                <IoLanguage className={style.labelIcon} />
                <h1>Languages : </h1>
                <p>
                  {languages
                    ? `${Object.values(languages).join(", ")}`
                    : "Unknown"}
                </p>
              </div>

              <div className={style.infoLabel}>
                <IoLocationSharp className={style.labelIcon} />

                <h1>Show on map : </h1>
                <a href={googleMaps} target="_blank">
                  Click Here
                </a>
              </div>
            </div>
          </div>

          <div className={style.borderCountries}>
            <h1>Border Countries : </h1>

            <div className={style.borderCountriesList}>{borderBoxes}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
