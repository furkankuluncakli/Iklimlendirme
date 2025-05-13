import React from "react";
import styles from "./page.module.css";


const Service = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.image}>
              <img src="img/havalandirma.jpg" alt="" />
            </div>
            <div className={styles.text}>
              <article>
                <h2 className={styles.bodyTitle}>
                  BNR Havalandırma Proje Yönetimi
                </h2>
                <p className={styles.description}>
                  <strong>
                    Anahtar teslim havalandırma ve mekanik tesisat
                    projelendirme, tasarım, uygulama, montaj hizmetleri
                    vermekteyiz.
                  </strong>
                </p>
                <div className={styles.listItems}>
                  <ul>
                    <li>Havalandırma sistemleri imalat montaj projelendirme</li>
                    <li>Isıtma Soğutma Sistemleri</li>
                    <li>Havalandırma Kanalları</li>
                    <li>Hava Kanal İmalatı</li>
                    <li>Havalandırma İzolasyon İşleri</li>
                    <li>Dumansız Hava Sistemleri</li>
                    <li>Her Türlü Havalandırma İmalatı</li>
                    <li>Endüstriyel Havalandırma</li>
                    <li>Aspiratör, Fan ve Hücreli Aspiratörler</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
