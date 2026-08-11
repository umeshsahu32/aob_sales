import SectionHeading from '../../../../components/SectionHeading';
import styles from './OurPhilosophy.module.css';
import disconnectedSystem from "../../../../assets/icons/about_us/Disconnected_systems.png"
import poorExecution from "../../../../assets/icons/about_us/Poor_execution_visibility.png"
import inconsistentProcess from "../../../../assets/icons/about_us/Inconsistent_processes.png"
import underutilizedTechnology from "../../../../assets/icons/about_us/underutilized_technology.png"

const painPoints = [
  { label: 'Disconnected systems', icon: disconnectedSystem },
  { label: 'Poor execution visibility', icon: poorExecution },
  { label: 'Inconsistent processes', icon: inconsistentProcess },
  { label: 'Underutilized technology', icon: underutilizedTechnology },
];

const OurPhilosophy = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Modern Sales Requires More Than Manpower"
          subheading="Our Philosophy"
        />

        <div className={styles.quoteBlock}>
          <div className={styles.quoteMark}>"</div>
          <blockquote className={styles.quote}>
            Modern Sales is an art performed within the boundaries of data, driven by the right mix
            of technology.
          </blockquote>
          <div className={styles.author}>— Praveen Kumar, Founder</div>
        </div>

        <div className={styles.divider}>
          <span>We believe businesses do not suffer from lack of effort. They suffer from:</span>
        </div>

        <div className={styles.painGrid}>
          {painPoints.map((pt) => (
            <div key={pt.label} className={styles.painCard}>
             <img src={pt.icon} className={styles.painIcon} alt={pt.label} />
              <span className={styles.painLabel}>{pt.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.solution}>
          <p>
            That is why AOB focuses on building{' '}
            <strong className={styles.highlight}>complete revenue ecosystems</strong> — where AI,
            automation, process, and human execution work together as one unified system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
