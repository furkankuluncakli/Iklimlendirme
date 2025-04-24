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
                BNR Havalandırma, 2025 yılında kurulmuş olup, hastane, alışveriş merkezi, otel, konut, ofis ve restoran gibi yapılarda ısıtma, soğutma, havalandırma, taze hava, izolasyon, galvaniz sac, konfor, yangın ve sıhhi tesisat gibi mekanik tesisat alanlarında proje, taahhüt ve danışmanlık hizmetleri sunmaktadır.
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
              <p>Tüm Hakları Saklıdır &copy; {new Date().getFullYear()} BNR Havalandırma</p>
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer;