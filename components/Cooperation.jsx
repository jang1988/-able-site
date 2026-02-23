'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Cooperation.module.css'

const partners = [
	{ name: 'TB Energia', file: 'tb-energia.webp', width: 120, height: 60 },
	{ name: 'ELMO', file: 'elmo_logo.png', width: 100, height: 50 },
	{ name: 'Žilinskis', file: 'zilinskis.webp', width: 110, height: 55 },
	{ name: 'Piwowarski', file: 'piwowarski-logo.png', width: 130, height: 60 },
	{ name: 'Energa', file: 'energa.webp', width: 100, height: 45 },
	{ name: 'NDE', file: 'NDE-logo2.webp', width: 100, height: 50 }
]

function LogoCard({ partner, index }) {
	return (
		<div
			className={styles.card}
			style={{ animationDelay: `${index * 0.05}s` }}
		>
			<div className={styles.cardLogo}>
				<Image
					src={`/${partner.file}`}
					alt={`${partner.name} logo`}
					width={partner.width || 90}
					height={partner.height || 44}
					className={styles.cardImg}
					loading="lazy"
				/>
			</div>
		</div>
	)
}

function ScrollTrack({ direction = 'left', speed = 30 }) {
	const trackRef = useRef(null)
	const [isPaused, setIsPaused] = useState(false)
	const positionRef = useRef(0)
	const animationRef = useRef(null)
	const lastTimeRef = useRef(0)

	// Create duplicated array for seamless loop
	const displayPartners = [...partners, ...partners, ...partners]

	useEffect(() => {
		const track = trackRef.current
		if (!track) return

		const totalWidth = track.scrollWidth / 3 // Width of one set of partners

		const animate = currentTime => {
			if (!lastTimeRef.current) {
				lastTimeRef.current = currentTime
				animationRef.current = requestAnimationFrame(animate)
				return
			}

			const deltaTime = currentTime - lastTimeRef.current
			lastTimeRef.current = currentTime

			if (!isPaused) {
				// Calculate movement
				const moveDelta =
					(direction === 'left' ? -speed : speed) * (deltaTime / 1000)
				positionRef.current += moveDelta

				// Reset position when we've scrolled through one full set
				if (
					direction === 'left' &&
					Math.abs(positionRef.current) >= totalWidth
				) {
					positionRef.current = 0
				} else if (direction === 'right' && positionRef.current >= totalWidth) {
					positionRef.current = 0
				}

				// Apply transform with hardware acceleration
				track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
			}

			animationRef.current = requestAnimationFrame(animate)
		}

		animationRef.current = requestAnimationFrame(animate)

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current)
			}
		}
	}, [direction, speed, isPaused])

	return (
		<div
			className={styles.scrollOuter}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div
				ref={trackRef}
				className={styles.scrollTrack}
			>
				{displayPartners.map((partner, index) => (
					<LogoCard
						key={`${partner.name}-${index}`}
						partner={partner}
						index={index % partners.length}
					/>
				))}
			</div>
		</div>
	)
}

export default function Cooperation() {
	return (
		<section className={styles.section}>
			<p className={styles.partnersTitle}>Nasi Partnerzy Biznesowi</p>
			<div className={styles.scrollRows}>
				<ScrollTrack
					direction="left"
					speed={35}
				/>
			</div>
		</section>
	)
}
