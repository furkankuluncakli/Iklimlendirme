import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={`${styles.sectionContainer} ${styles.footerWrapper}`}>
          <div className={styles.aboutUs}>
            <div className={styles.aboutUsImg}>
              <img src="/img/logo.jpg" alt="BNR Havalandırma Logo" />
            </div>
          </div>
          <div className={styles.aboutUsText}>
            <p>
              BNR Havalandırma, 2025 yılında kurulmuş olup, hastane, alışveriş
              merkezi, otel, konut, ofis ve restoran gibi yapılarda ısıtma,
              soğutma, havalandırma, taze hava, izolasyon, galvaniz sac, konfor,
              yangın ve sıhhi tesisat gibi mekanik tesisat alanlarında proje,
              taahhüt ve danışmanlık hizmetleri sunmaktadır.
            </p>
          </div>
          <div className={styles.footerMenu}>
            <h3>Hızlı Menü</h3>
            <ul>
              <li>
                <Link href="/about-us">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/services">Hizmetler</Link>
              </li>
              <li>
                <Link href="/contact-us">İletişim</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={styles.icons}>
            <div className={styles.socialIcon}>
              <a
                href="https://www.instagram.com/bnrhavalandirma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://twitter.com/bnrhavalandirma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://facebook.com/bnrhavalandirma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className={styles.footerBottomText}>
            <p>
              Tüm Hakları Saklıdır &copy; {new Date().getFullYear()} BNR
              Havalandırma
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
