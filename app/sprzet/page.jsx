import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
	title: 'Sprzęt budowlany i energetyczny | BIGBUD',
	description:
		'Sprzęt budowlany i energetyczny BIGBUD. Minikoparki, koparko-ładowarki, wciągarki hydrauliczne, wiertnice oraz samochody z HDS wykorzystywane przy realizacji inwestycji energetycznych i infrastrukturalnych.',
	keywords: [
		'sprzęt budowlany',
		'sprzęt energetyczny',
		'maszyny budowlane',
		'sprzęt budowlany BIGBUD',
		'maszyny do prac energetycznych',
		'minikoparka',
		'koparko-ładowarka',
		'wiertnica',
		'wciągarka hydrauliczna',
		'samochód HDS'
	]
}

const galleryImages = [
	{
		src: '/tech1.webp',
		alt: 'Minikoparka CAT 302.7',
		title: 'Minikoparka CAT 302.7'
	},
	{
		src: '/tech2.webp',
		alt: 'Samochód ciężarowy Volvo FE 320 z HDS HMF 2120',
		title: 'Samochód ciężarowy z HDS VOLVO FE 320 HMF 2120'
	},
	{
		src: '/tech3.webp',
		alt: 'Koparko-ładowarka Caterpillar 432',
		title: 'Koparko-ładowarka Caterpillar 432'
	},
	{
		src: '/tech6.webp',
		alt: 'Wiertnica GRUNDODRILL Tracto Technik 15 XPT',
		title: 'GRUNDODRILL Tracto Technik 15 XPT'
	},
	{
		src: '/tech4.webp',
		alt: 'Wciągarka hydrauliczna Tesmec ARS405',
		title: 'Wciągarka Hydrauliczna Tesmec ARS405'
	}
]

export default function Sprzet() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.title}>Sprzęt budowlany i energetyczny</h1>
				<div className={styles.galleryGrid}>
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className={styles.galleryItem}
						>
							<div className={styles.imageContainer}>
								<Image
									src={image.src}
									alt={image.alt}
									fill
									sizes="(max-width: 1920px) 100vw, 100vw"
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
	)
}
