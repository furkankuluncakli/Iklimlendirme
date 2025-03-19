import React from "react";
import styles from "./navbar.module.css"

const Navbar = (props) => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="img/logo.jpg" alt="Logo" />
            <div className={styles.logoText}>
              <span>MÜHENDİSLİK</span>
              <span>{props.title}</span>
            </div>
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a href="/" className={styles.active}>
                Anasayfa
              </a>
            </li>
            <li>
              <a href="about-us">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Hizmetlerimiz</a>
            </li>
            <li>
              <a href="#">Projelerimiz</a>
            </li>
            <li>
              <a href="#">Referanslarımız</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
