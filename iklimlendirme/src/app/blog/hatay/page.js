import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://www.bnrhavalandirma.com"),
  title:
    "Hatay Havalandırma ve İklimlendirme | Profesyonel Havalandırma Sistemleri",
  description:
    "Hatay'da profesyonel havalandırma ve iklimlendirme çözümleri. İç mekan hava kalitesi, enerji tasarruflu sistemler ve endüstriyel havalandırma hizmetleri. ✓ 20 Yıllık Tecrübe",
  keywords:
    "Hatay Havalandırma, Hatay İklimlendirme, Havalandırma Sistemleri, İç Mekan Hava Kalitesi, Endüstriyel Havalandırma, Hatay Havalandırma Sistemleri",
};

function HatayIklimlendirme() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={"/img/blogLogo.jpg"}
          alt={"Hatay İklimlendirme Logo"}
          width={500}
          height={200}
          layout="fixed"
          className={styles.image}
        />
      </div>

      <article className={styles.article}>
        <h1 className={styles.mainTitle}>
          Hatay İklimlendirme | Uzman Havalandırma Hizmetleri
        </h1>

        <p>
          Hatay genelinde profesyonel iklimlendirme çözümleri sunuyoruz. Klima
          montajı, bakım, onarım ve endüstriyel soğutma sistemlerinde uzman
          kadromuzla hizmetinizdeyiz.
        </p>

        <h2>Hatay'da Sunduğumuz İklimlendirme Hizmetleri</h2>
        <ul className={styles.list}>
          <li>
            <strong>Havalandırma Sistemleri:</strong> İç mekan hava kalitesini
            artıran, enerji tasarruflu ve modern havalandırma sistemleri
            kurulumu ve bakımı.
          </li>
          <li>
            <strong>Klima Montajı:</strong> Konut ve iş yerleri için uzman
            kurulum hizmeti.
          </li>
          <li>
            <strong>Klima Bakımı:</strong> Performans artırıcı mevsimsel bakım.
          </li>
          <li>
            <strong>Endüstriyel Soğutma:</strong> Fabrika ve depolara özel güçlü
            sistem çözümleri.
          </li>
        </ul>

        <h2>Neden Hatay'da Bizi Tercih Etmelisiniz?</h2>
        <ul className={styles.list}>
          <li>
            <strong>20 Yıllık Tecrübe:</strong> Klima sektöründe güvenilir
            hizmet.
          </li>
          <li>
            <strong>Uzman Teknik Ekip:</strong> Eğitimli, belgeli teknisyenlerle
            çözüm odaklı hizmet.
          </li>
          <li>
            <strong>Ücretsiz Keşif:</strong> Hatay'ın merkez ve ilçelerinde
            ücretsiz keşif.
          </li>
          <li>
            <strong>Acil Servis:</strong> Aynı gün müdahale imkanı.
          </li>
        </ul>

        <h2>Hatay İklimlendirme Fiyatları</h2>
        <p>
          Hizmet fiyatlarımız; klima tipi, hizmetin kapsamı ve uygulama
          yapılacak alanın özelliklerine göre şekillenir. En net fiyat bilgisi
          için ücretsiz keşif talebinde bulunabilirsiniz.
        </p>

        <h2>İletişim</h2>
        <p>
          Hatay'da klima montajı, bakım ve onarım ihtiyaçlarınız için bize
          ulaşabilirsiniz.
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

export default HatayIklimlendirme;
