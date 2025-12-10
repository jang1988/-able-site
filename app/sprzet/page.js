import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
	title: 'Sprzęt | BIGBUD',
	description: 'Galeria naszych realizacji energetycznych oraz sprzętu używanego przy realizacjach BIGBUD.',
	openGraph: {
		title: 'Sprzęt | BIGBUD',
		description: 'Zobacz sprzęt, którego używamy przy projektach energetycznych i infrastrukturalnych.',
		images: ['/tech1.webp'],
		type: 'website',
		locale: 'pl_PL',
	},
	alternates: {
		canonical: '/sprzet',
	},
};

const galleryImages = [
	{
		src: '/tech1.webp',
		alt: 'Farmy wiatrowe',
		title: 'Minikoparka cat 302.7',
	},
	{
		src: '/tech2.webp',
		alt: 'Panele słoneczne',
		title: 'Samochód ciężarowy z HDS VOLVO FE 320 HMF 2120',
	},
	{
		src: '/tech3.webp',
		alt: 'Turbiny wiatrowe',
		title: 'Koparko-ładowarka Caterpillar 432',
	},
	{
		src: '/tech4.webp',
		alt: 'Instalacje podziemne',
		title: 'Wciągarka Hydrauliczna Tesmec ARS405',
	},
];

export default function Sprzet() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.galleryGrid}>
					{galleryImages.map((image, index) => (
						<div key={index} className={styles.galleryItem}>
							<div className={styles.imageContainer}>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									className={styles.image}
									quality={85}
									priority={index < 2}
								/>
								<div className={styles.imageTitle}>
									<span>{image.title}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
