import styles from "./page.module.css";
import { FaFan, FaFireExtinguisher, FaThermometerEmpty } from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdPlumbing } from "react-icons/md";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <main className={styles.bodyContainer}>
        <section className={styles.sectionOne}>
          <div className={styles.imgContainer}>
            <img src="img/mainPage1.jpg" alt="BNR Havalandırma Sistemleri" />
            <div className={styles.overlayText}>
              <h2 className={styles.overlayTitle}>BNR HAVALANDIRMA</h2>
              <p className={styles.overlayDescription}>
                Fabrikalarda, AVM’lerde ve konut projelerinde profesyonel
                çözümler sunuyoruz.
              </p>
              <p className={styles.overlayDescription}>
                Daha düşük enerji tüketimi ve yüksek verimlilik sağlayan
                sistemler.
              </p>
              <div className={styles.overlayActions}>
                <a href="/contact-us" className={styles.overlayButton}>
                  İLETİŞİM
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionSecond}>
          <div className={styles.sectionContainer}>
            <h2>HİZMETLERİMİZ</h2>
            <div className={styles.sectionStructure}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <FaFan />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>
                      Yerden Isıtma Sistemleri
                    </h4>
                    <p className={styles.cardBodyDescription}>
                      Yerden ısıtma sistemleri, zemine entegre edilen boru veya
                      kablolar aracılığıyla ortamın homojen bir şekilde
                      ısınmasını sağlayan konforlu ve verimli bir ısıtma
                      çözümüdür.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <LuAirVent />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>
                      Havalandırma Sistemleri
                    </h4>
                    <p className={styles.cardBodyDescription}>
                      Kapalı alanlarda temiz hava sirkülasyonunu sağlamak için
                      farklı havalandırma çözümleri sunuyoruz. Yerinde ücretsiz
                      keşif ile en uygun sistemi belirliyor, projelendirme,
                      montaj ve bakım hizmetlerini eksiksiz şekilde
                      gerçekleştiriyoruz.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <FaThermometerEmpty />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Isıtma Sistemleri</h4>
                    <p className={styles.cardBodyDescription}>
                      Konut, iş yeri, okul ve fabrikalar için özel ısıtma
                      çözümleri sunuyoruz. İhtiyaca uygun sistemlerin kurulumunu
                      yaparak uzun ömürlü ve verimli kullanım için bakım-onarım
                      desteği sağlıyoruz.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <TbAirConditioning />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Soğutma Sistemleri</h4>
                    <p className={styles.cardBodyDescription}>
                      Üretim tesisleri, depolar ve oteller gibi alanlarda ideal
                      sıcaklık koşullarını sağlamak için gelişmiş soğutma
                      sistemleri kuruyoruz. Projelendirme sürecinden montaj ve
                      periyodik bakıma kadar kapsamlı hizmet sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <FaFireExtinguisher />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>
                      Yangın Söndürme Sistemleri
                    </h4>
                    <p className={styles.cardBodyDescription}>
                      Güvenliğinizi en üst seviyeye taşımak için zorunlu yangın
                      söndürme sistemlerini projelendiriyor, kurulumunu
                      gerçekleştiriyor ve düzenli bakım hizmeti sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <MdPlumbing />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Sıhhi Tesisat</h4>
                    <p className={styles.cardBodyDescription}>
                      Yaşam ve çalışma alanlarınız için sıhhi tesisat
                      sistemlerini en verimli şekilde tasarlıyoruz. Ücretsiz
                      keşif hizmetimizle ihtiyacınızı belirleyerek, uzun ömürlü
                      ve güvenilir çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionThird}>
          <div className={styles.sectionContainer}>
            <h2>REFERANSLARIMIZ</h2>
            <div className={styles.refContainer}>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className={styles.refCards}>
                <div className={styles.refCard}>
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionFourth}>
          <div className={styles.sectionContainer}>
            <h2>İLETİŞİM</h2>
            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <h3>
                  <strong>İletişim Bilgileri</strong>
                </h3>
                <div className={styles.contactAdress}>
                  <BsGeoAlt className={styles.contactIcon}/>
                  <p className={styles.contactText}>Levent Mahallesi 1830 Sokak No:47 Yüreğir/Adana</p>
                </div>
                <div className={styles.contactMail}>
                  <BsEnvelope className={styles.contactIcon}/>
                  <a href="mailto:bnrhavalandirma@gmail.com" className={styles.contactLink}>
                    <span className={styles.contactText}> bnrhavalandirma@gmail.com </span>
                  </a>
                </div>
                <div className={styles.contactPhone}>
                  <BsTelephone className={styles.contactIcon}/>                  
                  <a href="tel:+905446653943" className={styles.contactLink}>
                    <span className={styles.contactText}> 0544 665 39 43 </span>
                  </a>
                </div>
              </div>

              <div className={styles.contactMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.629345516051!2d35.37539407627602!3d36.98157465745371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288fe843998199%3A0xb4d3bdb463cc7397!2sLevent%2C%201830.%20Sk.%20No%3A47%2C%2001316%20Y%C3%BCre%C4%9Fir%2FAdana!5e1!3m2!1str!2str!4v1743694069991!5m2!1str!2str"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
