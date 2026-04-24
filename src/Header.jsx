import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";
import styles from "./assets/styles/header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);
  const location = useLocation();

  const navLink = (path) =>
    location.pathname === path || (path === "/home" && location.pathname === "/")
      ? styles.activeLink
      : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/home">
          <img
            src="https://www.speedy.bg/public/assets/images/logo.svg"
            alt={t("header.logoAlt")}
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/home" className={navLink("/home")}>
          {t("nav.calculator")}
        </Link>
        <Link to="/cheat-sheets" className={navLink("/cheat-sheets")}>
          {t("nav.cheatSheets")}
        </Link>
        <Link to="/mind-map" className={navLink("/mind-map")}>
          {t("nav.mindMap")}
        </Link>
      </nav>

      <div className={styles.languageSelector}>
        <button onClick={() => changeLanguage("en")}>
          {t("header.english")}
        </button>
        <button onClick={() => changeLanguage("bg")}>
          {t("header.bulgarian")}
        </button>
      </div>
    </header>
  );
}
