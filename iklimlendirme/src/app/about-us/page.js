import React from "react";
import styles from "./page.module.css"

const page = () => {
  return (
    <>
      
      <div className={styles.bodyContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <article>
              <h2 className={styles.bodyTitle}>Bener İklimlendirme Proje Yönetimi</h2>
              <p className={styles.description}>
                SALT Mühendislik; Hastane, alışveriş merkezi, otel, konut, ofis,
                restoran vb. yapılarda ısıtma tesisatı, soğutma tesisatı,
                havalandırma tesisatı, yangın tesisatı ve sıhhi tesisat gibi
                mekanik tesisat alanlarında proje, taahhüt ve danışmanlık
                hizmetleri vermek amacı ile 2017 yılında İstanbul’da
                kurulmuştur.
              </p>
              <p className={styles.description}>
                Amacımız müşteri memnuniyeti ve kalite anlayışımızdan ödün
                vermeden, alanımızdaki gelişme ve yenilikleri yakından takip
                ederek sektördeki saygın, güvenilir firmalar arasında yer
                almaktır.
              </p>
              <p className={styles.description}>
                Genç, dinamik kadromuz ile birlikte, şahsi tecrübe ve
                referanslarımız, farklı bakış açılarımız, kurumsal altyapımız ve
                gelişime açık amatör ruhumuz ile müşteri memnuniyetini ön planda
                tutarak kaliteli hizmet vermek ticari ilkemizdir.
              </p>
            </article>
          </div>
          <div className={styles.right}>
            <img src="img/logo.jpg" alt="" />
          </div>
        </div>
        <div>
          <section className={styles.mission}>
            <h2>Misyonumuz</h2>
            <p>
              Firmamız rekabette gerçek başarıyı sağlamak amacıyla; kurumsal
              kültüründen ödün vermeden güvenilir ve uzman kadrosunu kullanarak;
              maliyette en uygun, hizmette en kaliteli ve teslimatta en hızlı
              olarak sürekli gelişmeyi hedeflemektedir.
            </p>
          </section>

          <section className={styles.vision}>
            <h2>Vizyonumuz</h2>
            <p>
              Firmamız rekabette gerçek başarıyı sağlamak amacıyla; kurumsal
              kültüründen ödün vermeden güvenilir ve uzman kadrosunu kullanarak;
              maliyette en uygun, hizmette en kaliteli ve teslimatta en hızlı
              olarak sürekli gelişmeyi hedeflemektedir.
            </p>
          </section>

          <section className={styles.principles}>
            <h1>İLKELERİMİZ</h1>
            <h2>Dürüstlük, Güvenilirlik, Sorumluluk</h2>
            <p>
              Faaliyet gösterdiğimiz tüm alanlarda, ikili ve şirket
              ilişkilerinde, etik kurallara bağlı kalmak; dürüst ve güvenilir
              davranarak verilen sözleri tutmak, tutarlılık, erdemli olmak, öncü
              ve örnek olmak.
            </p>

            <h2>Yenilikçilik, Yaratıcılık ve Değişime Açıklık</h2>
            <p>
              Sektördeki ve teknolojideki değişiklikleri/gelişmeleri takip
              ederek; sürekli öğrenme, yenilikçilik ve iyileştirme merkezli,
              yaratıcılık becerilerinin geliştirilmesini desteklemek, bizim ve
              çalışma arkadaşlarımızın sürekli ilerlemesini sağlamak.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
