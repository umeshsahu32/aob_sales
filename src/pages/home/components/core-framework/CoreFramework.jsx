import styles from "./CoreFramework.module.css";
import ai from "@/assets/icons/home/AI_AUTOMATION_1.png";
import technology from "@/assets/icons/home/technology_1.png";
import process from "@/assets/icons/home/process_1.png";
import people from "@/assets/icons/home/people_1.png";
import HomeCard from "@/components/HomeCard";

const pillars = [
  {
    title: "PEOPLE",
    subtitle: "Execution Teams That Deliver",
    desc: "Inside sales, field sales, and hybrid teams managed, trained, and optimized by AOB.",
    icon: people,
  },
  {
    title: "PROCESS",
    subtitle: "Systems Create Predictability",
    desc: "Structured SOPs, KPI-driven workflows, funnel architecture, and conversion-focused execution.",
    icon: process,
    // active: true,
  },
  {
    title: "TECHNOLOGY",
    subtitle: "Infrastructure for Scale",
    desc: "CRM systems, automation workflows, reporting dashboards, and operational intelligence.",
    icon: technology,
  },
  {
    title: "AI",
    subtitle: "Intelligence Behind Modern Sales",
    desc: "AI-assisted qualification, automation, optimization, and scalable revenue operations.",
    icon: ai,
  },
];

const CoreFramework = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrap}>
          <h2 className={styles.sectionTitle}>Built on <span>Four Pillars</span></h2>
          <p className={styles.subtext}>
            Explore our sales outsourcing services
          </p>
        </div>

        <HomeCard data={pillars} />
      </div>
    </section>
  );
};

export default CoreFramework;
