import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/cheatsheet.module.css";

const DENOMINATIONS = [100, 50, 20, 10];

const COMMON_AMOUNTS = [
  { amount: 100,  d100: 1,  d50: 2,  d20: 5,   d10: 10  },
  { amount: 200,  d100: 2,  d50: 4,  d20: 10,  d10: 20  },
  { amount: 500,  d100: 5,  d50: 10, d20: 25,  d10: 50  },
  { amount: 1000, d100: 10, d50: 20, d20: 50,  d10: 100 },
  { amount: 1500, d100: 15, d50: 30, d20: 75,  d10: 150 },
  { amount: 2000, d100: 20, d50: 40, d20: 100, d10: 200 },
];

const SHORTCUTS = {
  general: [
    { keys: "Ctrl + C",       actionEn: "Copy selected",          actionBg: "Копиране" },
    { keys: "Ctrl + X",       actionEn: "Cut selected",           actionBg: "Изрязване" },
    { keys: "Ctrl + V",       actionEn: "Paste",                  actionBg: "Поставяне" },
    { keys: "Ctrl + Shift + V", actionEn: "Paste as plain text",  actionBg: "Поставяне като обикновен текст" },
    { keys: "Ctrl + A",       actionEn: "Select all",             actionBg: "Избор на всичко" },
    { keys: "Ctrl + Z",       actionEn: "Undo",                   actionBg: "Отмяна" },
    { keys: "Ctrl + Y",       actionEn: "Redo",                   actionBg: "Повторение" },
    { keys: "Ctrl + S",       actionEn: "Save",                   actionBg: "Запазване" },
    { keys: "Ctrl + P",       actionEn: "Print",                  actionBg: "Печат" },
    { keys: "Ctrl + F",       actionEn: "Find / Search",          actionBg: "Намиране / Търсене" },
  ],
  text: [
    { keys: "Ctrl + B",       actionEn: "Bold",                   actionBg: "Получерен" },
    { keys: "Ctrl + I",       actionEn: "Italic",                 actionBg: "Курсив" },
    { keys: "Ctrl + U",       actionEn: "Underline",              actionBg: "Подчертан" },
    { keys: "Ctrl + Shift + X", actionEn: "Strikethrough (some apps)", actionBg: "Зачертан (в някои приложения)" },
    { keys: "Ctrl + Home",    actionEn: "Go to beginning",        actionBg: "Към началото" },
    { keys: "Ctrl + End",     actionEn: "Go to end",              actionBg: "Към края" },
    { keys: "Ctrl + D",       actionEn: "Duplicate line / Delete (app dependent)", actionBg: "Дублиране / Изтриване (зависи от приложението)" },
    { keys: "Shift + Arrows", actionEn: "Select text",            actionBg: "Избор на текст" },
  ],
  nav: [
    { keys: "Alt + Tab",      actionEn: "Switch windows",         actionBg: "Превключване на прозорци" },
    { keys: "Ctrl + Tab",     actionEn: "Switch browser tabs",    actionBg: "Превключване на раздели" },
    { keys: "Ctrl + W",       actionEn: "Close tab",              actionBg: "Затваряне на раздел" },
    { keys: "Ctrl + T",       actionEn: "New browser tab",        actionBg: "Нов раздел" },
    { keys: "F5",             actionEn: "Refresh page",           actionBg: "Обновяване на страница" },
    { keys: "Tab",            actionEn: "Next field",             actionBg: "Следващо поле" },
    { keys: "Shift + Tab",    actionEn: "Previous field",         actionBg: "Предишно поле" },
  ],
  system: [
    { keys: "Win + D",        actionEn: "Show / hide desktop",    actionBg: "Показване / скриване на работния плот" },
    { keys: "Win + L",        actionEn: "Lock screen",            actionBg: "Заключване на екрана" },
    { keys: "Win + E",        actionEn: "Open File Explorer",     actionBg: "Отваряне на File Explorer" },
    { keys: "Ctrl + Shift + Esc", actionEn: "Task Manager",       actionBg: "Диспечер на задачи" },
    { keys: "Alt + F4",       actionEn: "Close active window",    actionBg: "Затваряне на прозореца" },
    { keys: "PrtScn",         actionEn: "Screenshot",             actionBg: "Снимка на екрана" },
    { keys: "Win + Shift + S", actionEn: "Snip & Sketch (crop screenshot)", actionBg: "Изрязване на екранна снимка" },
  ],
};

