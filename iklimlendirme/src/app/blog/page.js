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
    },
    {
      title: "Adana İklimlendirme",
      link: "/blog/adanaIklimlendirme",
      img: "/img/main.jpg",
      alt: "Adana İklimlendirme",
    },
    {
      title: "Sarıçam Havalandırma",
      link: "/blog/saricamHavalandirma",
      img: "/img/main.jpg",
      alt: "Sarıçam Havalandırma",
    },
    {
      title: "Seyhan İklimlendirme",
      link: "/blog/seyhanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Seyhan İklimlendirme",
    },
    {
      title: "Çukurova İklimlendirme",
      link: "/blog/cukurovaIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Çukurova İklimlendirme",
    },
    {
      title: "İklimlendirme Sistemleri",
      link: "/blog/iklimlendirmeSistemleri",
      img: "/img/main.jpg",
      alt: "İklimlendirme Sistemleri",
    },
    {
      title: "Adıyaman İklimlendirme",
      link: "/blog/adiyamanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Adıyaman İklimlendirme",
    },
    {
      title: "İskenderun İklimlendirme",
      link: "/blog/iskenderunIkilimlendirme",
      img: "/img/main.jpg",
      alt: "İskenderun İklimlendirme",
    },
    {
      title: "Hatay İklimlendirme",
      link: "/blog/hatayIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Hatay İklimlendirme",
    },
    {
      title: "Kozan İklimlendirme",
      link: "/blog/kozanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Kozan İklimlendirme",
    },
    {
      title: "Ceyhan İklimlendirme",
      link: "/blog/ceyhanIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Ceyhan İklimlendirme",
    },
    {
      title: "Tarsus İklimlendirme",
      link: "/blog/tarsusIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Tarsus İklimlendirme",
    },
    {
      title: "Mersin İklimlendirme",
      link: "/blog/mersinIkilimlendirme",
      img: "/img/main.jpg",
      alt: "Mersin İklimlendirme",
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
            <Link href={post.link} className={styles.cardLink}>
              Daha Fazla
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
