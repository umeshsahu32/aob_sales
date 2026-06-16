import styles from "./CoreFramework.module.css";
import ai from "../../../../assets/icons/home/AI_AUTONATION.png";
import technology from "../../../../assets/icons/home/technology.png";
import process from "../../../../assets/icons/home/process.png";
import people from "../../../../assets/icons/home/people.png";

const pillars = [
  {
    title: "PEOPLE",
    subtitle: "Execution Teams That Deliver",
    desc: "Inside sales, field sales, and hybrid teams managed, trained, and optimized by AOB.",
    Icon: people,
  },
  {
    title: "PROCESS",
    subtitle: "Systems Create Predictability",
    desc: "Structured SOPs, KPI-driven workflows, funnel architecture, and conversion-focused execution.",
    Icon: process,
    // active: true,
  },
  {
    title: "TECHNOLOGY",
    subtitle: "Infrastructure for Scale",
    desc: "CRM systems, automation workflows, reporting dashboards, and operational intelligence.",
    Icon: technology,
  },
  {
    title: "AI",
    subtitle: "Intelligence Behind Modern Sales",
    desc: "AI-assisted qualification, automation, optimization, and scalable revenue operations.",
    Icon: ai,
  },
];

const CoreFramework = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrap}>
          <h2 className={styles.sectionTitle}>Built on Four Pillars</h2>
          <p className={styles.subtext}>
            Explore our sales outsourcing services
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`${styles.card} ${p.active ? styles.cardActive : ""}`}
            >
              <img src={p.Icon} className={styles.pillarIcon}/>
              <div className={styles.cardTitle}>{p.title}</div>
              <div className={styles.subtitle}>{p.subtitle}</div>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFramework;
