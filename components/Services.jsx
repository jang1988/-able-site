import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Budowa i modernizacja stacji elektroenergetycznych
      </h2>

      <p className={styles.description}>
        Realizujemy budowę i modernizację stacji elektroenergetycznych,
        zapewniając niezawodne, bezpieczne i nowoczesne rozwiązania dla
        efektywnego zarządzania energią.
      </p>

      <div className={styles.columns}>
        <div className={styles.column}>
          <img
            src="/serviceIcon1.svg"
            alt="Projektowanie stacji elektroenergetycznych"
            className={styles.icon}
          />

          <h3 className={styles.columnTitle}>
            Nowoczesne projekty stacji elektroenergetycznych dostosowane do
            potrzeb
          </h3>
        </div>

        <div className={styles.column}>
          <img
            src="/serviceIcon2.svg"
            alt="Rozwiązania dla sieci wysokiego i średniego napięcia"
            className={styles.icon}
          />

          <h3 className={styles.columnTitle}>
            Wysokowydajne rozwiązania dla sieci wysokiego i średniego napięcia
          </h3>
        </div>

        <div className={styles.column}>
          <img
            src="/serviceIcon3.svg"
            alt="Systemy zasilania dla infrastruktury elektroenergetycznej"
            className={styles.icon}
          />

          <h3 className={styles.columnTitle}>
            Elastyczne konfiguracje systemów zasilania dla rozbudowy
            infrastruktury
          </h3>
        </div>
      </div>
    </section>
  );
}