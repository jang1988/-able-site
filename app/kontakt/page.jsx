// app/kontakt/page.jsx
import ContactMap from '@/components/ContactMap'
import styles from './page.module.css';

export const metadata = {
  title: 'Kontakt | BIGBUD',
  description: 'Skontaktuj się z BIGBUD Sp. z o.o. w sprawie projektów energetycznych i infrastruktury elektrycznej.',
  // Добавить для SEO
  other: {
    'script:ld+json': {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'BIGBUD Sp. z o.o.',
      'url': 'https://yourdomain.com',
      'logo': 'https://yourdomain.com/logo.png',
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+48-795-216-920',
          'contactType': 'customer service',
          'email': 'biuro@bigbudcom.net',
          'availableLanguage': ['Polish', 'English']
        }
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'ul. Piękna 7',
        'addressLocality': 'Niepołomice',
        'postalCode': '32-005',
        'addressCountry': 'PL'
      }
    }
  }
};

export default function Kontakt() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.cardInner}>
					<div className={styles.card}>
						<svg
							className={styles.icon}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<rect x='2' y='4' width='20' height='16' rx='2' />
							<path d='M2 7l10 7 10-7' />
						</svg>
						<p className={styles.title}>E-mail</p>
						<p className={styles.description}>
							Kontaktuj się z nami w sprawach projektów energetycznych i infrastruktury elektrycznej.
						</p>
						<a href='mailto:biuro@bigbudcom.net' className={styles.link}>
							biuro@bigbudcom.net
						</a>
					</div>

					<div className={styles.card}>
						<svg
							className={styles.icon}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' />
						</svg>
						<p className={styles.title}>Telefon</p>
						<p className={styles.description}>
							Pozyskaj bezpośredni kontakt z naszym biurem w sprawach technicznych i administracyjnych.
						</p>
						<a href='tel:+48795216920' className={styles.link}>
							+48 795 216 920
						</a>
					</div>

					<div className={styles.card}>
						<svg
							className={styles.icon}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z' />
							<circle cx='12' cy='10' r='3' />
						</svg>
						<p className={styles.title}>Adres</p>
						<p className={styles.description}>
							Biuro i centrala BIGBUD Sp. z o.o.
						</p>
						<a
							href='https://maps.app.goo.gl/ajLdgz4XRGnSpwpT7'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.link}
						>
							ul. Piękna 7, 32-005 Niepołomice
						</a>
					</div>

					<div className={styles.card}>
						<svg
							className={styles.icon}
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
						>
							<path d='M12 2a10 10 0 100 20 10 10 0 000-20z' />
							<path d='M12 6v6l4 2' />
						</svg>
						<p className={styles.title}>Dane firmy</p>
						<p className={styles.description}>
							BIGBUD Sp. z o.o. <br />
							KRS: 0001117272 <br />
							NIP: 679-330-46-42 <br />
							REGON: 529195238
						</p>
					</div>
				</div>

				<ContactMap />
			</div>
		</>
	);
}