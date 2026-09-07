import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
	title: 'Galeria realizacji – BIGBUD | Projekty elektroenergetyczne',

	description:
		'Galeria realizacji BIGBUD. Zobacz nasze projekty elektroenergetyczne, linie energetyczne, stacje elektroenergetyczne, farmy wiatrowe i instalacje fotowoltaiczne.',

	keywords: [
		'galeria BIGBUD',
		'realizacje elektroenergetyczne',
		'projekty elektroenergetyczne',
		'budowa linii energetycznych',
		'linie energetyczne',
		'stacje elektroenergetyczne',
		'farmy wiatrowe',
		'instalacje fotowoltaiczne',
		'infrastruktura energetyczna'
	]
}

const galleryImages = [
	{
		src: '/stacji.webp',
		alt: 'Stacja elektroenergetyczna'
	},
	{
		src: '/panel2.webp',
		alt: 'Instalacja fotowoltaiczna'
	},
	{
		src: '/veter3.webp',
		alt: 'Infrastruktura farmy wiatrowej'
	},
	{
		src: '/tech2.webp',
		alt: 'Infrastruktura elektroenergetyczna'
	},
	{
		src: '/gibkaja.webp',
		alt: 'Infrastruktura techniczna'
	},
	{
		src: '/budowa2.webp',
		alt: 'Budowa infrastruktury elektroenergetycznej'
	},
	{
		src: '/tech1.webp',
		alt: 'Prace przy infrastrukturze elektroenergetycznej'
	},
	{
		src: '/veter1.webp',
		alt: 'Infrastruktura farmy wiatrowej'
	},
	{
		src: '/budowa.webp',
		alt: 'Kable elektroenergetyczne'
	},
	{
		src: '/cabekSkyFull.webp',
		alt: 'Infrastruktura elektroenergetyczna'
	},
	{
		src: '/tech2.webp',
		alt: 'Stacja elektroenergetyczna'
	},
	{
		src: '/panel.webp',
		alt: 'Panele fotowoltaiczne'
	}
]

export default function Geleria() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.title}>Galeria realizacji</h1>
				<div className={styles.galleryGrid}>
					{galleryImages.map((image, index) => {
						// Определяем размеры для каждого элемента
						let sizeClass = styles.medium
						if (index === 0 || index === 5 || index === 10) sizeClass = styles.large
						if (index === 4 || index === 7) sizeClass = styles.wide
						if (index === 9) sizeClass = styles.tall;

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
										sizes="(max-width: 1920px) 100vw, 100vw"
										className={styles.image}
										quality={85}
										priority={index < 4}
									/>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
