import Image from 'next/image';
import styles from './ContactInfo.module.css';

export default function ContactInfo() {
	return (
		<div className={styles.container}>
			<Image
				src='/kV.webp'
				alt='Company logo'
				className={styles.imageDecoration}
				width={1826}
				height={948}
			/>
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
					<h2 className={styles.title}>Contact</h2>
					<p className={styles.description}>
						Direct communication for your electrical infrastructure needs
					</p>
					<a
						href='mailto:connect@electricalnetworks.com'
						className={styles.link}
					>
						connect@electricalnetworks.com
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
					<h2 className={styles.title}>Call</h2>
					<p className={styles.description}>
						Speak with our technical experts for immediate project support
					</p>
					<a href='tel:+18882746453' className={styles.link}>
						+1 (888) 274-6453
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
					<h2 className={styles.title}>Location</h2>
					<p className={styles.description}>
						Our engineering headquarters centrally positioned for rapid response
					</p>
					<a
						href='https://maps.google.com/?q=1200+Infrastructure+Way,+Denver+CO+80202'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}
					>
						1200 Infrastructure Way, Denver CO 80202
					</a>
				</div>
			</div>
		</div>
	);
}
