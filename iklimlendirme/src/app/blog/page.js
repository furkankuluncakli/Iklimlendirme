import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      title: "Yüreğir İklimlendirme",
      link: "/blog/yuregirIklimlendirme",
      img: "/img/logo.jpg",
      alt: "Yüreğir İklimlendirme",
      description: "Yüreğir bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Adana İklimlendirme",
      link: "/blog/adanaIklimlendirme",
      img: "/img/main.jpg",
      alt: "Adana İklimlendirme",
      description: "Adana'da iklimlendirme sistemleri ve hizmetleri hakkında bilgi alın.",
    },
    {
      title: "Sarıçam Havalandırma",
      link: "/blog/saricamHavalandirma",
      img: "/img/main.jpg",
      alt: "Sarıçam Havalandırma",
      description: "Sarıçam bölgesinde havalandırma sistemleri ve çözümleri.",
    },
    {
      title: "Seyhan İklimlendirme",
      link: "/blog/seyhanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Seyhan İklimlendirme",
      description: "Seyhan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Çukurova İklimlendirme",
      link: "/blog/cukurovaIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Çukurova İklimlendirme",
      description: "Çukurova bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "İklimlendirme Sistemleri",
      link: "/blog/iklimlendirmeSistemleri",
      img: "/img/main.jpg",
      alt: "İklimlendirme Sistemleri",
      description: "İklimlendirme sistemleri ve çözümleri hakkında bilgi alın.",
    },
    {
      title: "Adıyaman İklimlendirme",
      link: "/blog/adiyamanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Adıyaman İklimlendirme",
      description: "Adıyaman bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "İskenderun İklimlendirme",
      link: "/blog/iskenderunIkilimlendirme",
      img: "/img/main.jpg",
      alt: "İskenderun İklimlendirme",
      description: "İskenderun bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Hatay İklimlendirme",
      link: "/blog/hatayIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Hatay İklimlendirme",
      description: "Hatay bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Kozan İklimlendirme",
      link: "/blog/kozanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Kozan İklimlendirme",
      description: "Kozan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Ceyhan İklimlendirme",
      link: "/blog/ceyhanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Ceyhan İklimlendirme",
      description: "Ceyhan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Tarsus İklimlendirme",
      link: "/blog/tarsusIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Tarsus İklimlendirme",
      description: "Tarsus bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Mersin İklimlendirme",
      link: "/blog/mersinIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Mersin İklimlendirme",
      description: "Mersin bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.cardContainer}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={post.img}
              alt={post.alt}
              width={300}
              height={200}
              className={styles.image}
            />
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardDescription}>{post.description}</p>
            <Link href={post.link} className={styles.cardLink}>
              <div className={styles.cardLinkContent}>
                <span className={styles.cardLinkText}>Detaylı Bilgi</span>
                <svg
                  className={styles.arrowIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
