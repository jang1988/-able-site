import Image from 'next/image'

import styles from './page.module.css'

export const metadata = {
	title: 'O nas – BIGBUD | Doświadczenie w branży elektroenergetycznej',

	description:
		'Poznaj firmę BIGBUD – specjalistów w realizacji projektów elektroenergetycznych. Doświadczenie, profesjonalny zespół i kompleksowa realizacja inwestycji energetycznych.',

	keywords: [
		'BIGBUD',
		'o nas BIGBUD',
		'firma elektroenergetyczna',
		'projekty elektroenergetyczne',
		'realizacja inwestycji energetycznych',
		'infrastruktura elektroenergetyczna',
		'wykonawstwo elektroenergetyczne',
		'branża energetyczna'
	]
}

export default function ONas() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>O firmie BIGBUD</h1>
					<p className={styles.text}>
						Firma <strong>BIGBUD</strong> zajmuje się kompleksową realizacją projektów w branży
						energetycznej. Naszą działalność rozpoczęliśmy w 2024 roku, opierając się na zgranym
						zespole profesjonalistów z wieloletnim doświadczeniem w tej dziedzinie.
					</p>

					<p className={styles.text}>
						BIGBUD realizuje zlecenia zarówno dla przedsiębiorstw energetycznych, jak i dla
						inwestorów prywatnych, znajdując indywidualne rozwiązania dla każdego zadania. Dzięki
						temu jesteśmy w stanie wykonywać projekty terminowo oraz utrzymywać najwyższe standardy
						jakości, co potwierdzają liczne rekomendacje firm, z którymi współpracujemy.
					</p>
				</div>

				<div className={styles.imageBlock}>
					<Image
						src="/onas.webp"
						alt="BIGBUD – firma z branży elektroenergetycznej"
						fill
						priority
						sizes="(max-width: 1920px) 100vw, 100vw"
						className={styles.image}
					/>

					<div className={styles.imageOverlay} />

					<div className={styles.imageBadge}>
						<span>BIGBUD</span>
						<strong>O NAS</strong>
					</div>
				</div>
			</div>
		</div>
	)
}
