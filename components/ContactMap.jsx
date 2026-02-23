// app/kontakt/ContactMap.jsx
'use client';

import { useRef, useEffect, useState } from 'react';
import styles from '../app/kontakt/page.module.css';

export default function ContactMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.mapSection} ref={mapRef}>
      <div className={styles.mapContainer}>
        {isLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.049105831329!2d19.938544!3d50.049683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0a04e7c6b1%3A0x9f8f8f8f8f8f8f8f!2sRybitwy%2022%2C%2030-722%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BIGBUD location"
          />
        ) : (
          <div className={styles.mapPlaceholder}>
            <p>Ładowanie mapy...</p>
          </div>
        )}
      </div>
    </div>
  );
}