import style from "./Home.module.css";
import Search from "./SearchA/Search";
import Filter from "./SearchA/Filter";
import CountryList from "./CountryList/CountryList";

export default function Home() {
  return (
    <section className={style.home}>
      <div className={style.searchA}>
        <Search />
        <Filter />
      </div>

      <CountryList />
    </section>
  );
}
