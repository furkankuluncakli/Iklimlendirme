import React from "react";
import styles from "./page.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src="img/logo-19.png" alt="Foto" />
          </div>
          <div className={styles.card}>
            <img src="img/logo.jpg" alt="Foto" />
          </div>
          <div className={styles.card}>
            <img src="img/havalandirma.jpg" alt="Foto" />
          </div>
          <div className={styles.card}>
            <img src="img/logo.jpg" alt="Foto" />
          </div>
          <div className={styles.card}>
            <img src="img/logo.jpg" alt="Foto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
