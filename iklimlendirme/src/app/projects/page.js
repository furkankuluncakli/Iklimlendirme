"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Projects = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Veri Çekme Hatası :", err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
