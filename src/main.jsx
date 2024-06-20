import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./context/country-context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CountryProvider>
      <App />
    </CountryProvider>
  </BrowserRouter>
);