const CheatSheet = () => {
  const { t, i18n } = useTranslation();
  const isBg = i18n.language.startsWith("bg");
  const [openCategory, setOpenCategory] = useState("general");

  const toggle = (cat) => setOpenCategory(openCategory === cat ? null : cat);

  const categories = [
    { key: "general", label: t("cheatSheet.catGeneral"), data: SHORTCUTS.general },
    { key: "text",    label: t("cheatSheet.catText"),    data: SHORTCUTS.text },
    { key: "nav",     label: t("cheatSheet.catNav"),     data: SHORTCUTS.nav },
    { key: "system",  label: t("cheatSheet.catSystem"),  data: SHORTCUTS.system },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1>{t("cheatSheet.title")}</h1>
          <p>{t("cheatSheet.subtitle")}</p>
        </header>

        {/* Currency Multiplication Tables */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cheatSheet.tablesTitle")}</h2>
          <div className={styles.tablesGrid}>
            {DENOMINATIONS.map((denom) => (
              <div key={denom} className={styles.tableCard}>
                <div className={styles.tableCardHeader} data-denom={String(denom)}>
                  {denom}€
                </div>
                <table className={styles.multiplyTable}>
                  <thead>
                    <tr>
                      <th>{t("cheatSheet.count")}</th>
                      <th>{t("cheatSheet.value")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <tr key={n} className={n % 5 === 0 ? styles.highlight : ""}>
                        <td>{n}</td>
                        <td>{n * denom}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Common Amounts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cheatSheet.amountsTitle")}</h2>
          <div className={styles.amountsTable}>
            <table className={styles.fullTable}>
              <thead>
                <tr>
                  <th>{t("cheatSheet.amount")}</th>
                  <th>100€</th>
                  <th>50€</th>
                  <th>20€</th>
                  <th>10€</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_AMOUNTS.map((row) => (
                  <tr key={row.amount}>
                    <td className={styles.amountCell}>{row.amount}€</td>
                    <td>{row.d100}</td>
                    <td>{row.d50}</td>
                    <td>{row.d20}</td>
                    <td>{row.d10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Counting Tips */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cheatSheet.tipsTitle")}</h2>
          <ul className={styles.tipsList}>
            {[1, 2, 3, 4, 5].map((n) => (
              <li key={n} className={styles.tip}>
                {t(`cheatSheet.tip${n}`)}
              </li>
            ))}
          </ul>
        </section>

        {/* Keyboard Shortcuts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cheatSheet.shortcutsTitle")}</h2>
          <div className={styles.accordion}>
            {categories.map(({ key, label, data }) => (
              <div key={key} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${openCategory === key ? styles.accordionOpen : ""}`}
                  onClick={() => toggle(key)}
                >
                  {label}
                  <span className={styles.chevron}>{openCategory === key ? "▲" : "▼"}</span>
                </button>
                {openCategory === key && (
                  <div className={styles.accordionBody}>
                    <table className={styles.shortcutTable}>
                      <thead>
                        <tr>
                          <th>{t("cheatSheet.shortcutKey")}</th>
                          <th>{t("cheatSheet.shortcutAction")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row) => (
                          <tr key={row.keys}>
                            <td><kbd className={styles.kbd}>{row.keys}</kbd></td>
                            <td>{isBg ? row.actionBg : row.actionEn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheatSheet;
