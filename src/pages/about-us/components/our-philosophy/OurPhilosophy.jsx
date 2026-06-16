import SectionHeading from '../../../../components/SectionHeading';
import styles from './OurPhilosophy.module.css';

const painPoints = [
  { label: 'Disconnected systems', icon: '⛓' },
  { label: 'Poor execution visibility', icon: '👁' },
  { label: 'Inconsistent processes', icon: '🔄' },
  { label: 'Underutilized technology', icon: '⚙️' },
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
              <span className={styles.painIcon}>{pt.icon}</span>
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
