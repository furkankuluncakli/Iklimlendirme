import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar title={"Muhendislik"} />
      <main className="body-container">
        <section className="section-one">BÖLÜM 1</section>

        <section className="section-second">
          <div className="section-container">
            <h2>HİZMETLERİMİZ</h2>
            <div className="section-structure">
              <div className="cards">
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-fan"></i>
                  </div>
                  <div className="card-body">
                    <h4>Yerden Isıtma Sistemleri</h4>
                    <p>
                      Yerden ısıtma sistemleri ortamın zeminine boru ya da
                      kablolar ile döşenen mekanın ısınmasını sağlayan ısıtma
                      sistemleridir.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-cloud-fill"></i>
                  </div>
                  <div className="card-body">
                    <h4>Havalandırma Sistemleri</h4>
                    <p>
                      Havalandırma Sistemleri; Kapalı alanlar için gerekli olan,
                      çeşitli seçenekleri bulunan havalandırma sistemleri ile
                      ilgili müşterilerimize yerinde ücretsiz keşif imkanı
                      sunuyor, projelendirme, bakım-onarım süreçlerini
                      yönetiyoruz.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-thermometer"></i>
                  </div>
                  <div className={styles.cardBody}>
                    <h4>Isıtma Sistemleri</h4>
                    <p>
                      Okullar, konutlar, iş yerleri, fabrikalar için farklı
                      ısıtma sistemleri seçenekleriyle müşterilerimiz için en
                      etkin ısıtma sistemlerinin kurulumu, bakım-onarım
                      işlemlerini gerçekleştiriyoruz.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-thermometer"></i>
                  </div>
                  <div className="card-body">
                    <h4>Soğutma Sistemleri</h4>
                    <p>
                      Üretim tesisleri, depolama alanları, oteller için gerekli
                      olan soğutma sistemleri projelendirme süreçlerini
                      yönetiyor, kurulum, bakım-onarım hizmetleri sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-thermometer"></i>
                  </div>
                  <div className="card-body">
                    <h4>Yangın Söndürme Sistemleri</h4>
                    <p>
                      Kapalı alanlar için kurulumu zorunlu hale getirilen yangın
                      söndürme sistemleri seçenekleriyle ilgili müşterilerimize
                      projelendirme, bakım-onarım hizmetleri sunuyoruz.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon">
                    <i className="bi bi-thermometer"></i>
                  </div>
                  <div className="card-body">
                    <h4>Sıhhi Tesisat</h4>
                    <p>
                      Mekanlar için gerekli olan sıhhi tesisat için yerinde
                      ücretsiz keşif hizmeti veriyor ve projelendirme
                      süreçlerini yönetiyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-third">
          <div className="section-container">
            <h2>REFERANSLARIMIZ</h2>
            <div className="ref-container">
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
              <div className="ref-cards">
                <div className="ref-card">
                  <img src="img/logo.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-fourth">
          <div className="section-container">
            <h2>İLETİŞİM</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>
                  <strong>İletişim Bilgileri</strong>
                </h3>
                <div className="contact-adress">
                  <i className="bi bi-send-arrow-up"></i>
                  <p>
                    Fulya Mahallesi Ortaklar Caddesi Denizhan Sokak Lale Han
                    No:7 Kat:1 Daire:3, 34381 Şişli/İstanbul
                  </p>
                </div>
                <div className="contact-mail">
                  <i className="bi bi-envelope-at-fill"></i>
                  <a href="mailto:omerbener@gmail.com">
                    <span> omerbener@gmail.com </span>
                  </a>
                </div>
                <div className="contact-phone">
                  <i className="bi bi-telephone-fill"></i>
                  <a href="tel:05331328430">
                    <span> 05331328430 </span>
                  </a>
                </div>
              </div>

              <div className="contact-map">
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

        <section className="footer">
          <div className="section-container footer-wrapper">
            <div className="about-us">
              <div className="about-us-img">
                <img src="img/logo.jpg" alt="" />
              </div>
            </div>
            <div className="about-us-text">
              <p>
                SALT Mühendislik; Hastane, alışveriş merkezi, otel, konut, ofis,
                restoran vb. yapılarda ısıtma tesisatı, soğutma tesisatı,
                havalandırma tesisatı, yangın tesisatı ve sıhhi tesisat gibi
                mekanik tesisat alanlarında proje, taahhüt ve danışmanlık
                hizmetleri vermek amacı ile 2017 yılında İstanbul’da
                kurulmuştur.
              </p>
            </div>
            <div className="footer-menu">
              <h3>Hızlı Menü</h3>
              <ul>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Hizmetler</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className={styles.footerBottom}>
          <div className="footer-bottom-container">
            <div className="icons">
              <div className="social-icon">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
            <div className="footer-bottom-text">
              <p>Tüm Hakları Saklıdır &COPY; 2025 Bener İklimlendirme</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
