import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title: "İskenderun İklimlendirme | Klima Montaj & Bakım | Hatay Klima",
  description:
    "İskenderun'da klima montajı, bakım ve endüstriyel soğutma hizmetleri. ✓ 20 Yıllık Deneyim ✓ Ücretsiz Keşif ✓ Profesyonel Ekip ✓ Hızlı Servis!",
  keywords:
    "İskenderun İklimlendirme, Hatay Klima, İskenderun Klima Montajı, Klima Bakımı İskenderun, Endüstriyel Soğutma Hatay, Soğutma Sistemleri İskenderun",
};

function IskenderunIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/logo.jpg"}
          alt={"İskenderun İklimlendirme Logo"}
          width={300}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          İskenderun İklimlendirme | Güvenilir Klima Çözümleri
        </h1>

        <p>
          Hatay'ın İskenderun ilçesinde iklimlendirme alanında uzman kadromuzla
          klima montajı, bakım ve endüstriyel soğutma hizmetleri sunuyoruz. Ev,
          ofis ve sanayi alanlarına özel çözümlerle yanınızdayız.
        </p>

        <h2>İskenderun'da Sunduğumuz Hizmetler</h2>
        <ul className={styles.list}>
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
