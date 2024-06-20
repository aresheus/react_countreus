import style from "./Layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "./MainLayout";
import Loading from "../components/Loading/Loading";
import fetchCountries from "../api/countries";
import { useEffect, useState } from "react";
import { CountryContext, useContext } from "../context/country-context";

export default function Layout() {
  const [loading, setLoading] = useState(false);
  const { setCountries, theme } = useContext(CountryContext);

  useEffect(() => {
    setTimeout(() => {
      fetchCountries().then((data) => {
        setCountries(data);

        setLoading(true);
      });
    }, 500);
  }, []);

  return (
    <main className={style.layout} data-theme={theme ? "dark" : "light"}>
      <Header />

      {loading ? <MainLayout /> : <Loading />}

      <Footer />
    </main>
  );
}
