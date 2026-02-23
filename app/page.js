// app/page.js
import Solutions from '@/components/Solutions'
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import CallToAction from '@/components/CallToAction'
import Panel from '@/components/Panel'
import Cooperation from '@/components/Cooperation'
import ScrollAnimation from '@/components/ScrollAnimation'

export const metadata = {
  title: 'BIGBUD – Budowa i modernizacja linii energetycznych 6–30kV',
  description:
    'BIGBUD specjalizuje się w budowie i modernizacji linii napowietrznych i kablowych 6–30kV, budowie stacji elektroenergetycznych, farm wiatrowych oraz elektrowni fotowoltaicznych. Dostarczamy bezpieczne, efektywne i nowoczesne rozwiązania energetyczne.',
  keywords: [
    'budowa linii energetycznych',
    'modernizacja linii napowietrznych',
    'linie kablowe 6-30kV',
    'stacje elektroenergetyczne',
    'farmy wiatrowe',
    'elektrownie fotowoltaiczne',
    'OZE',
    'infrastruktura energetyczna',
    'energetyka',
  ],
  openGraph: {
    title: 'BIGBUD – Profesjonalne rozwiązania energetyczne 6–30kV',
    description:
      'Budowa i modernizacja linii energetycznych, stacji elektroenergetycznych oraz instalacji OZE. Kompleksowe usługi dla biznesu i inwestorów.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <ScrollAnimation>
        <Solutions />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <Gallery />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <Panel />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <Cooperation />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <CallToAction />
      </ScrollAnimation>
    </div>
  );
}