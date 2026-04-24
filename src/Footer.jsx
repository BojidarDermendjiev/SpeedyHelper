import { useTranslation } from "react-i18next";
import styles from "./assets/styles/footer.module.css";

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon
      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const RSSIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerMain}>
          <div className={styles.logoGroup}>
            <div className={styles.networkBadge}>
              <div className={styles.networkLabel}>
                <span>NETWORK</span>
                <span>MEMBER OF</span>
              </div>
              <div className={styles.badgeDivider} />
              <div className={styles.geopostLogo}>
                <svg
                  viewBox="0 0 28 20"
                  className={styles.geopostSymbol}
                  aria-hidden="true"
                >
                  <path
                    d="M4 2 L13 10 L4 18"
                    stroke="#e63946"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 2 L21 10 L12 18"
                    stroke="#333"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={styles.geopostName}>GEOPOST</span>
              </div>
            </div>
          </div>

          <div className={styles.copyright}>
            1998 – {year} © {t("footer.allRightsReserved")}
          </div>

          <div className={styles.social}>
            <span className={styles.followLabel}>{t("footer.followUs")}</span>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/SpeedyBG"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/SpeedyBG"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/speedybulgaria"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/speedy-ad"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.speedy.bg/rss"
                aria-label="RSS"
                target="_blank"
                rel="noreferrer"
              >
                <RSSIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <a href="/terms">{t("footer.termsAndCookies")}</a>
          <span className={styles.dot}> • </span>
          <a href="/privacy">{t("footer.privacyPolicy")}</a>
        </div>
      </div>
    </footer>
  );
}
