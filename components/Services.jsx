import styles from './Services.module.css';

export default function Services() {
	return (
		<div className={styles.container}>
			<p className={styles.title}>
				Comprehensive underground cable network solutions
			</p>
			<p className={styles.description}>
				We design and install sophisticated underground electrical networks that
				minimize surface disruption. Our solutions adapt to diverse terrain and
				infrastructure requirements.
			</p>
			<div className={styles.columns}>
				<div className={styles.column}>
					<img
						src="/serviceIcon1.svg"
						alt='Transformer'
						className={styles.icon}
					/>
					<p className={styles.columnTitle}>
						Innovative small-scale transformer station design small-scale
					</p>
				</div>
				<div className={styles.column}>
					<img
						src="/serviceIcon2.svg"
						alt='Cable'
						className={styles.icon}
					/>
					<p className={styles.columnTitle}>
						High-performance medium and low voltage cable solutions
					</p>
				</div>
				<div className={styles.column}>
					<img
						src="/serviceIcon3.svg"
						alt='Network'
						className={styles.icon}
					/>
					<p className={styles.columnTitle}>
						Scalable underground electrical network configurations
					</p>
				</div>
			</div>
			<div className={styles.buttons}>
				<button className={styles.learnMore}>Learn more</button>
			</div>
		</div>
	);
}
