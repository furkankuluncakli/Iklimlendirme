import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title:
    "Osmaniye Havalandırma ve İklimlendirme | Modern Havalandırma Sistemleri",
  description:
    "Osmaniye'de profesyonel havalandırma ve iklimlendirme çözümleri. İç mekan hava kalitesi, enerji tasarruflu sistemler ve endüstriyel havalandırma hizmetleri. ✓ 20 Yıllık Tecrübe",
  keywords:
    "Osmaniye Havalandırma, Osmaniye İklimlendirme, Havalandırma Sistemleri, İç Mekan Hava Kalitesi, Endüstriyel Havalandırma, Osmaniye Havalandırma Sistemleri",
  alternates: { canonical: "/blog/osmaniye" },
};

function OsmaniyeIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/blogLogo.jpg"}
          alt={"Osmaniye İklimlendirme Logo"}
          width={500}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Osmaniye İklimlendirme | Uzman Havalandırma Hizmetleri
        </h1>

        <p>
          Osmaniye'de profesyonel iklimlendirme çözümleriyle hizmetinizdeyiz.
          Klima montajı, bakım, onarım ve endüstriyel soğutma alanlarında
          tecrübeli ekibimizle güvenilir hizmet sunuyoruz.
        </p>

        <h2>Osmaniye'de Sunduğumuz İklimlendirme Hizmetleri</h2>
        <ul className={styles.list}>
          <li>
            <strong>Havalandırma Sistemleri:</strong> İç mekan hava kalitesini
            artıran, enerji tasarruflu ve modern havalandırma sistemleri
            kurulumu ve bakımı.
          </li>
          <li>
            <strong>Klima Montajı:</strong> Ev, ofis ve iş yerlerine uygun
            profesyonel klima kurulum hizmeti.
          </li>
          <li>
            <strong>Klima Bakımı:</strong> Mevsimsel bakım ile klimalarınız daha
            verimli ve uzun ömürlü olur.
          </li>
          <li>
            <strong>Endüstriyel Soğutma:</strong> Fabrika ve depo gibi büyük
            ölçekli alanlara özel soğutma sistemleri.
          </li>
        </ul>

        <h2>Neden Osmaniye'de Bizi Tercih Etmelisiniz?</h2>
        <ul className={styles.list}>
          <li>
            <strong>20 Yıllık Tecrübe:</strong> Sektördeki uzun yıllara dayanan
            deneyimimizle kaliteli hizmet sunuyoruz.
          </li>
          <li>
            <strong>Uzman Kadro:</strong> Sertifikalı teknisyenlerle kaliteli ve
            güvenilir hizmet.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> Osmaniye'nin tüm ilçelerine
            ücretsiz keşif hizmeti.
          </li>
          <li>
            <strong>Hızlı Müdahale:</strong> Aynı gün servis imkânı.
          </li>
        </ul>

        <h2>Osmaniye İklimlendirme Fiyatları</h2>
        <p>
          Fiyatlarımız hizmetin türüne, klima modeli ve alan büyüklüğüne göre
          değişmektedir. En doğru fiyat için ücretsiz keşif randevusu
          oluşturabilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Osmaniye'de klima montajı, bakım ve onarım hizmetleri için bizimle
          iletişime geçin.
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

export default OsmaniyeIklimlendirme;
