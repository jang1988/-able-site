import { ChevronRight, Package } from 'lucide-react';
import Image from 'next/image';
import styles from './Solutions.module.css';

export default function Solutions() {
	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				<Image
					src='/drilling.webp'
					alt='Hero background'
					width={800}
					height={600}
					priority
					className={styles.image}
				/>
			</div>

			<div className={styles.contentSection}>
				<h1 className={styles.title}>
					Advanced electrical infrastructure solutions
				</h1>

				<p className={styles.description}>
					We deliver cutting-edge underground electrical networks that transform
					power distribution. Our compact transformer stations maximize
					efficiency and reliability.
				</p>

				<div className={styles.features}>
					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Minimal ground disruption</span>
					</div>

					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Underground cable systems with precision engineering</span>
					</div>

					<div className={styles.feature}>
						<Package className={styles.featureIcon} size={24} />
						<span>Sustainable infrastructure</span>
					</div>
				</div>

				<div className={styles.buttons}>
					<button className={styles.primaryButton}>Explore</button>
					<button className={styles.secondaryButton}>
						Details
						<ChevronRight size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}
