import SectionHeading from '../../../../components/SectionHeading';
import styles from './Industries.module.css';

const industries = [
  { icon: '🏢', name: 'Real Estate' },
  { icon: '📚', name: 'EdTech' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '💰', name: 'Financial Services' },
  { icon: '🤝', name: 'B2B Services' },
  { icon: '📦', name: 'D2C Brands' },
  { icon: '💼', name: 'Professional Services' },
];

const alignmentPoints = [
  'Buyer behavior',
  'Sales cycle complexity',
  'Operational structure',
  'Conversion dynamics',
];

const Industries = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Sales Systems Across Industries"
          subheading="Industries We Support"
          supportingText="Every industry operates differently. That is why AOB India designs customised revenue systems aligned to each sector's unique dynamics."
        />

        <div className={styles.alignmentRow}>
          {alignmentPoints.map((pt) => (
            <div key={pt} className={styles.alignChip}>
              <span className={styles.alignDot}></span>
              {pt}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {industries.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <span className={styles.icon}>{ind.icon}</span>
              <span className={styles.name}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
