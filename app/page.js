import Solutions from '@/components/Solutions'
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import ContactInfo from '@/components/ContactInfo'
import CallToAction from '@/components/CallToAction'
import ClientVoices from '@/components/ClientVoices'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Solutions />
      <Services />
      <Gallery />
      <ContactInfo />
      <CallToAction />
      <ClientVoices />
      <Faq />
      <Footer />
    </div>
  );
}
