import React from "react";
import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <div class={styles.container}>
        <div class="contactText">
          <h2 class="contactTitle">Bizimle İletişime Geç</h2>
          <p class="contactDescription">
            Sorularınız, talepleriniz veya projeleriniz hakkında bize
            ulaşabilirsiniz. Ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
          <div class="contactItem">
            <i class="bi bi-telephone"></i>
            <span>0555 555 55 55</span>
          </div>
          <div class="contactItem">
            <i class="bi bi-envelope"></i>
            <span>"mailto:@omerbener"</span>
          </div>
          <div class="contactItem">
            <i class="bi bi-geo-alt"></i>
            <span>adana zort mah. zart sokak</span>
          </div>
        </div>
        <div class="formContainer">
          <form>
            <label for="firstName" class="formLabel">
              İsim
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="İsminizi Girin"
              class="formInput"
            />

            <label for="lastName" class="formLabel">
              Soyisim
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Soyadınızı Girin"
              class="formInput"
            />

            <label for="email" class="formLabel">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Adresinizi Girin"
              class="formInput"
            />

            <label for="phone" class="formLabel">
              Telefon
            </label>
            <input
              type="number"
              id="phone"
              placeholder="Telefon Numaranızı Girin"
              class="formInput"
            />

            <label for="message" class="formLabel">
              Mesaj
            </label>
            <textarea
              id="message"
              placeholder="Mesajınızı Yazın"
              class="formTextarea"
            ></textarea>

            <button class="formBtn">Gönder</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
