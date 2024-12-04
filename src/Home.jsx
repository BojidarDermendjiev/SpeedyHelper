import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/home.module.css";

const Home = () => {
  const { t } = useTranslation();

  const [inputValues, setInputValues] = useState({
    speedy: "",
    hundredLvlInput: "",
    fiftyLvlInput: "",
    twelveLvlInput: "",
    tenLvlInput: "",
  });
  const [results, setResults] = useState({
    hundredLvlValue: 0,
    fiftyLvlValue: 0,
    twelveLvlValue: 0,
    tenLvlValue: 0,
    total: 0,
  });
  const [error, setError] = useState("");

  const calculateResults = (values) => {
    const value1 = parseFloat(values.hundredLvlInput);
    const value2 = parseFloat(values.fiftyLvlInput);
    const value3 = parseFloat(values.twelveLvlInput);
    const value4 = parseFloat(values.tenLvlInput);

    if (isNaN(value1) || isNaN(value2) || isNaN(value3) || isNaN(value4)) {
      setError(t("home.pleaseEnterValidNumbers"));
      return;
    }

    const hundredLvlValue = value1 * 100;
    const fiftyLvlValue = value2 * 50;
    const twelveLvlValue = value3 * 20;
    const tenLvlValue = value4 * 10;
    const total =
      hundredLvlValue + fiftyLvlValue + twelveLvlValue + tenLvlValue;

    setResults({
      hundredLvlValue,
      fiftyLvlValue,
      twelveLvlValue,
      tenLvlValue,
      total,
    });
    setError("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValues = {
      ...inputValues,
      [id]: value,
    };
    setInputValues(newValues);
    calculateResults(newValues);
  };

  return (
    <div className={styles.img}>
      <div className={styles.home}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formField}
              placeholder={t("home.speedy")}
              id="speedy"
              value={inputValues.speedy}
              onChange={handleChange}
              required
            />
            <label htmlFor="speedy" className={styles.formLabel}>
              {t("home.speedy")}
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formField}
              placeholder={t("home.hundredLevel")}
              id="hundredLvlInput"
              value={inputValues.hundredLvlInput}
              onChange={handleChange}
              required
            />
            <label htmlFor="hundredLvlInput" className={styles.formLabel}>
              {t("home.hundredLevel")}
            </label>
            <span className={styles.result}>
              {inputValues.hundredLvlInput} * 100 = {results.hundredLvlValue}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formField}
              placeholder={t("home.fiftyLevel")}
              id="fiftyLvlInput"
              value={inputValues.fiftyLvlInput}
              onChange={handleChange}
              required
            />
            <label htmlFor="fiftyLvlInput" className={styles.formLabel}>
              {t("home.fiftyLevel")}
            </label>
            <span className={styles.result}>
              {inputValues.fiftyLvlInput} * 50 = {results.fiftyLvlValue}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formField}
              placeholder={t("home.twentyLevel")}
              id="twelveLvlInput"
              value={inputValues.twelveLvlInput}
              onChange={handleChange}
              required
            />
            <label htmlFor="twelveLvlInput" className={styles.formLabel}>
              {t("home.twentyLevel")}
            </label>
            <span className={styles.result}>
              {inputValues.twelveLvlInput} * 20 = {results.twelveLvlValue}
            </span>
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              className={styles.formField}
              placeholder={t("home.tenLevel")}
              id="tenLvlInput"
              value={inputValues.tenLvlInput}
              onChange={handleChange}
              required
            />
            <label htmlFor="tenLvlInput" className={styles.formLabel}>
              {t("home.tenLevel")}
            </label>
            <span className={styles.result}>
              {inputValues.tenLvlInput} * 10 = {results.tenLvlValue}
            </span>
          </div>
          <button
            type="button"
            className={styles.submitButton}
            onClick={() => window.location.reload()}
          >
            {t("home.refresh")}
          </button>
        </form>
        <div className={styles.results}>
          <p>
            {t("home.speedy")}: {inputValues.speedy}
          </p>
          <p>
            {t("home.total")}: {results.total}
          </p>
          <p>
            {t("home.finalTotalSpeedy")}:{" "}
            {results.total - parseFloat(inputValues.speedy || 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
