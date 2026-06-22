import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title:
    "Tarsus Havalandırma ve İklimlendirme | Modern Havalandırma Sistemleri",
  description:
    "Tarsus'ta profesyonel havalandırma ve iklimlendirme çözümleri. İç mekan hava kalitesi, enerji tasarruflu sistemler ve endüstriyel havalandırma hizmetleri. ✓ 20 Yıllık Tecrübe",
  keywords:
    "Tarsus Havalandırma, Tarsus İklimlendirme, Havalandırma Sistemleri, İç Mekan Hava Kalitesi, Endüstriyel Havalandırma, Mersin Havalandırma Sistemleri",
  alternates: { canonical: "/blog/tarsus" },
};

function TarsusIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/blogLogo.jpg"}
          alt={"Tarsus İklimlendirme Logo"}
          width={500}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Tarsus İklimlendirme | Uzman Havalandırma Hizmetleri
        </h1>

        <p>
          Mersin'in Tarsus ilçesinde klima sistemleri üzerine uzman çözümler
          sunuyoruz. Montaj, bakım ve endüstriyel soğutma hizmetlerinde hızlı,
          kaliteli ve ekonomik seçenekler sağlıyoruz.
        </p>

        <h2>Tarsus'taki İklimlendirme Hizmetlerimiz</h2>
        <ul className={styles.list}>
          <li>
            <strong>Havalandırma Sistemleri:</strong> İç mekan hava kalitesini
            artıran, enerji tasarruflu ve modern havalandırma sistemleri
            kurulumu ve bakımı.
          </li>
          <li>
            <strong>Klima Montajı:</strong> Hedefe uygun ve garantili kurulum.
          </li>
          <li>
            <strong>Bakım Hizmeti:</strong> Verimlilik ve düşük enerji tüketimi
            için periyodik bakım.
          </li>
          <li>
            <strong>Endüstriyel Soğutma:</strong> İşletmenize özel soğutma
            çözümleri.
          </li>
        </ul>

        <h2>Neden Bizi Seçmelisiniz?</h2>
        <ul className={styles.list}>
          <li>
            <strong>Tecrübeli Teknik Ekip:</strong> Hızlı ve doğru müdahale.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> Tarsus genelinde ücretsiz servis
            imkânı.
          </li>
          <li>
            <strong>Uygun Fiyat Garantisi:</strong> Kaliteli hizmet, ekonomik
            fiyat.
          </li>
          <li>
            <strong>Yüksek Müşteri Memnuniyeti:</strong> Olumlu geri
            bildirimlerle büyüyen bir firma.
          </li>
        </ul>

        <h2>Tarsus Klima Fiyatları</h2>
        <p>
          Klima montaj ve bakım fiyatlarımız cihaz tipi ve uygulama alanına göre
          belirlenir. Net fiyat için ücretsiz keşif talep edebilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Tarsus'ta kaliteli klima hizmetleri için hemen bizimle iletişime
          geçin.
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

export default TarsusIklimlendirme;
