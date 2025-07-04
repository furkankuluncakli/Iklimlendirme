import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={`${styles.sectionContainer} ${styles.footerWrapper}`}>
          <div className={styles.aboutUs}>
            <div className={styles.aboutUsImg}>
              <Image
                src="/img/logo.webp"
                alt="BNR Havalandırma Logo"
                width={120}
                height={120}
                className={styles.footerLogo}
                quality={95}
                priority
              />
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
            <Link
              aria-label="Instagram sayfamız"
              href="https://www.instagram.com/bnrhavalandirma"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <BsInstagram style={{ color: "#fff" }} />
            </Link>
            <Link
              aria-label="WhatsApp Hattımız"
              href="https://wa.me/905446653943"
              className={styles.socialIcon}
            >
              <BsWhatsapp style={{ color: "#fff" }} />
            </Link>
          </div>
          <div className={styles.footerBottomText}>
            <p>
              Tüm Hakları Saklıdır &copy; {new Date().getFullYear()} BNR Havalandırma
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
