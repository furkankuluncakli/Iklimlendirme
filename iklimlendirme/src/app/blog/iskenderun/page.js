import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title:
    "İskenderun Havalandırma ve İklimlendirme | Modern Havalandırma Sistemleri",
  description:
    "İskenderun'da profesyonel havalandırma ve iklimlendirme çözümleri. İç mekan hava kalitesi, enerji tasarruflu sistemler ve endüstriyel havalandırma hizmetleri. ✓ 20 Yıllık Tecrübe",
  keywords:
    "İskenderun Havalandırma, İskenderun İklimlendirme, Havalandırma Sistemleri, İç Mekan Hava Kalitesi, Endüstriyel Havalandırma, Hatay Havalandırma Sistemleri",
  alternates: { canonical: "/blog/iskenderun" },
};

function IskenderunIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/blogLogo.jpg"}
          alt={"İskenderun İklimlendirme Logo"}
          width={500}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          İskenderun İklimlendirme | Güvenilir Havalandırma Hizmetleri
        </h1>

        <p>
          Hatay'ın İskenderun ilçesinde iklimlendirme alanında uzman kadromuzla
          klima montajı, bakım ve endüstriyel soğutma hizmetleri sunuyoruz. Ev,
          ofis ve sanayi alanlarına özel çözümlerle yanınızdayız.
        </p>

        <h2>İskenderun'da Sunduğumuz Hizmetler</h2>
        <ul className={styles.list}>
          <li>
            <strong>Havalandırma Sistemleri:</strong> İç mekan hava kalitesini
            artıran, enerji tasarruflu ve modern havalandırma sistemleri
            kurulumu ve bakımı.
          </li>
          <li>
            <strong>Klima Montajı:</strong> Hızlı ve garantili kurulum.
          </li>
          <li>
            <strong>Klima Bakımı:</strong> Daha verimli çalışma ve uzun ömür
            için mevsimlik bakım.
          </li>
          <li>
            <strong>Endüstriyel Soğutma:</strong> Fabrikalar ve depolar için
            özel sistemler.
          </li>
        </ul>

        <h2>Bizi Tercih Etme Nedenleriniz</h2>
        <ul className={styles.list}>
          <li>
            <strong>20+ Yıl Deneyim:</strong> Güvenilir ve tecrübeli hizmet.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> İskenderun'un her noktasına hızlı
            servis.
          </li>
          <li>
            <strong>Uygun Fiyat:</strong> Kaliteli hizmet, ekonomik fiyatlar.
          </li>
          <li>
            <strong>Acil Müdahale:</strong> Aynı gün hizmet imkânı.
          </li>
        </ul>

        <h2>İskenderun Klima Fiyatları</h2>
        <p>
          Fiyatlarımız klima modeli, alan büyüklüğü ve işin niteliğine göre
          belirlenir. En doğru fiyat için keşif talep edebilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>İskenderun'da klima hizmeti için bizimle iletişime geçin.</p>
        <p>
          <a href="tel:+905446653943" className={styles.contactLink}>
            📞 0544 665 39 43 - Hemen Ara ve Ücretsiz Keşif Talep Et
          </a>
        </p>
      </article>
    </div>
  );
}

export default IskenderunIklimlendirme;
