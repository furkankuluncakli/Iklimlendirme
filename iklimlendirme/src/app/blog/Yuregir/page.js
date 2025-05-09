import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title: "Yüreğir İklimlendirme | Klima Montaj & Bakım | Adana Klima",
  description:
    "Yüreğir'de klima montajı, bakım ve endüstriyel soğutma çözümleri. ✓ 15 Yıllık Tecrübe ✓ Ücretsiz Keşif ✓ Güvenilir Hizmet ✓ Profesyonel Ekip!",
  keywords:
    "Yüreğir İklimlendirme, Adana Klima, Yüreğir Klima Montajı, Klima Bakımı, Endüstriyel Soğutma Yüreğir, Adana Soğutma Sistemleri",
};

function YuregirIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/logo.jpg"}
          alt={"Yüreğir İklimlendirme Logo"}
          width={300}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Yüreğir İklimlendirme | Uzman Klima Hizmetleri
        </h1>

        <p>
          Adana'nın Yüreğir ilçesinde profesyonel iklimlendirme çözümleriyle
          hizmetinizdeyiz. Klima montajı, bakım, onarım ve endüstriyel soğutma
          alanlarında tecrübeli ekibimizle güvenilir hizmet sunuyoruz.
        </p>

        <h2>Yüreğir'de Sunduğumuz İklimlendirme Hizmetleri</h2>
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

        <h2>Neden Yüreğir'de Bizi Tercih Etmelisiniz?</h2>
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
            <strong>Ücretsiz Keşif:</strong> Yüreğir'in tüm mahallelerine
            ücretsiz keşif hizmeti.
          </li>
          <li>
            <strong>Hızlı Müdahale:</strong> Aynı gün servis imkânı.
          </li>
        </ul>

        <h2>Yüreğir İklimlendirme Fiyatları</h2>
        <p>
          Fiyatlarımız hizmetin türüne, klima modeli ve alan büyüklüğüne göre
          değişmektedir. En doğru fiyat için ücretsiz keşif randevusu
          oluşturabilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Yüreğir’de klima montajı, bakım ve onarım hizmetleri için bizimle
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

export default YuregirIklimlendirme;
