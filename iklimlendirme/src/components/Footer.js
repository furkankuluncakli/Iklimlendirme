import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <>
        <section className={styles.footer}>
          <div className={`${styles.sectionContainer} ${styles.footerWrapper}`}>
            <div className={styles.aboutUs}>
              <div className={styles.aboutUsImg}>
                <img src="img/logo.jpg" alt="" />
              </div>
            </div>
            <div className={styles.aboutUsText}>
              <p>
                SALT Mühendislik; Hastane, alışveriş merkezi, otel, konut, ofis,
                restoran vb. yapılarda ısıtma tesisatı, soğutma tesisatı,
                havalandırma tesisatı, yangın tesisatı ve sıhhi tesisat gibi
                mekanik tesisat alanlarında proje, taahhüt ve danışmanlık
                hizmetleri vermek amacı ile 2017 yılında İstanbul’da
                kurulmuştur.
              </p>
            </div>
            <div className={styles.footerMenu}>
              <h3>Hızlı Menü</h3>
              <ul>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Hizmetler</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className={styles.footerBottom}>
          <div className={styles.footerBottomContainer}>
            <div className={styles.icons}>
              <div className={styles.socialIcon}>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <div className={styles.socialIcon}>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
            <div className={styles.footerBottomText}>
              <p>Tüm Hakları Saklıdır &COPY; 2025 Bener İklimlendirme</p>
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer;