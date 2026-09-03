import Image from 'next/image'

import styles from './page.module.css'

export const metadata = {
	title: 'Oferta',

	description:
		'Profesjonalne usługi elektroenergetyczne: budowa i modernizacja linii napowietrznych i kablowych, stacji NN i SN, kanalizacji światłowodowej oraz kompletacja urządzeń.'
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
