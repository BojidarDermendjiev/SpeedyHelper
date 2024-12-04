import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <a href="https://www.speedy.bg">
            <img
              src="https://www.speedy.bg/public/assets/images/logo.svg"
              alt={t("footer.logoAlt")}
            />
          </a>
        </div>
        <div className={styles.footerLinks}>
          <a href="/about">{t("footer.aboutUs")}</a>
          <a href="/services">{t("footer.services")}</a>
          <a href="/contact">{t("footer.contact")}</a>
          <a href="/terms">{t("footer.terms")}</a>
        </div>
        <div className={styles.footerContact}>
          <p>{t("footer.customerService")}</p>
          <p>{t("footer.email")}</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p
          dangerouslySetInnerHTML={{
            __html: t("footer.copyright", { year: new Date().getFullYear() }),
          }}
        ></p>
      </div>
    </footer>
  );
}
