import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";
import styles from "./assets/styles/header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/home">
          <img
            src="https://www.speedy.bg/public/assets/images/logo.svg"
            alt={t("header.logoAlt")}
          />
        </a>
      </div>

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
