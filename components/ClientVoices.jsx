import styles from './ClientVoices.module.css';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function ClientVoices() {
  const reviews = [
    {
      name: 'James Henderson',
      role: 'Operations Lead, GridTech',
      text: 'Their underground cable network solved our most complex electrical challenges with surgical precision.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Chief Engineer, Urban Power',
      text: 'Unparalleled engineering that delivered beyond our expectations delivered beyond our expectations.',
    },
    {
      name: 'Thomas Klein',
      role: 'Infrastructure Director, Regional Utilities',
      text: 'A breakthrough in underground electrical infrastructure design in underground electrical infrastructure design.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Client voices</h2>
        <p className={styles.subtitle}>
          Real experiences from partners who transformed their infrastructure
        </p>

        <div className={styles.cards}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.text}>{r.text}</p>

              <div className={styles.authorBlock}>
                <div className={styles.avatar}>
                  <Image
                    src='/avatar.webp'
                    alt={r.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className={styles.name}>{r.name}</p>
                  <p className={styles.role}>{r.role}</p>
                </div>
              </div>

              <div className={styles.logo}>
                <Image
                  src='/fakeLogo.svg'
                  alt='Webflow logo'
                  width={200}
                  height={60}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
