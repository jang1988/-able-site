import styles from './Faq.module.css';
import { Wrench, Globe, Leaf, Wifi, Monitor, Headphones } from 'lucide-react';

export default function Faq() {
  return (
    <section className={styles.section}>
			
      <div className={styles.inner}>
        <h2 className={styles.title}>FAQs</h2>
        <p className={styles.subtitle}>
          Answers to common questions about our electrical infrastructure and underground network solutions.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Wrench className={styles.icon} />
            <h3>How long does installation take?</h3>
            <p>Installation typically takes 2–4 weeks depending on project complexity and site conditions.</p>
          </div>

          <div className={styles.card}>
            <Globe className={styles.icon} />
            <h3>What regions do you serve?</h3>
            <p>We serve electrical infrastructure projects across North America and select European markets.</p>
          </div>

          <div className={styles.card}>
            <Leaf className={styles.icon} />
            <h3>Are your solutions sustainable?</h3>
            <p>Our solutions prioritize sustainability with low-impact underground cable technologies and energy-efficient designs.</p>
          </div>

          <div className={styles.card}>
            <Wifi className={styles.icon} />
            <h3>What maintenance is required?</h3>
            <p>Annual inspections and predictive maintenance ensure long-term network reliability and performance.</p>
          </div>

          <div className={styles.card}>
            <Monitor className={styles.icon} />
            <h3>Can you customize solutions?</h3>
            <p>We specialize in fully customized underground network solutions tailored to unique project requirements.</p>
          </div>

          <div className={styles.card}>
            <Headphones className={styles.icon} />
            <h3>Our experts are ready to discuss your project.</h3>
            <p>Our engineering team provides comprehensive project consultation and technical support throughout implementation.</p>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Need more information?</h3>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
    </section>
  );
}
