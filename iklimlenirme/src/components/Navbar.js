import React from "react";

const Navbar = (props) => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="img/logo.jpg" alt="Logo" />
            <div className="logo-text">
              <span>MÜHENDİSLİK</span>
              <span>
                {props.title == "Muhendislik" ? "Hosgeldiniz" : props.title}
              </span>
              <span>{props.hour > 18 ? "İyi Akşamlar" : "İyi Günler"}</span>
            </div>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="/" className="active">
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
