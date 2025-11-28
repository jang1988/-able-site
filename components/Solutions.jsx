import { ChevronRight, Package } from 'lucide-react';
import Image from 'next/image';
import styles from './Solutions.module.css';

export default function Solutions() {
	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				<Image
					src='/power-lines.webp'
					alt='Budowa'
					width={800}
					height={600}
					priority
					className={styles.image}
				/>
			</div>

			<div className={styles.contentSection}>
				<p className={styles.title}>
					Budowa, modernizacja i remont linii kablowych wysokiego, średniego i
					niskiego napięcia. Skablowania linii napowietrznych.
				</p>

				<div className={styles.features}>
					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Minimalna ingerencja w teren</span>
					</div>

					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Podziemne linie kablowe z precyzyjną inżynierią</span>
					</div>

					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Zrównoważona infrastruktura</span>
					</div>
				</div>

				{/* <div className={styles.buttons}>
					<button className={styles.primaryButton}>
						<span>Odkrywaj</span>
					</button>
					<button className={styles.secondaryButton}>
						Szczegóły
						<ChevronRight size={20} />
					</button>
				</div> */}
			</div>
		</div>
	);
}
