import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Panel.module.css';

export default function Panel() {
  return (
    <section className={styles.hero}>
      <Image
        src="/panel2.webp"
        alt="Elektrownia fotowoltaiczna"
        fill
        className={styles.image}
      />

      <div className={styles.overlay}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            Elektrownie fotowoltaiczne. Nowoczesne rozwiązania dla Twojej firmy
          </h2>

          <div className={styles.wrapper}>
            <p className={styles.description}>
              Projektujemy i budujemy elektrownie fotowoltaiczne, zapewniając
              efektywne i niezawodne źródła energii słonecznej, które obniżają
              koszty i wspierają zrównoważony rozwój Twojej firmy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}