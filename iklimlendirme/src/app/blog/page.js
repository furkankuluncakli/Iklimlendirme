'use client'
import React, { useState } from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Pagination";


const Blog = () => {
  const blogPosts = [
    {
      title: "Adana İklimlendirme",
      link: "/blog/adana",
      img: "/img/montaj.jpg",
      alt: "Adana İklimlendirme",
      description:
        "Adana'da iklimlendirme sistemleri ve hizmetleri hakkında bilgi alın.",
    },
    {
      title: "Yüreğir İklimlendirme",
      link: "/blog/yuregir",
      img: "/img/montaj2.jpg",
      alt: "Yüreğir İklimlendirme",
      description:
        "Yüreğir bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Sarıçam Havalandırma",
      link: "/blog/saricam",
      img: "/img/montaj3.jpg",
      alt: "Sarıçam Havalandırma",
      description: "Sarıçam bölgesinde havalandırma sistemleri ve çözümleri.",
    },
    {
      title: "Seyhan İklimlendirme",
      link: "/blog/seyhan",
      img: "/img/kanal.jpg",
      alt: "Seyhan İklimlendirme",
      description:
        "Seyhan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Çukurova İklimlendirme",
      link: "/blog/cukurova",
      img: "/img/kanal2.jpg",
      alt: "Çukurova İklimlendirme",
      description:
        "Çukurova bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Kozan İklimlendirme",
      link: "/blog/kozan",
      img: "/img/kanal3.jpg",
      alt: "Kozan İklimlendirme",
      description:
        "Kozan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Ceyhan İklimlendirme",
      link: "/blog/ceyhan",
      img: "/img/kamyon.jpg",
      alt: "Ceyhan İklimlendirme",
      description:
        "Ceyhan bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Aladağ İklimlendirme",
      link: "/blog/aladag",
      img: "/img/kanal4.jpg",
      alt: "Aladağ İklimlendirme",
      description:
        "Aladağ bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Karaisalı İklimlendirme",
      link: "/blog/karaisali",
      img: "/img/kanal5.jpg",
      alt: "Karaisalı İklimlendirme",
      description:
        "Karaisalı bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Feke İklimlendirme",
      link: "/blog/feke",
      img: "/img/kanal6.jpg",
      alt: "Fekeİklimlendirme",
      description:
        "Feke bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Pozantı İklimlendirme",
      link: "/blog/pozanti",
      img: "/img/kanal7.jpg",
      alt: "Pozantı İklimlendirme",
      description:
        "Pozantı bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Mersin İklimlendirme",
      link: "/blog/mersin",
      img: "/img/kanal8.jpg",
      alt: "Mersin İklimlendirme",
      description:
        "Mersin bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Osmaniye İklimlendirme",
      link: "/blog/osmaniye",
      img: "/img/kanal10.jpg",
      alt: "Osmaniye İklimlendirme",
      description:
        "Osmaniye bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "Hatay İklimlendirme",
      link: "/blog/hatay",
      img: "/img/kanal11.jpg",
      alt: "Hatay İklimlendirme",
      description:
        "Hatay bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
    {
      title: "İskenderun İklimlendirme",
      link: "/blog/iskenderun",
      img: "/img/havalandirma.jpg",
      alt: "İskenderun İklimlendirme",
      description:
        "İskenderun bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },

    {
      title: "Tarsus İklimlendirme",
      link: "/blog/tarsus",
      img: "/img/main.jpg",
      alt: "Tarsus İklimlendirme",
      description:
        "Tarsus bölgesinde iklimlendirme çözümleri hakkında bilgi alın.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 11;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postPerPage);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.cardContainer}>
        {currentPosts.map((post, index) => (
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
      <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => setCurrentPage(page)}/>
    </div>
  );
};

export default Blog;
