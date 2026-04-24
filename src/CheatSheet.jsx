import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/cheatsheet.module.css";

const EMAIL_CONTACTS = [
  {
    id: "ccorrect",
    email: "Ccorrect@speedy.bg",
    purposeEn: "Reset delivery",
    purposeBg: "Нулиране на доставка",
  },
  {
    id: "cs",
    email: "cs-employee@speedy.bg",
    purposeEn: "Case study with shipments",
    purposeBg: "Казус с пратки",
  },
  {
    id: "ohd",
    email: "ohd.s.hd@speedy.bg",
    purposeEn: "Corrections for shipments",
    purposeBg: "Корекции за пратки",
  },
  {
    id: "insurance",
    email: "zastrahovki@speedy.bg",
    purposeEn: "Broken item from delivery",
    purposeBg: "Счупена стока при доставка",
  },
  {
    id: "cashier",
    email: "spscasier@speedy.bg",
    purposeEn: "Cash register and payment problems",
    purposeBg: "Проблеми с каса и плащания",
  },
  {
    id: "logistics",
    email: "gradskalogisctic@speedy.bg",
    purposeEn: "Lost delivery",
    purposeBg: "Изгубена доставка",
  },
  {
    id: "security",
    email: "security@speedy.bg",
    purposeEn: "ZPAU – Administrative report",
    purposeBg: "ЗПАУ – Административен доклад",
  },
  {
    id: "it",
    email: "ITOtdel@speedy.bg",
    purposeEn: "IT request – technology issues & stuck systems",
    purposeBg: "ИТ заявка – технологични проблеми и заседнали системи",
    hasBarcode: true,
  },
];

const SHORTCUTS = {
  general: [
    { keys: "Ctrl + C", actionEn: "Copy selected", actionBg: "Копиране" },
    { keys: "Ctrl + X", actionEn: "Cut selected", actionBg: "Изрязване" },
    { keys: "Ctrl + V", actionEn: "Paste", actionBg: "Поставяне" },
    {
      keys: "Ctrl + Shift + V",
      actionEn: "Paste as plain text",
      actionBg: "Поставяне като обикновен текст",
    },
    { keys: "Ctrl + A", actionEn: "Select all", actionBg: "Избор на всичко" },
    { keys: "Ctrl + Z", actionEn: "Undo", actionBg: "Отмяна" },
    { keys: "Ctrl + Y", actionEn: "Redo", actionBg: "Повторение" },
    { keys: "Ctrl + S", actionEn: "Save", actionBg: "Запазване" },
    { keys: "Ctrl + P", actionEn: "Print", actionBg: "Печат" },
    {
      keys: "Ctrl + F",
      actionEn: "Find / Search",
      actionBg: "Намиране / Търсене",
    },
  ],
  text: [
    { keys: "Ctrl + B", actionEn: "Bold", actionBg: "Получерен" },
    { keys: "Ctrl + I", actionEn: "Italic", actionBg: "Курсив" },
    { keys: "Ctrl + U", actionEn: "Underline", actionBg: "Подчертан" },
    {
      keys: "Ctrl + Shift + X",
      actionEn: "Strikethrough (some apps)",
      actionBg: "Зачертан (в някои приложения)",
    },
    {
      keys: "Ctrl + Home",
      actionEn: "Go to beginning",
      actionBg: "Към началото",
    },
    { keys: "Ctrl + End", actionEn: "Go to end", actionBg: "Към края" },
    {
      keys: "Ctrl + D",
      actionEn: "Duplicate line / Delete (app dependent)",
      actionBg: "Дублиране / Изтриване (зависи от приложението)",
    },
    {
      keys: "Shift + Arrows",
      actionEn: "Select text",
      actionBg: "Избор на текст",
    },
  ],
  nav: [
    {
      keys: "Alt + Tab",
      actionEn: "Switch windows",
      actionBg: "Превключване на прозорци",
    },
    {
      keys: "Ctrl + Tab",
      actionEn: "Switch browser tabs",
      actionBg: "Превключване на раздели",
    },
    {
      keys: "Ctrl + W",
      actionEn: "Close tab",
      actionBg: "Затваряне на раздел",
    },
    { keys: "Ctrl + T", actionEn: "New browser tab", actionBg: "Нов раздел" },
    {
      keys: "F5",
      actionEn: "Refresh page",
      actionBg: "Обновяване на страница",
    },
    { keys: "Tab", actionEn: "Next field", actionBg: "Следващо поле" },
    {
      keys: "Shift + Tab",
      actionEn: "Previous field",
      actionBg: "Предишно поле",
    },
  ],
  system: [
    {
      keys: "Win + D",
      actionEn: "Show / hide desktop",
      actionBg: "Показване / скриване на работния плот",
    },
    {
      keys: "Win + L",
      actionEn: "Lock screen",
      actionBg: "Заключване на екрана",
    },
    {
      keys: "Win + E",
      actionEn: "Open File Explorer",
      actionBg: "Отваряне на File Explorer",
    },
    {
      keys: "Ctrl + Shift + Esc",
      actionEn: "Task Manager",
      actionBg: "Диспечер на задачи",
    },
    {
      keys: "Alt + F4",
      actionEn: "Close active window",
      actionBg: "Затваряне на прозореца",
    },
    { keys: "PrtScn", actionEn: "Screenshot", actionBg: "Снимка на екрана" },
    {
      keys: "Win + Shift + S",
      actionEn: "Snip & Sketch (crop screenshot)",
      actionBg: "Изрязване на екранна снимка",
    },
  ],
};

