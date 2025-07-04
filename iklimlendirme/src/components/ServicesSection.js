import React from "react";
import styles from "./ServicesSection.module.css";
import { FaFan, FaFireExtinguisher, FaThermometerEmpty } from "react-icons/fa";
import { LuAirVent } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdPlumbing } from "react-icons/md";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaFan />,
      title: "Yerden Isıtma Sistemleri",
      description: "Yerden ısıtma sistemleri, zemine entegre edilen boru veya kablolar aracılığıyla ortamın homojen bir şekilde ısınmasını sağlayan konforlu ve verimli bir ısıtma çözümüdür."
    },
    {
      icon: <LuAirVent />,
      title: "Havalandırma Sistemleri", 
      description: "Kapalı alanlarda temiz hava sirkülasyonunu sağlamak için farklı havalandırma çözümleri sunuyoruz. Yerinde ücretsiz keşif ile en uygun sistemi belirliyor, projelendirme, montaj ve bakım hizmetlerini eksiksiz şekilde gerçekleştiriyoruz."
    },
    {
      icon: <FaThermometerEmpty />,
      title: "Isıtma Sistemleri",
      description: "Konut, iş yeri, okul ve fabrikalar için özel ısıtma çözümleri sunuyoruz. İhtiyaca uygun sistemlerin kurulumunu yaparak uzun ömürlü ve verimli kullanım için bakım-onarım desteği sağlıyoruz."
    },
    {
      icon: <TbAirConditioning />,
      title: "Soğutma Sistemleri",
      description: "Üretim tesisleri, depolar ve oteller gibi alanlarda ideal sıcaklık koşullarını sağlamak için gelişmiş soğutma sistemleri kuruyoruz. Projelendirme sürecinden montaj ve periyodik bakıma kadar kapsamlı hizmet sunuyoruz."
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Yangın Söndürme Sistemleri",
      description: "Güvenliğinizi en üst seviyeye taşımak için zorunlu yangın söndürme sistemlerini projelendiriyor, kurulumunu gerçekleştiriyor ve düzenli bakım hizmeti sunuyoruz."
    },
    {
      icon: <MdPlumbing />,
      title: "Sıhhi Tesisat",
      description: "Yaşam ve çalışma alanlarınız için sıhhi tesisat sistemlerini en verimli şekilde tasarlıyoruz. Ücretsiz keşif hizmetimizle ihtiyacınızı belirleyerek, uzun ömürlü ve güvenilir çözümler sunuyoruz."
    }
  ];

  return (
    <section className={styles.sectionSecond}>
      <div className={styles.sectionContainer}>
        <h2>HİZMETLERİMİZ</h2>
        <div className={styles.sectionStructure}>
          <div className={styles.cards}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  {service.icon}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardBodyTitle}>
                    {service.title}
                  </h3>
                  <p className={styles.cardBodyDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
