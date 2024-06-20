import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [dropValue, setDropValue] = useState("");

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? preference
  );

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        countryInput,
        setCountryInput,
        dropValue,
        setDropValue,
        theme,
        setTheme,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryProvider, useContext };
