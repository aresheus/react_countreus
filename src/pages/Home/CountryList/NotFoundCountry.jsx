import style from "./NotFoundCountry.module.css";
import { PiSmileySad } from "react-icons/pi";

export default function NotFoundCountry() {
  return (
    <article className={style.notFoundCountry}>
      <PiSmileySad className={style.nfIcon} />

      <h1>Country Not Found.</h1>
    </article>
  );
}
