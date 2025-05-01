import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaProjectDiagram, FaSmile } from "react-icons/fa";
import styles from "./StatisticsSection.module.css";

const StatisticsSection = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statBox}>
        <FaBriefcase className={styles.icon} />
        <span
          className={styles.statNumber}
          style={{ minWidth: "4ch", textAlign: "center" }}
        >
          <CountUp start={1} end={20} duration={2} suffix="+" />
        </span>
        <span className={styles.statLabel}>
          Yıllık <br /> Deneyim
        </span>
      </div>
      <div className={styles.statBox}>
        <FaProjectDiagram className={styles.icon} />
        <span
          className={styles.statNumber}
          style={{ minWidth: "6ch", textAlign: "center" }}
        >
          <CountUp start={100} end={1000} duration={2.5} suffix="+" />
        </span>
        <span className={styles.statLabel}>
          Tamamlanan <br /> Proje
        </span>
      </div>
      <div className={styles.statBox}>
        <FaSmile className={styles.icon} />
        <span
          className={styles.statNumber}
          style={{ minWidth: "4ch", textAlign: "center" }}
        >
          <CountUp start={50} end={100} duration={2} suffix="%" />
        </span>
        <span className={styles.statLabel}>
          Müşteri <br /> Memnuniyeti
        </span>
      </div>
    </section>
  );
};

export default StatisticsSection;
