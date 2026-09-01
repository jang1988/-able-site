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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.290800830901!2d20.2163268!3d50.030816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471647811accf63f%3A0xd9e088c51799fd67!2zUGnEmWtuYSA3LCAzMi0wMDUgTmllcG_Fgm9taWNlLCDQn9C-0LvRjNGI0LA!5e0!3m2!1sru!2sua!4v1788265010945!5m2!1sru!2sua"
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