import style from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CountryContext, useContext } from "../../context/country-context";
export default function Header() {
  const { theme, setTheme } = useContext(CountryContext);

  const navigate = useNavigate();

  function handleReset() {
    navigate("/");
    window.location.reload();
  }

  function handleTheme() {
    setTheme((prev) => {
      localStorage.setItem("theme", !prev);

      return !prev;
    });
  }

  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.logo} onClick={handleReset} />

      <button className={style.themeBtn} onClick={handleTheme}>
        {theme ? (
          <div className={style.modeWrapper}>
            <MdDarkMode className={style.icon} />
            <h1>Dark mode</h1>
          </div>
        ) : (
          <div className={style.modeWrapper}>
            <MdOutlineDarkMode className={style.icon} />
            <h1>Light mode</h1>
          </div>
        )}
      </button>
    </header>
  );
}
