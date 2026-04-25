import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./assets/styles/cheatsheet.module.css";

const CITIES = [
  { value: "sofia", labelBg: "София", labelEn: "Sofia" },
  { value: "plovdiv", labelBg: "Пловдив", labelEn: "Plovdiv" },
  { value: "varna", labelBg: "Варна", labelEn: "Varna" },
  { value: "burgas", labelBg: "Бургас", labelEn: "Burgas" },
  { value: "ruse", labelBg: "Русе", labelEn: "Ruse" },
  { value: "stara-zagora", labelBg: "Стара Загора", labelEn: "Stara Zagora" },
  { value: "pleven", labelBg: "Плевен", labelEn: "Pleven" },
  { value: "sliven", labelBg: "Сливен", labelEn: "Sliven" },
  { value: "dobrich", labelBg: "Добрич", labelEn: "Dobrich" },
  { value: "shumen", labelBg: "Шумен", labelEn: "Shumen" },
  { value: "haskovo", labelBg: "Хасково", labelEn: "Haskovo" },
  { value: "yambol", labelBg: "Ямбол", labelEn: "Yambol" },
  { value: "pazardzhik", labelBg: "Пазарджик", labelEn: "Pazardzhik" },
  { value: "blagoevgrad", labelBg: "Благоевград", labelEn: "Blagoevgrad" },
  { value: "pernik", labelBg: "Перник", labelEn: "Pernik" },
  { value: "kyustendil", labelBg: "Кюстендил", labelEn: "Kyustendil" },
  { value: "lovech", labelBg: "Ловеч", labelEn: "Lovech" },
  { value: "gabrovo", labelBg: "Габрово", labelEn: "Gabrovo" },
  {
    value: "veliko-tarnovo",
    labelBg: "Велико Търново",
    labelEn: "Veliko Tarnovo",
  },
  { value: "vidin", labelBg: "Видин", labelEn: "Vidin" },
  { value: "montana", labelBg: "Монтана", labelEn: "Montana" },
  { value: "vratsa", labelBg: "Враца", labelEn: "Vratsa" },
  { value: "targovishte", labelBg: "Търговище", labelEn: "Targovishte" },
  { value: "razgrad", labelBg: "Разград", labelEn: "Razgrad" },
  { value: "silistra", labelBg: "Силистра", labelEn: "Silistra" },
  { value: "kardzhali", labelBg: "Кърджали", labelEn: "Kardzhali" },
  { value: "smolyan", labelBg: "Смолян", labelEn: "Smolyan" },
];

// TODO: Replace each value with the actual regional manager email for that city
const REGIONAL_MANAGERS = {
  sofia: "",
  plovdiv: "",
  varna: "",
  burgas: "",
  ruse: "",
  "stara-zagora": "",
  pleven: "",
  sliven: "",
  dobrich: "",
  shumen: "",
  haskovo: "",
  yambol: "",
  pazardzhik: "",
  blagoevgrad: "",
  pernik: "",
  kyustendil: "",
  lovech: "",
  gabrovo: "",
  "veliko-tarnovo": "",
  vidin: "",
  montana: "",
  vratsa: "",
  targovishte: "",
  razgrad: "",
  silistra: "",
  kardzhali: "",
  smolyan: "",
};

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
  const [waybillValue, setWaybillValue] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const toggle = (cat) => setOpenCategory(openCategory === cat ? null : cat);

  const copyEmail = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const composeEmail = (contact) => {
    const wb = waybillValue.trim();
    const subject = (isBg ? contact.subjectBg : contact.subjectEn).replace(
      /{waybill}/g,
      wb,
    );
    const body = (isBg ? contact.bodyBg : contact.bodyEn).replace(
      /{waybill}/g,
      wb,
    );
    const link = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(link);
  };

  const contacts = [
    {
      id: "ccorrect",
      email: "Ccorrect@speedy.bg",
      purposeEn: "Reset delivery",
      purposeBg: "Нулиране на доставка",
      subjectBg: "Заявка за нулиране на доставка – Товарителница: {waybill}",
      subjectEn: "Reset delivery request – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nМоля да бъде нулирана следната доставка:\n\nТоварителница: {waybill}\n\nС уважение,",
      bodyEn:
        "Hello,\n\nPlease reset the following delivery:\n\nWaybill: {waybill}\n\nRegards,",
    },
    {
      id: "regional-manager",
      email: selectedCity ? REGIONAL_MANAGERS[selectedCity] : null,
      purposeEn: "Reset delivery – Regional Manager",
      purposeBg: "Нулиране на доставка – Регионален мениджър",
      cityDependent: true,
      subjectBg:
        "Заявка за нулиране – Регионален мениджър – Товарителница: {waybill}",
      subjectEn: "Reset delivery – Regional Manager – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nМоля Ви да съдействате за нулиране на следната доставка:\n\nТоварителница: {waybill}\n\nС уважение,",
      bodyEn:
        "Hello,\n\nPlease assist with resetting the following delivery:\n\nWaybill: {waybill}\n\nRegards,",
    },
    {
      id: "cs",
      email: "cs-employee@speedy.bg",
      purposeEn: "Case study with shipments",
      purposeBg: "Казус с пратки",
      subjectBg: "Казус с пратка – Товарителница: {waybill}",
      subjectEn: "Case study – Shipment waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nМоля да бъде разгледан следният казус:\n\nТоварителница: {waybill}\nОписание на казуса: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nPlease review the following case:\n\nWaybill: {waybill}\nCase description: \n\nRegards,",
    },
    {
      id: "ohd",
      email: "ohd.s.hd@speedy.bg",
      purposeEn: "Corrections for shipments",
      purposeBg: "Корекции за пратки",
      subjectBg: "Корекция на пратка – Товарителница: {waybill}",
      subjectEn: "Shipment correction request – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nМоля да бъде извършена корекция на следната пратка:\n\nТоварителница: {waybill}\nВид корекция: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nPlease process a correction for the following shipment:\n\nWaybill: {waybill}\nType of correction: \n\nRegards,",
    },
    {
      id: "insurance",
      email: "zastrahovki@speedy.bg",
      purposeEn: "Broken item from delivery",
      purposeBg: "Счупена стока при доставка",
      subjectBg: "Повредена стока при доставка – Товарителница: {waybill}",
      subjectEn: "Damaged item from delivery – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nДокладваме повреда на стока при следната доставка:\n\nТоварителница: {waybill}\nОписание на повредата: \nПриблизителна стойност: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nWe are reporting damaged goods from the following delivery:\n\nWaybill: {waybill}\nDescription of damage: \nApproximate value: \n\nRegards,",
    },
    {
      id: "cashier",
      email: "sps.cashier@speedy.bg",
      purposeEn: "Cash register and payment problems",
      purposeBg: "Проблеми с каса и плащания",
      subjectBg: "Проблем с каса/плащане – Товарителница: {waybill}",
      subjectEn: "Cash register / payment issue – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nДокладваме следния проблем с каса или плащане:\n\nТоварителница: {waybill}\nОписание на проблема: \nЗасегната сума: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nWe are reporting a cash register or payment issue:\n\nWaybill: {waybill}\nDescription of issue: \nAmount affected: \n\nRegards,",
    },
    {
      id: "logistics",
      email: selectedCity
        ? `gradska.logistika.${selectedCity}@speedy.bg`
        : null,
      purposeEn: "Lost delivery",
      purposeBg: "Изгубена доставка",
      cityDependent: true,
      subjectBg: "Изгубена доставка – Товарителница: {waybill}",
      subjectEn: "Lost delivery – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nДокладваме изгубена доставка:\n\nТоварителница: {waybill}\nАдрес за доставка: \nДата на изпращане: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nWe are reporting a lost delivery:\n\nWaybill: {waybill}\nDelivery address: \nDispatch date: \n\nRegards,",
    },
    {
      id: "security",
      email: "security.request@speedy.bg",
      purposeEn: "ZPAU – Previous administrative report",
      purposeBg: "ЗПАУ – Предишен административен доклад",
      subjectBg:
        "ЗПАУ – Предишен административен доклад – Товарителница: {waybill}",
      subjectEn: "ZPAU – Previous administrative report – Waybill: {waybill}",
      bodyBg:
        "Здравейте,\n\nПодаваме заявка за предишен административен доклад (ЗПАУ):\n\nТоварителница: {waybill}\nДата на инцидента: \nОписание: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nWe are submitting a request for a previous administrative report (ZPAU):\n\nWaybill: {waybill}\nDate of incident: \nDescription: \n\nRegards,",
    },
    {
      id: "it",
      email: "it.hd@speedy.bg",
      purposeEn: "IT request – broken technology / equipment",
      purposeBg: "ИТ заявка – повредена технология / оборудване",
      subjectBg: "ИТ Заявка – Повредена технология – Товарителница: {waybill}",
      subjectEn: "IT Request – Equipment issue – Code: {waybill}",
      bodyBg:
        "Здравейте,\n\nПодаваме заявка за техническа поддръжка:\n\nТоварителница/Код: {waybill}\nОписание на проблема: \nЗасегнато оборудване: \n\nС уважение,",
      bodyEn:
        "Hello,\n\nWe are submitting a technical support request:\n\nWaybill/Code: {waybill}\nDescription of issue: \nAffected equipment: \n\nRegards,",
    },
  ];

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

          <div className={styles.emailControls}>
            <div className={styles.citySelector}>
              <label className={styles.controlLabel} htmlFor="city-select">
                {isBg ? "Град / Регион:" : "City / Region:"}
              </label>
              <select
                id="city-select"
                className={styles.citySelect}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">
                  {isBg ? "— Изберете град —" : "— Select city —"}
                </option>
                {CITIES.map((city) => (
                  <option key={city.value} value={city.value}>
                    {isBg ? city.labelBg : city.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.waybillRow}>
              <label className={styles.controlLabel} htmlFor="waybill-input">
                {isBg ? "Товарителница:" : "Waybill:"}
              </label>
              <input
                id="waybill-input"
                className={styles.waybillInput}
                type="text"
                placeholder={
                  isBg
                    ? "Въведете номер на товарителница..."
                    : "Enter waybill number..."
                }
                value={waybillValue}
                onChange={(e) => setWaybillValue(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.emailList}>
            {contacts.map((contact) => {
              const needsCity = contact.cityDependent && !selectedCity;
              const notConfigured =
                contact.cityDependent && selectedCity && !contact.email;

              return (
                <div key={contact.id} className={styles.emailRow}>
                  <div className={styles.emailMain}>
                    <span className={styles.emailPurpose}>
                      {isBg ? contact.purposeBg : contact.purposeEn}
                    </span>
                    <div className={styles.emailActions}>
                      {needsCity ? (
                        <span className={styles.noCityText}>
                          {isBg ? "Изберете град по-горе" : "Select city above"}
                        </span>
                      ) : notConfigured ? (
                        <span className={styles.noCityText}>
                          {isBg
                            ? "Не е конфигуриран — попълнете REGIONAL_MANAGERS"
                            : "Not configured — fill in REGIONAL_MANAGERS"}
                        </span>
                      ) : (
                        <>
                          <span className={styles.emailAddress}>
                            {contact.email}
                          </span>
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
                            onClick={() => composeEmail(contact)}
                          >
                            {t("cheatSheet.compose")}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
