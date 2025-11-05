import styles from './CallToAction.module.css';

export default function CallToAction() {
	return (
		<section className={styles.section}>
			<div className={styles.contentWrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						Zwiększ wydajność swojej infrastruktury już teraz
					</h1>
					<p className={styles.text}>
						Zmieniaj złożone wyzwania elektryczne dzięki naszym precyzyjnym
						rozwiązaniom inżynierii sieciowej
					</p>
					<a href='tel:+1234567890' className={styles.button}>
						Zadzwoń do nas teraz
					</a>
				</div>
			</div>
		</section>
	);
}
