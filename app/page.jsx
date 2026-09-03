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
  title:
    'BIGBUD – Budowa i modernizacja linii energetycznych SN 6–30 kV',

  description:
    'BIGBUD realizuje budowę i modernizację linii energetycznych SN 6–30 kV, stacji elektroenergetycznych oraz infrastruktury OZE. Kompleksowa realizacja inwestycji energetycznych.',

  keywords: [
    'budowa linii energetycznych',
    'modernizacja linii energetycznych',
    'linie energetyczne SN',
    'linie SN 6–30 kV',
    'linie napowietrzne',
    'linie kablowe',
    'stacje elektroenergetyczne',
    'budowa stacji elektroenergetycznych',
    'modernizacja stacji elektroenergetycznych',
    'farmy wiatrowe',
    'elektrownie fotowoltaiczne',
    'infrastruktura energetyczna',
    'wykonawstwo elektroenergetyczne',
    'OZE',
  ],
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