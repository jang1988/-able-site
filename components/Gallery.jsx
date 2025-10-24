import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				{/* Левая часть — текст */}
				<div className={styles.textBlock}>
					<h1 className={styles.title}>Empowering modern infrastructure</h1>

					<p className={styles.description}>
						Our underground systems revolutionize energy distribution with
						precision, safety, and design aesthetics that stand the test of time.
					</p>

					<div className={styles.authorBlock}>
						<div>
							<p className={styles.name}>Michael Roberts</p>
							<p className={styles.position}>
								Infrastructure Director, Energy Corp
							</p>
						</div>

						<Image
							src="/fakeLogo.svg"
							alt="Company logo"
							width={80}
							height={80}
							className={styles.logo}
						/>
					</div>
				</div>

				{/* Правая часть — галерея */}
				<div className={styles.gallery}>
					<div className={`${styles.imageWrapper} ${styles.tall}`}>
						<Image
							src="/cabelSky.webp"
							alt="Drilling operation"
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Drilling systems</div>
					</div>

					<div className={styles.imageWrapper}>
						<Image
							src="/gibkaja.webp"
							alt="Transformer station"
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Transformer stations</div>
					</div>

					<div className={styles.imageWrapper}>
						<Image
							src="/pipes.webp"
							alt="Underground cable line"
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Underground cabling</div>
					</div>

					<div className={`${styles.imageWrapper} ${styles.wide}`}>
						<Image
							src="/corrugated.webp"
							alt="Protective conduit system"
							fill
							className={styles.image}
						/>
						<div className={styles.overlay}>Protective conduit systems</div>
					</div>
				</div>
			</div>
		</section>
	);
}
