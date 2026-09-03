import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Zwiększ wydajność swojej infrastruktury już teraz
          </h2>

          <p className={styles.text}>
            Pokonuj złożone wyzwania związane z infrastrukturą
            elektroenergetyczną dzięki naszym precyzyjnym rozwiązaniom
            inżynieryjnym.
          </p>

          <Link
            href="/kontakt"
            className={styles.button}
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  )
}