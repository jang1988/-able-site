import Solutions from '@/components/Solutions'
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import ContactInfo from '@/components/ContactInfo'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Panel from '@/components/Panel'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Solutions />
      <Services />
      <Gallery />
      <Panel />
      <ContactInfo />
      <CallToAction />
      <Footer />
    </div>
  );
}
