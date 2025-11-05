import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				{/* Левая часть — текст */}
				<div className={styles.textBlock}>
					<h1 className={styles.title}>Farmy Wiatrowe</h1>

					<p className={styles.description}>
						Projektujemy i realizujemy farmy wiatrowe, dostarczając nowoczesne
						rozwiązania dla zrównoważonej i czystej energii przyszłości
					</p>
				</div>

				{/* Правая часть — галерея */}
				<div className={styles.gallery}>
					<div className={`${styles.imageWrapper} ${styles.tall}`}>
						<Image
							src='/veter5.gif'
							alt='Drilling operation'
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Odnawialne źródła energii</div>
					</div>

					<div className={styles.imageWrapper}>
						<Image
							src='/veter2.webp'
							alt='Transformer station'
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Wysoka efektywność</div>
					</div>

					<div className={styles.imageWrapper}>
						<Image
							src='/veter3.webp'
							alt='Underground cable line'
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Niskie koszty eksploatacji</div>
					</div>

					<div className={`${styles.imageWrapper} ${styles.wide}`}>
						<Image
							src='/veter1.webp'
							alt='Protective conduit system'
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Integracja z siecią</div>
					</div>
				</div>
			</div>
		</section>
	);
}
