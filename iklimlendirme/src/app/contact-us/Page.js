"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    mail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactText}>
          <h2 className={styles.contactTitle}>Bizimle İletişime Geç</h2>
          <p className={styles.contactDescription}>
            Sorularınız, talepleriniz veya projeleriniz hakkında bize
            ulaşabilirsiniz. Ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
          <div className={styles.contactItem}>
            <i className="bi bi-telephone"></i>
            <span>0555 555 55 55</span>
          </div>
          <div className={styles.contactItem}>
            <i className="bi bi-envelope"></i>
            <span>"mailto:@omerbener"</span>
          </div>
          <div className={styles.contactItem}>
            <i className="bi bi-geo-alt"></i>
            <span>adana zort mah. zart sokak</span>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form>
            <label htmlFor="firstName" className={styles.formLabel}>
              İsim
            </label>
            <input
              onChange={handleChange}
              value={formData.firstName}
              type="text"
              id="firstName"
              placeholder="İsminizi Girin"
              className={styles.formInput}
            />

            <label htmlFor="lastName" className={styles.formLabel}>
              Soyisim
            </label>
            <input
              onChange={handleChange}
              value={formData.lastName}
              type="text"
              id="lastName"
              placeholder="Soyadınızı Girin"
              className={styles.formInput}
            />

            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.mail}
              type="email"
              id="email"
              placeholder="Email Adresinizi Girin"
              className={styles.formInput}
            />

            <label htmlFor="phone" className={styles.formLabel}>
              Telefon
            </label>
            <input
              onChange={handleChange}
              value={formData.phone}
              type="number"
              id="phone"
              placeholder="Telefon Numaranızı Girin"
              className={styles.formInput}
            />

            <label htmlFor="message" className={styles.formLabel}>
              Mesaj
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              id="message"
              placeholder="Mesajınızı Yazın"
              className={styles.formTextarea}
            ></textarea>

            <button className={styles.formBtn} onSubmit={handleChange}>
              Gönder
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
