"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
                <Link href="/" className={route == "/" ? styles.active : null}>
                  Anasayfa
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/about-us"
                className={route == "/about-us" ? styles.active : null}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/services">Hizmetlerimiz</Link>
            </li>
            <li>
              <a href="/projects">Projelerimiz</a>
            </li>
            <li>
              <Link href="#references">Referanslarımız</Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={route == "/blog" ? styles.active : null}
              >
                Blog
              </Link>
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
