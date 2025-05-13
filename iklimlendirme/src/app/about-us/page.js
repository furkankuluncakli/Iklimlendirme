import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <article>
              <h2 className={styles.bodyTitle}>
                BNR Havalandırma Proje Yönetimi
              </h2>
              <p className={styles.description}>
                BNR Havalandırma, 2025 yılında kurulmuş olup; hastane, alışveriş
                merkezi, otel, konut, ofis ve restoran gibi yapılarda ısıtma,
                soğutma, havalandırma, taze hava, izolasyon, galvaniz sac
                uygulamaları, konfor iklimlendirme, yangın tesisatı ve sıhhi
                tesisat başta olmak üzere, mekanik tesisat alanlarında proje,
                taahhüt ve danışmanlık hizmetleri sunmaktadır.
              </p>
              <p className={styles.description}>
                Aslında hikâyemiz, 2010 yılında "Bener İklimlendirme" adıyla
                başladığımız sektör yolculuğumuza dayanmaktadır. Kurumsal
                yapımızı güçlendirme ve hizmet kalitemizi daha da ileriye taşıma
                hedefiyle 2025 yılında markamızı BNR Havalandırma olarak
                yenileyerek yola devam etme kararı aldık.
              </p>
              <p className={styles.description}>
                Kurulduğu günden bu yana sektördeki teknolojik gelişmeleri
                yakından takip eden BNR Havalandırma, müşteri memnuniyetini esas
                alan yaklaşımıyla, sürdürülebilir ve yüksek verimli çözümler
                üretmeyi hedeflemektedir.
              </p>
              <p className={styles.description}>
                Amacımız, müşteri memnuniyetini temel ilke edinerek, kalite
                standartlarımızdan ödün vermeden; sektörümüzdeki yenilikleri ve
                teknolojik gelişmeleri yakından takip etmek suretiyle,
                güvenilirliği ve saygınlığı ile öne çıkan lider firmalar
                arasında yer almaktır.
              </p>
              <p className={styles.description}>
                Genç ve dinamik kadromuzun enerjisini, bireysel tecrübelerimiz,
                güçlü referanslarımız, farklı bakış açılarımız ve kurumsal
                altyapımızla birleştirerek; gelişime açık yapımızla müşteri
                memnuniyetini öncelik haline getiriyor, kaliteden ödün vermeyen
                hizmet anlayışımızı temel ticari ilkemiz olarak benimsiyoruz.
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
              Mekanik tesisat alanında; hastane, alışveriş merkezi, otel, konut,
              ofis ve benzeri yapılarda, yenilikçi çözümler, yüksek kalite
              standartları ve müşteri odaklı hizmet anlayışı ile proje, taahhüt
              ve danışmanlık hizmetleri sunmak; sektörde güvenilir,
              sürdürülebilir ve etkin bir iş ortağı olarak yer almaktır.
            </p>
          </section>

          <section className={styles.vision}>
            <h2>Vizyonumuz</h2>
            <p>
              Kurumsal değerlerimizden ödün vermeden, uzman kadromuz ve
              yenilikçi yaklaşımımızla; sektörde maliyet açısından verimli,
              hizmette kaliteli ve zamanında teslimat odaklı çözümler sunarak,
              müşteri memnuniyetinde öncü ve tercih edilen bir marka olmaktır.
            </p>
          </section>

          <section className={styles.principles}>
            <h1>İLKELERİMİZ</h1>
            <h2>Dürüstlük • Güvenilirlik • Sorumluluk</h2>
            <p>
              Tüm faaliyet alanlarımızda ve iş ilişkilerimizde etik ilkelere
              bağlı kalmayı, dürüstlükten taviz vermemeyi, verdiğimiz sözleri
              yerine getirerek güvenilirliğimizi korumayı ve topluma örnek
              olmayı temel ilke olarak benimsemekteyiz.
            </p>

            <h2>Yenilikçilik • Yaratıcılık • Değişime Açıklık</h2>
            <p>
              Sektörel ve teknolojik gelişmeleri yakından takip ederek; sürekli
              öğrenmeyi, yenilikçi düşünceyi ve yaratıcı çözümleri teşvik
              ediyoruz. Bu yaklaşım, hem kurumsal gelişimimizi hem de ekip
              arkadaşlarımızın bireysel ilerlemesini destekleyen temel bir
              değerimizdir.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
