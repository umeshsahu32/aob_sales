import funnelImage from "../../../../assets/images/Home page/funnel-image.jpeg";
import styles from "./AobApproach.module.css";

const features = [
  "AI Automation",
  "Sales Execution",
  "Process Design",
  "Reporting Systems",
  "Performance Mgmt",
  "Operational Optimization",
];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="9" cy="9" r="9" fill="#dbeafe" />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke="#0274b0"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AobApproach = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* ── Left content ── */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            <span className={styles.headingLight}>
              You Define the Revenue Goal.{" "}
            </span>
            <span className={styles.headingDark}>
              We Build the Sales Engine.
            </span>
          </h2>

          <p className={styles.body}>
            AOB India is a number-driven revenue engineering company. We start
            with your revenue goals, expansion plans, and challenges, and build
            the complete execution system required to achieve it.
          </p>

          <div className={styles.featureGrid}>
            {features.map((item) => (
              <div key={item} className={styles.featureItem}>
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <blockquote className={styles.tagline}>
            No guesswork. No fragmented execution. Only structured growth.
          </blockquote>

          <blockquote className={styles.tagline_1}>
            Welcome to the world of AI-powered sales outsourcing.
          </blockquote>
        </div>

        {/* ── Right: funnel image ── */}
        <div className={styles.funnelWrap}>
          <img
            src={funnelImage}
            alt="Revenue funnel: Goal → Architecture → Leads → Growth"
            className={styles.funnelImg}
          />
        </div>
      </div>
    </section>
  );
};

export default AobApproach;
