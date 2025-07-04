"use client";
import styles from "./page.module.css";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import StatisticsSection from "@/components/StatisticsSection";
import ServicesSection from "@/components/ServicesSection";
import LazyGoogleMap from "@/components/LazyGoogleMap";
import References from "@/components/References";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.bodyContainer}>
        <section className={styles.sectionOne}>
          <div className={styles.imgContainer}>
            <Image
              src="/img/mainPage1.webp"
              alt="BNR Havalandırma Sistemleri"
              width={1440}
              height={1028}
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlayText}>
              <h1 className={styles.overlayTitle}>BNR HAVALANDIRMA</h1>
              <div className={styles.overlayDescription}>
                <p>
                  Fabrikalarda, AVM’lerde ve konut projelerinde profesyonel
                  çözümler sunuyoruz.
                </p>
                <p>
                  Daha düşük enerji tüketimi ve yüksek verimlilik sağlayan
                  sistemler.
                </p>
              </div>
              <div className={styles.overlayActions}>
                <Link href="/contact-us" className={styles.overlayButton}>
                  Ücretsiz İletişim İçin Arayın
                </Link>
                <Link href="/services" className={styles.overlayButton}>
                  Hizmetlerimizi İnceleyin
                </Link>
              </div>
              <div>
                <StatisticsSection />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className={styles.sectionThird} id="references">
          <div className={styles.sectionContainer}>
            <h2>REFERANSLARIMIZ</h2>
            <References />
          </div>
        </section>

        <section className={styles.sectionFourth}>
          <div className={styles.sectionContainer}>
            <h2>İLETİŞİM</h2>
            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <h3>
                  <strong>İletişim Bilgileri</strong>
                </h3>
                <div className={styles.contactAdress}>
                  <BsGeoAlt className={styles.contactIcon} />
                  <p className={styles.contactText}>
                    Levent Mahallesi 1830 Sokak No:47 Yüreğir/Adana
                  </p>
                </div>
                <div className={styles.contactMail}>
                  <BsEnvelope className={styles.contactIcon} />
                  <a
                    href="mailto:bnrhavalandirma@gmail.com"
                    className={styles.contactLink}
                  >
                    <span className={styles.contactText}>
                      {" "}
                      bnrhavalandirma@gmail.com{" "}
                    </span>
                  </a>
                </div>
                <div className={styles.contactPhone}>
                  <BsTelephone className={styles.contactIcon} />
                  <a href="tel:+905446653943" className={styles.contactLink}>
                    <span className={styles.contactText}> 0544 665 39 43 </span>
                  </a>
                </div>
              </div>

              <LazyGoogleMap />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
