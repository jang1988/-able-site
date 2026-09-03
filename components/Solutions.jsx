import { Package } from 'lucide-react'
import Image from 'next/image'
import styles from './Solutions.module.css'

export default function Solutions() {
	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				<Image
					src="/power-lines.webp"
					alt="Budowa i modernizacja linii napowietrznych 6–30 kV"
					width={800}
					height={600}
					className={styles.image}
				/>
			</div>

			<div className={styles.contentSection}>
				<p className={styles.title}>
					Budowa i modernizacja linii napowietrznych
					<br />
					6-30kV
				</p>

				<div className={styles.features}>
					<div className={styles.feature}>
						<Package
							className={styles.featureIcon}
							size={24}
						/>
						<span>Minimalna ingerencja w teren</span>
					</div>

					<div className={styles.feature}>
						<Package
							className={styles.featureIcon}
							size={24}
						/>
						<span>Podziemne linie kablowe z precyzyjną inżynierią</span>
					</div>

					<div className={styles.feature}>
						<Package
							className={styles.featureIcon}
							size={24}
						/>
						<span>Zrównoważona infrastruktura</span>
					</div>
				</div>
			</div>
		</div>
	)
}
