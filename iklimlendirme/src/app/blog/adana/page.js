import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title:
    "Adana Havalandırma ve İklimlendirme | Profesyonel Havalandırma Sistemleri",
  description:
    "Adana'da profesyonel havalandırma ve iklimlendirme çözümleri. İç mekan hava kalitesi, enerji tasarruflu sistemler ve endüstriyel havalandırma hizmetleri. ✓ 20 Yıllık Tecrübe",
  keywords:
    "Adana Havalandırma, Adana İklimlendirme, Havalandırma Sistemleri, İç Mekan Hava Kalitesi, Endüstriyel Havalandırma, Adana Havalandırma Sistemleri",
  alternates: { canonical: "/blog/adana" },
};

function AdanaIklimlendirme() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/img/blogLogo.jpg"
          alt="BNR Havalandırma Logo"
          width={500}
          height={200}
          layout="fixed"
          className={styles.image}
        />
        <h1 className={styles.mainTitle}>
          Adana İklimlendirme | Uzman Havalandırma Hizmetleri
        </h1>
      </header>

      <article className={styles.article}>
        <section>
          <h2>Adana'da Klima ve İklimlendirme Hizmetleri</h2>
          <p>
            BNR Havalandırma olarak Adana'da klima montajı, klima bakımı ve
            endüstriyel soğutma alanında profesyonel çözümler sunuyoruz. Her
            bütçeye uygun fiyatlarla, güvenilir ve kaliteli hizmet garantisi
            veriyoruz.
          </p>
        </section>

        <section>
          <h3>Hizmetlerimiz</h3>
          <ul className={styles.list}>
            <li>
              <strong>Havalandırma Sistemleri:</strong> İç mekan hava kalitesini
              artıran, enerji tasarruflu ve modern havalandırma sistemleri
              kurulumu ve bakımı.
            </li>
            <li>
              <strong>Klima Montajı:</strong> Ev ve iş yerleri için güvenilir ve
              estetik montaj hizmeti.
            </li>
            <li>
              <strong>Klima Bakımı:</strong> Periyodik bakım hizmetleri ile
              cihazlarınızın verimliliğini artırın.
            </li>
            <li>
              <strong>Endüstriyel Soğutma:</strong> Fabrika, depo ve marketler
              için özel soğutma sistemleri kurulumu.
            </li>
          </ul>
        </section>

        <section>
          <h3>Neden BNR Havalandırma?</h3>
          <ul className={styles.list}>
            <li>
              <strong>20+ Yıllık Deneyim:</strong> Yerel uzmanlık ve sektörel
              bilgi.
            </li>
            <li>
              <strong>Kaliteli Malzeme:</strong> Uzun ömürlü ve yüksek
              performanslı ürün kullanımı.
            </li>
            <li>
              <strong>Hızlı ve Güvenilir Hizmet:</strong> Zamanında teslimat ve
              müşteri memnuniyeti garantisi.
            </li>
          </ul>
        </section>

        <section>
          <h3>Adana Klima Montaj ve Bakım Fiyatları</h3>
          <p>
            Fiyatlarımız hizmetin türüne, alanın büyüklüğüne ve tercih edilen
            marka/modele göre değişmektedir. Ücretsiz keşif hizmetimiz ile net
            fiyat teklifi alabilirsiniz.
          </p>
        </section>

        <section>
          <h3>İletişim ve Ücretsiz Keşif</h3>
          <p>
            Adana'da iklimlendirme ve soğutma çözümleri için bizimle hemen
            iletişime geçin.
          </p>
          <p>
            <a href="tel:+905446653943" className={styles.contactLink}>
              📞 0544 665 39 43 - Hemen Ara ve Ücretsiz Keşif Talep Et
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}

export default AdanaIklimlendirme;
