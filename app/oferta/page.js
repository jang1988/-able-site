import styles from './page.module.css';

export const metadata = {
	title: 'Oferta | BIGBUD',
	description: 'Profesjonalne usługi elektroenergetyczne: budowa i modernizacja linii napowietrznych i kablowych, stacji NN i SN, kanalizacji światłowodowej oraz kompletacja urządzeń.',
};

export default function Oferta() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Oferta</h1>
				<ul className={styles.list}>
					<li>Budowa i modernizacja linii napowietrznych 6-30kV</li>
					<li>Budowa, modernizacja i remont linii kablowych wysokiego, średniego i niskiego napięcia</li>
					<li>Skablowania linii napowietrznych</li>
					<li>Wykonanie kanalizacji światłowodowej</li>
					<li>Budowa i modernizacja stacji elektroenergetycznych NN i SN</li>
					<li>Przebudowy w miejscach kolizji z projektowaną infrastrukturą</li>
					<li>Kompletacja dostaw urządzeń elektroenergetycznych</li>
				</ul>
			</div>
		</div>
	);
}
