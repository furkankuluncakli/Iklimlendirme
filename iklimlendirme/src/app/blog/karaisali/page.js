import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title: "Karaisalı İklimlendirme | Klima Montaj & Bakım | Adana Klima",
  description:
    "Karaisalı'da klima montajı, bakım ve endüstriyel soğutma çözümleri. ✓ 15 Yıllık Tecrübe ✓ Ücretsiz Keşif ✓ Güvenilir Hizmet ✓ Profesyonel Ekip!",
  keywords:
    "Karaisalı İklimlendirme, Adana Klima, Karaisalı Klima Montajı, Klima Bakımı, Endüstriyel Soğutma Karaisalı, Adana Soğutma Sistemleri",
};

function KaraisaliIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/logo.jpg"}
          alt={"Karaisalı İklimlendirme Logo"}
          width={300}
          height={200}
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Karaisalı İklimlendirme | Uzman Klima Hizmetleri
        </h1>

        <p>
          Adana'nın Karaisalı ilçesinde profesyonel iklimlendirme çözümleriyle
          hizmetinizdeyiz. Klima montajı, bakım, onarım ve endüstriyel soğutma
          alanlarında tecrübeli ekibimizle güvenilir hizmet sunuyoruz.
        </p>

        <h2>Karaisalı'da Sunduğumuz İklimlendirme Hizmetleri</h2>
        <ul className={styles.list}>
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

        <h2>Neden Karaisalı'da Bizi Tercih Etmelisiniz?</h2>
        <ul className={styles.list}>
          <li>
            <strong>15 Yıllık Tecrübe:</strong> Sektördeki uzun yıllara dayanan
            bilgi birikimi.
          </li>
          <li>
            <strong>Uzman Kadro:</strong> Sertifikalı teknisyenlerle kaliteli ve
            güvenilir hizmet.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> Karaisalı'nın tüm mahallelerine
            ücretsiz keşif hizmeti.
          </li>
          <li>
            <strong>Hızlı Müdahale:</strong> Aynı gün servis imkânı.
          </li>
        </ul>

        <h2>Karaisalı İklimlendirme Fiyatları</h2>
        <p>
          Fiyatlarımız hizmetin türüne, klima modeli ve alan büyüklüğüne göre
          değişmektedir. En doğru fiyat için ücretsiz keşif randevusu
          oluşturabilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Karaisalı’da klima montajı, bakım ve onarım hizmetleri için bizimle
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

export default KaraisaliIklimlendirme;
