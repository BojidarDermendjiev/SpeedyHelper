import "../src/Main/i18n/index.ts";
import "./assets/styles/reset.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./LanguageContext.jsx";
import CalcProvider from "./CalcContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CalcProvider>
          <App />
        </CalcProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
