import styles from './Services.module.css';

export default function Services() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>
				Budowa i modernizacja stacji elektroenergetycznych
			</p>
			<p className={styles.description}>
				Realizujemy budowę i modernizację stacji elektroenergetycznych,
				zapewniając niezawodne, bezpieczne i nowoczesne rozwiązania dla
				efektywnego zarządzania energią
			</p>
			<div className={styles.columns}>
				<div className={styles.column}>
					<img
						src='/serviceIcon1.svg'
						alt='Transformer'
						className={styles.icon}
					/>
					<p className={styles.columnTitle}>
						Nowoczesne projekty stacji elektroenergetycznych dostosowane do
						potrzeb
					</p>
				</div>
				<div className={styles.column}>
					<img src='/serviceIcon2.svg' alt='Cable' className={styles.icon} />
					<p className={styles.columnTitle}>
						Wysokowydajne rozwiązania dla sieci wysokiego i średniego napięcia
					</p>
				</div>
				<div className={styles.column}>
					<img src='/serviceIcon3.svg' alt='Network' className={styles.icon} />
					<p className={styles.columnTitle}>
						Elastyczne konfiguracje systemów zasilania dla rozbudowy
						infrastruktury
					</p>
				</div>
			</div>
			{/* <div className={styles.buttons}>
				<button className={styles.learnMore}>Dowiedz się więcej</button>
			</div> */}
		</div>
	);
}
