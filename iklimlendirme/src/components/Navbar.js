"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const route = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/img/logo.jpg"
              alt="BNR Havalandırma Logo"
              width={60}
              height={60}
              className={styles.logoImage}
              priority
            />
            <div className={styles.logoText}>
              <span>BNR</span>
              <span>Havalandırma</span>
            </div>
          </Link>

          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}
          >
            <li>
              <Link
                href="/"
                className={route == "/" ? styles.active : null}
                onClick={toggleMenu}
              >
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className={route == "/about-us" ? styles.active : null}
                onClick={toggleMenu}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={route == "/services" ? styles.active : null}
                onClick={toggleMenu}
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="/#references" onClick={toggleMenu}>
                Referanslarımız
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={route == "/blog" ? styles.active : null}
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={route == "/contact-us" ? styles.active : null}
                onClick={toggleMenu}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
