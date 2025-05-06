import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title: "Sarıçam İklimlendirme | Klima Montaj & Bakım | Adana Klima",
  description:
    "Sarıçam'da klima montajı, bakım ve endüstriyel soğutma hizmetleri. ✓ 15 Yıllık Tecrübe ✓ Ücretsiz Keşif ✓ Uygun Fiyat ✓ Profesyonel Hizmet!",
  keywords:
    "Sarıçam İklimlendirme, Adana Klima, Sarıçam Klima Montajı, Klima Bakımı Sarıçam, Endüstriyel Soğutma Adana, Sarıçam Soğutma Sistemleri",
};

function SaricamIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/logo.jpg"}
          alt={"Sarıçam İklimlendirme Logo"}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Sarıçam İklimlendirme | Güvenilir Klima Hizmetleri
        </h1>

        <p>
          Adana Sarıçam’da profesyonel iklimlendirme çözümleri sunuyoruz. Klima
          montajı, periyodik bakım, arıza onarımı ve endüstriyel soğutma
          sistemlerinde uzman ekibimizle yanınızdayız.
        </p>

        <h2>Sarıçam'da Sunduğumuz Hizmetler</h2>
        <ul className={styles.list}>
          <li>
            <strong>Klima Montajı:</strong> Evinize veya iş yerinize en uygun
            montaj hizmeti.
          </li>
          <li>
            <strong>Klima Bakımı:</strong> Düzenli bakım ile performans artışı
            ve enerji tasarrufu.
          </li>
          <li>
            <strong>Endüstriyel Soğutma:</strong> Depo, fabrika gibi büyük
            alanlar için özel çözümler.
          </li>
        </ul>

        <h2>Neden Sarıçam’da Bizi Tercih Etmelisiniz?</h2>
        <ul className={styles.list}>
          <li>
            <strong>15 Yıllık Deneyim:</strong> Yüzlerce memnun müşteri.
          </li>
          <li>
            <strong>Uzman Ekip:</strong> Alanında eğitimli ve deneyimli
            teknisyenler.
          </li>
          <li>
            <strong>Hızlı Hizmet:</strong> Aynı gün keşif ve servis imkânı.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> Sarıçam’ın tüm mahallelerine özel.
          </li>
        </ul>

        <h2>Sarıçam İklimlendirme Fiyatları</h2>
        <p>
          Klima montaj ve bakım fiyatları cihaz tipi, yerleşim alanı ve hizmet
          detayına göre değişmektedir. Net bilgi için ücretsiz keşif talep
          edebilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Sarıçam’da klima montajı, bakım ve endüstriyel soğutma çözümleri için
          bizimle hemen iletişime geçin.
        </p>
        <p>
          <a href="tel:+905446653943" className={styles.contactLink}>
            📞 0544 665 39 43 - Hemen Ara ve Ücretsiz Keşif Talep Et
          </a>
        </p>
      </article>
    </div>
  );
}

export default SaricamIklimlendirme;
