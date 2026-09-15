'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Cooperation.module.css'

const partners = [
  {
    name: 'TB Energia',
    file: 'tb-energia.webp',
    width: 120,
    height: 60,
  },
  {
    name: 'ELMO',
    file: 'elmo_logo.png',
    width: 100,
    height: 50,
  },
  {
    name: 'Žilinskis',
    file: 'zilinskis.webp',
    width: 110,
    height: 55,
  },
  {
    name: 'Piwowarski',
    file: 'piwowarski-logo.png',
    width: 130,
    height: 60,
  },
  {
    name: 'Energa',
    file: 'energa.webp',
    width: 100,
    height: 45,
  },
  {
    name: 'ONDE',
    file: 'NDE-logo2.webp',
    width: 100,
    height: 50,
  },
  {
    name: 'Energoaparatura',
    file: 'enap-logo.png',
    width: 130,
    height: 60,
  },
]

function LogoCard({ partner, index }) {
  return (
    <div
      className={styles.card}
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >

      <div className={styles.cardLogo}>
        <Image
          src={`/${partner.file}`}
          alt={`Logo firmy ${partner.name}`}
          width={partner.width}
          height={partner.height}
          className={styles.cardImg}
          loading="lazy"
        />
      </div>

      <div className={styles.cardName}>
        {partner.name}
      </div>
    </div>
  )
}

function ScrollTrack({
  direction = 'left',
  speed = 35,
}) {
  const trackRef = useRef(null)
  const animationRef = useRef(null)
  const positionRef = useRef(0)
  const lastTimeRef = useRef(0)

  const [isPaused, setIsPaused] = useState(false)

  // Three copies allow seamless infinite scrolling
  const displayPartners = [
    ...partners,
    ...partners,
    ...partners,
  ]

  useEffect(() => {
    const track = trackRef.current

    if (!track) return

    // Reset animation timer
    lastTimeRef.current = 0

    const animate = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      if (!isPaused) {
        const totalWidth = track.scrollWidth / 3

        const movement =
          speed *
          (deltaTime / 1000) *
          (direction === 'left' ? -1 : 1)

        positionRef.current += movement

        /*
         * LEFT
         * Once one complete set has passed,
         * move back exactly one set.
         */
        if (
          direction === 'left' &&
          positionRef.current <= -totalWidth
        ) {
          positionRef.current += totalWidth
        }

        /*
         * RIGHT
         * Start from the middle copy and move backwards.
         */
        if (
          direction === 'right' &&
          positionRef.current >= 0
        ) {
          positionRef.current -= totalWidth
        }

        track.style.transform =
          `translate3d(${positionRef.current}px, 0, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [direction, speed, isPaused])

  /*
   * For the right-moving row we start
   * from the second copy.
   */
  useEffect(() => {
    const track = trackRef.current

    if (!track || direction !== 'right') return

    const setInitialPosition = () => {
      const totalWidth = track.scrollWidth / 3

      positionRef.current = -totalWidth

      track.style.transform =
        `translate3d(${positionRef.current}px, 0, 0)`
    }

    if (track.scrollWidth > 0) {
      setInitialPosition()
    }
  }, [direction])

  return (
    <div
      className={styles.scrollOuter}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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
      <div className={styles.partnersSection}>

        {/* Main title */}
        <h2 className={styles.partnersTitle}>
          Nasi Partnerzy Biznesowi
        </h2>

        {/* Moving logos */}
        <div className={styles.scrollRows}>

          <ScrollTrack
            direction="left"
            speed={35}
          />
        </div>
        
      </div>
    </section>
  )
}