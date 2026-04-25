import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./assets/styles/mindmap.module.css";
import { CalcContext } from "./CalcContext";

const MindMap = () => {
  const { t } = useTranslation();
  const { calcData } = useContext(CalcContext);
  const { results, inputValues, hasData } = calcData;

  const finalAmount = hasData
    ? results.total - parseFloat(inputValues.speedy || 0)
    : 0;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>{t("mindMap.title")}</h1>

        <div className={styles.map}>
          <div className={styles.rootNode}>SpeedyHelper</div>

          <div className={styles.connector} />

          <div className={styles.branches}>
            <div className={styles.branch}>
              <div className={`${styles.branchNode} ${styles.blue}`}>
                <Link to="/">{t("mindMap.calculator")}</Link>
              </div>
              <ul className={styles.leafList}>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bills200")}</span>
                  {hasData && inputValues.twoHundredLvlInput !== "" && (
                    <span className={styles.leafValue}>
                      {inputValues.twoHundredLvlInput} × 200 = {results.twoHundredLvlValue}€
                    </span>
                  )}
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bills100")}</span>
                  {hasData && inputValues.hundredLvlInput !== "" && (
                    <span className={styles.leafValue}>
                      {inputValues.hundredLvlInput} × 100 = {results.hundredLvlValue}€
                    </span>
                  )}
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bills50")}</span>
                  {hasData && (
                    <span className={styles.leafValue}>
                      {inputValues.fiftyLvlInput} × 50 = {results.fiftyLvlValue}€
                    </span>
                  )}
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bills20")}</span>
                  {hasData && (
                    <span className={styles.leafValue}>
                      {inputValues.twentyLvlInput} × 20 = {results.twentyLvlValue}€
                    </span>
                  )}
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bills10")}</span>
                  {hasData && (
                    <span className={styles.leafValue}>
                      {inputValues.tenLvlInput} × 10 = {results.tenLvlValue}€
                    </span>
                  )}
                </li>
                <li className={`${styles.leaf} ${styles.totalLeaf}`}>
                  <span className={styles.leafLabel}>{t("mindMap.total")}</span>
                  {hasData && (
                    <span className={styles.leafValue}>{results.total}€</span>
                  )}
                </li>
                <li className={`${styles.leaf} ${styles.finalLeaf}`}>
                  <span className={styles.leafLabel}>{t("mindMap.final")}</span>
                  {hasData && (
                    <span className={styles.leafValue}>{finalAmount}€</span>
                  )}
                </li>
              </ul>
              {!hasData && (
                <p className={styles.noData}>{t("mindMap.noData")}</p>
              )}
            </div>

            <div className={styles.branch}>
              <div className={`${styles.branchNode} ${styles.green}`}>
                <Link to="/cheat-sheets">{t("mindMap.cheatSheets")}</Link>
              </div>
              <ul className={styles.leafList}>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.emailContacts")}</span>
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.keyboardShortcuts")}</span>
                </li>
              </ul>
            </div>

            <div className={styles.branch}>
              <div className={`${styles.branchNode} ${styles.orange}`}>
                {t("mindMap.languages")}
              </div>
              <ul className={styles.leafList}>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.english")}</span>
                </li>
                <li className={styles.leaf}>
                  <span className={styles.leafLabel}>{t("mindMap.bulgarian")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {hasData && (
          <div className={styles.summaryPanel}>
            <h2>{t("mindMap.sessionData")}</h2>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <span className={styles.summaryLabel}>200€</span>
                <span className={styles.summaryValue}>
                  {inputValues.twoHundredLvlInput || 0} bills = {results.twoHundredLvlValue}€
                </span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryLabel}>100€</span>
                <span className={styles.summaryValue}>
                  {inputValues.hundredLvlInput || 0} bills = {results.hundredLvlValue}€
                </span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryLabel}>50€</span>
                <span className={styles.summaryValue}>
                  {inputValues.fiftyLvlInput || 0} bills = {results.fiftyLvlValue}€
                </span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryLabel}>20€</span>
                <span className={styles.summaryValue}>
                  {inputValues.twentyLvlInput || 0} bills = {results.twentyLvlValue}€
                </span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryLabel}>10€</span>
                <span className={styles.summaryValue}>
                  {inputValues.tenLvlInput || 0} bills = {results.tenLvlValue}€
                </span>
              </div>
              <div className={`${styles.summaryCard} ${styles.totalCard}`}>
                <span className={styles.summaryLabel}>{t("mindMap.total")}</span>
                <span className={styles.summaryValue}>{results.total}€</span>
              </div>
              <div className={`${styles.summaryCard} ${styles.finalCard}`}>
                <span className={styles.summaryLabel}>{t("mindMap.final")}</span>
                <span className={styles.summaryValue}>{finalAmount}€</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMap;
