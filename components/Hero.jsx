import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<Image
				src="/budowa2.webp"
				alt="Hero background"
				fill
				priority
				className={styles.image}
			/>

			<div className={styles.overlay}>
				<div className={styles.textBlock}>
					<p className={styles.title}>
						Budowa, modernizacja i remont linii kablowych<br/>wysokiego, średniego i
						niskiego napięcia.<br/>Skablowania linii napowietrznych
					</p>

					<div className={styles.wrapper}>
						<p className={styles.description}>
							Dostarczamy bezpieczne, efektywne i nowoczesne rozwiązania
							energetyczne, które wspierają rozwój Twojego biznesu i zapewniają
							niezawodne dostawy energii na lata
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
