import styles from "./page.module.css";
import { FaFan, FaFireExtinguisher, FaThermometerEmpty} from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdPlumbing } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className={styles.bodyContainer}>
        <section className={styles.sectionOne}>
          <div className={styles.imgContainer}>
            <img src="img/mainPage1.jpg" alt="BNR İklimlendirme Sistemleri" />
            <div className={styles.overlayText}>
              <h2 className={styles.overlayTitle}>BNR İKLİMLENDİRME</h2>
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
                    <FaFan/>
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Yerden Isıtma Sistemleri</h4>
                    <p className={styles.cardBodyDescription}>
                      Yerden ısıtma sistemleri, zemine entegre edilen boru veya kablolar aracılığıyla ortamın homojen bir şekilde ısınmasını sağlayan konforlu ve verimli bir ısıtma çözümüdür.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                  <LuAirVent />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Havalandırma Sistemleri</h4>
                    <p className={styles.cardBodyDescription}>
                      Kapalı alanlarda temiz hava sirkülasyonunu sağlamak için farklı havalandırma çözümleri sunuyoruz. Yerinde ücretsiz keşif ile en uygun sistemi belirliyor, projelendirme, montaj ve bakım hizmetlerini eksiksiz şekilde gerçekleştiriyoruz.
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
                      Konut, iş yeri, okul ve fabrikalar için özel ısıtma çözümleri sunuyoruz. İhtiyaca uygun sistemlerin kurulumunu yaparak uzun ömürlü ve verimli kullanım için bakım-onarım desteği sağlıyoruz.
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
                      Üretim tesisleri, depolar ve oteller gibi alanlarda ideal sıcaklık koşullarını sağlamak için gelişmiş soğutma sistemleri kuruyoruz. Projelendirme sürecinden montaj ve periyodik bakıma kadar kapsamlı hizmet sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                  <FaFireExtinguisher />
                  </div>
                  <div className={styles.cardBody}>
                    <h4 className={styles.cardBodyTitle}>Yangın Söndürme Sistemleri</h4>
                    <p className={styles.cardBodyDescription}>
                      Güvenliğinizi en üst seviyeye taşımak için zorunlu yangın söndürme sistemlerini projelendiriyor, kurulumunu gerçekleştiriyor ve düzenli bakım hizmeti sunuyoruz.
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
                      Yaşam ve çalışma alanlarınız için sıhhi tesisat sistemlerini en verimli şekilde tasarlıyoruz. Ücretsiz keşif hizmetimizle ihtiyacınızı belirleyerek, uzun ömürlü ve güvenilir çözümler sunuyoruz.
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
                  <i className="bi bi-send-arrow-up"></i>
                  <p>
                    Fulya Mahallesi Ortaklar Caddesi Denizhan Sokak Lale Han
                    No:7 Kat:1 Daire:3, 34381 Şişli/İstanbul
                  </p>
                </div>
                <div className={styles.contactMail}>
                  <i className="bi bi-envelope-at-fill"></i>
                  <a href="mailto:omerbener@gmail.com">
                    <span> omerbener@gmail.com </span>
                  </a>
                </div>
                <div className={styles.contactPhone}>
                  <i className="bi bi-telephone-fill"></i>
                  <a href="tel:05331328430">
                    <span> 05331328430 </span>
                  </a>
                </div>
              </div>

              <div className={styles.contactMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2679.6984139567703!2d35.34191752767538!3d36.992701657494656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f7508c8acd3%3A0xf207d8b1dd719ebe!2zU2luYW5wYcWfYSBNYWhhbGxlc2kgTXVodGFybMSxxJ_EsQ!5e0!3m2!1str!2str!4v1740083409837!5m2!1str!2str"
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