const CheatSheet = () => {
  const { t, i18n } = useTranslation();
  const isBg = i18n.language.startsWith("bg");
  const [openCategory, setOpenCategory] = useState(null);
  const [barcodeValue, setBarcodeValue] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const toggle = (cat) => setOpenCategory(openCategory === cat ? null : cat);

  const copyEmail = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const composeEmail = (email, barcode) => {
    let link = `mailto:${email}`;
    if (barcode) {
      const subject = encodeURIComponent(
        isBg ? `ИТ Заявка – Код: ${barcode}` : `IT Request – Code: ${barcode}`,
      );
      const body = encodeURIComponent(
        isBg
          ? `Код за получаване: ${barcode}\n\nОпишете проблема:\n`
          : `Receiving code: ${barcode}\n\nDescribe the issue:\n`,
      );
      link += `?subject=${subject}&body=${body}`;
    }
    window.open(link);
  };

  const categories = [
    {
      key: "general",
      label: t("cheatSheet.catGeneral"),
      data: SHORTCUTS.general,
    },
    { key: "text", label: t("cheatSheet.catText"), data: SHORTCUTS.text },
    { key: "nav", label: t("cheatSheet.catNav"), data: SHORTCUTS.nav },
    { key: "system", label: t("cheatSheet.catSystem"), data: SHORTCUTS.system },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.pageHeader}>
          <h1>{t("cheatSheet.title")}</h1>
          <p>{t("cheatSheet.subtitle")}</p>
        </header>

        {/* Email Contacts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("cheatSheet.emailTitle")}</h2>
          <div className={styles.emailList}>
            {EMAIL_CONTACTS.map((contact) => (
              <div key={contact.id} className={styles.emailRow}>
                <div className={styles.emailMain}>
                  <span className={styles.emailPurpose}>
                    {isBg ? contact.purposeBg : contact.purposeEn}
                  </span>
                  <div className={styles.emailActions}>
                    <span className={styles.emailAddress}>{contact.email}</span>
                    <button
                      className={`${styles.actionBtn} ${styles.copyBtn} ${copiedId === contact.id ? styles.copied : ""}`}
                      onClick={() => copyEmail(contact.email, contact.id)}
                    >
                      {copiedId === contact.id
                        ? t("cheatSheet.copied")
                        : t("cheatSheet.copy")}
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.composeBtn}`}
                      onClick={() => composeEmail(contact.email)}
                    >
                      {t("cheatSheet.compose")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.barcodeSection}>
            <input
              className={styles.barcodeInput}
              type="text"
              placeholder={t("cheatSheet.barcodePlaceholder")}
              value={barcodeValue}
              onChange={(e) => setBarcodeValue(e.target.value)}
            />
            <button
              className={`${styles.actionBtn} ${styles.composeBtn}`}
              onClick={() => composeEmail("ITOtdel@speedy.bg", barcodeValue)}
            >
              {t("cheatSheet.compose")}
            </button>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t("cheatSheet.shortcutsTitle")}
          </h2>
          <div className={styles.accordion}>
            {categories.map(({ key, label, data }) => (
              <div key={key} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${openCategory === key ? styles.accordionOpen : ""}`}
                  onClick={() => toggle(key)}
                >
                  {label}
                  <span className={styles.chevron}>
                    {openCategory === key ? "▲" : "▼"}
                  </span>
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
                            <td>
                              <kbd className={styles.kbd}>{row.keys}</kbd>
                            </td>
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
