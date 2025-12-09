import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
	title: 'Geleria | BIGBUD',
	description: 'Galeria naszych realizacji energetycznych',
};

const galleryImages = [
	{
		src: '/stacji.webp',
		alt: 'Farmy wiatrowe',
	},
	{
		src: '/panel2.webp',
		alt: 'Panele słoneczne',
	},
	{
		src: '/veter3.webp',
		alt: 'Turbiny wiatrowe',
	},
	{
		src: '/tech2.webp',
		alt: 'Instalacje podziemne',
	},
	{
		src: '/gibkaja.webp',
		alt: 'Systemy ochronne',
	},
	{
		src: '/budowa2.webp',
		alt: 'Transformatory',
	},
	{
		src: '/tech1.webp',
		alt: 'Montaż paneli',
	},
	{
		src: '/veter1.webp',
		alt: 'Farmy wiatrowe nocą',
	},
	{
		src: '/budowa.webp',
		alt: 'Kable energetyczne',
	},
	{
		src: '/cabekSkyFull.webp',
		alt: 'Systemy wentylacji',
	},
	{
		src: '/tech2.webp',
		alt: 'Stacje transformatorowe',
	},
	{
		src: '/panel.webp',
		alt: 'Panele dachowe',
	},
	
];

export default function Geleria() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.galleryGrid}>
					{galleryImages.map((image, index) => {
						// Определяем размеры для каждого элемента
						let sizeClass = styles.medium;
						if (index === 0 || index === 5 || index === 10)
							sizeClass = styles.large;
						if (index === 4 || index === 7) sizeClass = styles.wide;
						if (index === 9 || index === 9) sizeClass = styles.tall;

						return (
							<div
								key={index}
								className={`${styles.galleryItem} ${sizeClass}`}
								data-category={image.category}
							>
								<div className={styles.imageContainer}>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className={styles.image}
										quality={85}
										priority={index < 4}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
