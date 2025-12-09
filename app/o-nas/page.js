import styles from './page.module.css';

export const metadata = {
  title: 'O nas | BIGBUD',
  description:
    'Informacje o firmie BIGBUD — projekty energetyczne, doświadczenie i realizacje.',
};

export default function ONas() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<p className={styles.title}>O nas</p>
				<p className={styles.text}>
					Firma <strong>BIGBUD</strong> zajmuje się kompleksową realizacją
					projektów w branży energetycznej. Naszą działalność rozpoczęliśmy w
					2024 roku, opierając się na zgranym zespole profesjonalistów z
					wieloletnim doświadczeniem w tej dziedzinie.
				</p>
				<p className={styles.text}>
					BIGBUD realizuje zlecenia zarówno dla przedsiębiorstw energetycznych,
					jak i dla inwestorów prywatnych, znajdując indywidualne rozwiązania
					dla każdego zadania. Dzięki temu jesteśmy w stanie wykonywać projekty
					terminowo oraz utrzymywać najwyższe standardy jakości, co potwierdzają
					liczne rekomendacje firm, z którymi współpracujemy.
				</p>
			</div>
		</div>
	);
}
