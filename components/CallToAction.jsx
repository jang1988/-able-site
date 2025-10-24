import styles from './CallToAction.module.css';

export default function CallToAction() {
	return (
		<section className={styles.section}>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>Power your infrastructure now</h1>
					<p className={styles.text}>
						Transform complex electrical challenges with our precision
						underground network engineering solutions.
					</p>
					<a href='tel:+1234567890' className={styles.button}>
						Call us now
					</a>
				</div>
			</div>
		</section>
	);
}
