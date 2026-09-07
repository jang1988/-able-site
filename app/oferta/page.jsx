import Image from 'next/image'

import styles from './page.module.css'

export const metadata = {
	title: 'Oferta – Usługi elektroenergetyczne | BIGBUD',

	description:
		'BIGBUD oferuje kompleksowe usługi elektroenergetyczne: budowę i modernizację linii kablowych i napowietrznych 6–30 kV, stacji elektroenergetycznych NN i SN oraz kanalizacji światłowodowej.',

	keywords: [
		'usługi elektroenergetyczne',
		'oferta BIGBUD',
		'budowa linii energetycznych',
		'modernizacja linii energetycznych',
		'linie kablowe',
		'linie napowietrzne',
		'linie SN 6–30 kV',
		'skablowanie linii napowietrznych',
		'stacje elektroenergetyczne',
		'stacje NN i SN',
		'kanalizacja światłowodowa',
		'wykonawstwo elektroenergetyczne',
		'urządzenia elektroenergetyczne'
	]
}

const services = [
	'Budowa, modernizacja i remont linii kablowych wysokiego, średniego i niskiego napięcia',

	'Budowa i modernizacja linii napowietrznych 6–30 kV',

	'Skablowania linii napowietrznych',

	'Wykonanie kanalizacji światłowodowej',

	'Budowa i modernizacja stacji elektroenergetycznych NN i SN',

	'Przebudowy w miejscach kolizji z projektowaną infrastrukturą',

	'Kompletacja dostaw urządzeń elektroenergetycznych'
]

export default function Oferta() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Usługi elektroenergetyczne</h1>
					<ul className={styles.list}>
						{services.map((service, index) => (
							<li
								key={service}
								className={styles.item}
								style={{
									animationDelay: `${0.15 + index * 0.08}s`
								}}
							>
								<span className={styles.service}>{service}</span>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.imageBlock}>
					<Image
						src="/oferta2.png"
						alt="BIGBUD – usługi elektroenergetyczne"
						fill
						sizes="(max-width: 1920px) 100vw, 100vw"
						priority
						className={styles.image}
					/>

					<div className={styles.imageOverlay} />

					<div className={styles.imageBadge}>
						<span>BIGBUD</span>

						<strong>OFERTA</strong>
					</div>
				</div>
			</div>
		</div>
	)
}
