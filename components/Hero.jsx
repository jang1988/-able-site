import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<Image
				src='/budowa2.webp'
				alt='Hero background'
				fill
				priority
				className={styles.image}
			/>

			<div className={styles.overlay}>
				<div className={styles.textBlock}>
					<p className={styles.title}>
						Budowa i modernizacja linii napowietrznych
						<br />
						6-30kV
					</p>

					<div className={styles.wrapper}>
						<p className={styles.description}>
							Dostarczamy bezpieczne, efektywne i nowoczesne rozwiązania
							energetyczne, które wspierają rozwój Twojego biznesu i zapewniają
							niezawodne dostawy energii na lata
						</p>

						{/* <div className={styles.buttons}>
							<Link href='/kontakt' className={styles.btnPrimary}>
								<span>Kontakt</span>
							</Link>
							<a href='tel:+48123456789' className={styles.btnSecondary}>
								<span>ZADZWOŃ</span>
								<PhoneCall size={18} />
							</a>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
