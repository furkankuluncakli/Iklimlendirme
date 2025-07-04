import React, { useState, useRef, useEffect } from "react";
import { BsGeoAlt } from "react-icons/bs";
import styles from "./LazyGoogleMap.module.css";

const LazyGoogleMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          
          setTimeout(() => {
            setIsMapLoaded(true);
          }, 500);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", 
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, [isInView]);

  return (
    <div
      ref={mapRef}
      className={styles.contactMap}
      style={{
        minHeight: "450px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {!isMapLoaded ? (
        <div className={styles.loadingContainer}>
          <BsGeoAlt size={40} />
          <p>Harita yükleniyor...</p>
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.1813183970507!2d35.37536487627607!3d36.98160495745212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f007bd135b9%3A0xc176fa9b07fb1def!2sBnr%20Havaland%C4%B1rma!5e0!3m2!1str!2str!4v1746559567997!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BNR Havalandırma Konum"
        />
      )}
    </div>
  );
};

export default LazyGoogleMap;
