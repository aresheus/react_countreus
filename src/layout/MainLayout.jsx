import style from "./MainLayout.module.css";
import Home from "../pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CityDetail from "../pages/CityDetail/CityDetail";
export default function MainLayout() {
  return (
    <section className={style.mainLayout}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CityDetail />} />
      </Routes>
    </section>
  );
}
