import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function AdanaIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/logo.jpg"}
          alt={"logo"}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
      <article className={styles.article}>
        <h1>Adana İklimlendirme</h1>
        <div>
            
        </div>
      </article>
    </div>
  );
}

export default AdanaIklimlendirme;
