'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ReferencjeClient.module.css';

const images = [
  { src: '/referencje1.webp', alt: 'Referencja 1' },
  { src: '/referencje2.webp', alt: 'Referencja 2' },
  { src: '/referencje3.webp', alt: 'Referencja 3' },
];

export default function ReferencjeClient() {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const closeFullscreen = () => {
    setFullscreenImg(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className={styles.section}>
      <div className={styles.row}>
        {images.map((img, i) => (
          <div
            key={i}
            className={styles.item}
            onClick={() => setFullscreenImg(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 90vw, 30vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {fullscreenImg && (
        <div
          className={styles.fullscreenOverlay}
          onClick={closeFullscreen}
        >
          <button
            className={styles.closeButton}
            onClick={closeFullscreen}
            aria-label="Закрыть"
          >
            ×
          </button>
          <div
            className={`${styles.fullscreenImageWrapper} ${isZoomed ? styles.zoomed : ''}`}
            onClick={toggleZoom}
          >
            <Image
              src={fullscreenImg}
              alt="Fullscreen"
              fill
              sizes="(max-width: 768px) 90vw, 90vw"
              className={styles.fullscreenImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
