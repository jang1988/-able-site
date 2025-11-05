import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Panel.module.css';

export default function Panel() {
	return (
		<section className={styles.hero}>
			<Image
				src='/panel2.webp'
				alt='Hero background'
				fill
				priority
				className={styles.image}
			/>

			<div className={styles.overlay}>
				<div className={styles.textBlock}>
					<p className={styles.title}>
					Elektrownie fotowoltaiczne. Nowoczesne rozwiązania dla Twojej firmy
					</p>

					<div className={styles.wrapper}>
						<p className={styles.description}>
						Projektujemy i budujemy elektrownie fotowoltaiczne,
						zapewniając efektywne i niezawodne źródła energii słonecznej, które obniżają koszty i wspierają zrównoważony rozwój Twojej firmy
						</p>

						<div className={styles.buttons}>
							<a href='tel:+48123456789' className={styles.btnSecondary}>
								<span>ZADZWOŃ</span>
								<PhoneCall size={18} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
