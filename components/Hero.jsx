'use client';

import { PhoneCall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<Image
				src="/corrugated.webp"
				alt="Hero background"
				fill
				priority
				className={styles.image}
			/>

			<div className={styles.overlay}>
				<div className={styles.textBlock}>
					<h1 className={styles.title}>
						Modern solutions for your business success
					</h1>

					<div className={styles.wrapper}>
						<p className={styles.description}>
							We provide innovative and reliable technologies that help you grow,
							optimize costs, and achieve sustainable results. Partner with us for
							the future.
						</p>

						<div className={styles.buttons}>
							<Link href="/kontakt" className={styles.btnPrimary}>
								CONTACT
							</Link>
							<a href="tel:+48123456789" className={styles.btnSecondary}>
								CALL US <PhoneCall size={18} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
