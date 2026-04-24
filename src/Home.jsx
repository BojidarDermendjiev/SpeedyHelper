import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/home.module.css";
import { CalcContext } from "./CalcContext";

const Home = () => {
  const { t } = useTranslation();
  const { setCalcData } = useContext(CalcContext);

  const [inputValues, setInputValues] = useState({
    speedy: "",
    twoHundredLvlInput: "",
    hundredLvlInput: "",
    fiftyLvlInput: "",
    twentyLvlInput: "",
    tenLvlInput: "",
  });

  const [results, setResults] = useState({
    twoHundredLvlValue: 0,
    hundredLvlValue: 0,
    fiftyLvlValue: 0,
    twentyLvlValue: 0,
    tenLvlValue: 0,
    total: 0,
  });

  const calculateResults = (values) => {
    const v200 = parseFloat(values.twoHundredLvlInput) || 0;
    const v100 = parseFloat(values.hundredLvlInput) || 0;
    const v50 = parseFloat(values.fiftyLvlInput) || 0;
    const v20 = parseFloat(values.twentyLvlInput) || 0;
    const v10 = parseFloat(values.tenLvlInput) || 0;

    const twoHundredLvlValue = v200 * 200;
    const hundredLvlValue = v100 * 100;
    const fiftyLvlValue = v50 * 50;
    const twentyLvlValue = v20 * 20;
    const tenLvlValue = v10 * 10;
    const total =
      twoHundredLvlValue +
      hundredLvlValue +
      fiftyLvlValue +
      twentyLvlValue +
      tenLvlValue;

    const newResults = {
      twoHundredLvlValue,
      hundredLvlValue,
      fiftyLvlValue,
      twentyLvlValue,
      tenLvlValue,
      total,
    };
    setResults(newResults);
    setCalcData({ inputValues: values, results: newResults, hasData: true });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValues = { ...inputValues, [id]: value };
    setInputValues(newValues);
    calculateResults(newValues);
  };

  const handleRefresh = () => {
    const empty = {
      speedy: "",
      twoHundredLvlInput: "",
      hundredLvlInput: "",
      fiftyLvlInput: "",
      twentyLvlInput: "",
      tenLvlInput: "",
    };
    setInputValues(empty);
    setResults({
      twoHundredLvlValue: 0,
      hundredLvlValue: 0,
      fiftyLvlValue: 0,
      twentyLvlValue: 0,
      tenLvlValue: 0,
      total: 0,
    });
    setCalcData({
      inputValues: empty,
      results: {
        twoHundredLvlValue: 0,
        hundredLvlValue: 0,
        fiftyLvlValue: 0,
        twentyLvlValue: 0,
        tenLvlValue: 0,
        total: 0,
      },
      hasData: false,
    });
  };

  const fields = [
    {
      id: "twoHundredLvlInput",
      label: t("home.twoHundredLevel"),
      multiplier: 200,
      value: results.twoHundredLvlValue,
    },
    {
      id: "hundredLvlInput",
      label: t("home.hundredLevel"),
      multiplier: 100,
      value: results.hundredLvlValue,
    },
    {
      id: "fiftyLvlInput",
      label: t("home.fiftyLevel"),
      multiplier: 50,
      value: results.fiftyLvlValue,
    },
    {
      id: "twentyLvlInput",
      label: t("home.twentyLevel"),
      multiplier: 20,
      value: results.twentyLvlValue,
    },
    {
      id: "tenLvlInput",
      label: t("home.tenLevel"),
      multiplier: 10,
      value: results.tenLvlValue,
    },
  ];

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
            />
            <label htmlFor="speedy" className={styles.formLabel}>
              {t("home.speedy")}
            </label>
          </div>

          {fields.map(({ id, label, multiplier, value }) => (
            <div key={id} className={styles.formGroup}>
              <input
                type="number"
                className={styles.formField}
                placeholder={label}
                id={id}
                value={inputValues[id]}
                onChange={handleChange}
              />
              <label htmlFor={id} className={styles.formLabel}>
                {label}
              </label>
              {inputValues[id] !== "" && (
                <span className={styles.result}>
                  {inputValues[id]} * {multiplier} = {value}
                </span>
              )}
            </div>
          ))}

          <button
            type="button"
            className={styles.submitButton}
            onClick={handleRefresh}
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
            {results.total - (parseFloat(inputValues.speedy) || 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
