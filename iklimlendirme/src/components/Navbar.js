"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = (props) => {
  const route = usePathname();
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
            {route == "/" ? null : (
              <li>
                <a href="/" className={route == "/" ? styles.active : null}>
                  Anasayfa
                </a>
              </li>
            )}
            <li>
              <a
                href="/about-us"
                className={route == "/about-us" ? styles.active : null}
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/services">Hizmetlerimiz</a>
            </li>
            <li>
              <a href="/projects">Projelerimiz</a>
            </li>
            <li>
              <a href="/references">Referanslarımız</a>
            </li>
            <li>
              <a href="/blog" className={route == "/blog" ? styles.active : null}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact-us">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
