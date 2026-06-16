import SectionHeading from '../../../../components/SectionHeading';
import styles from './DecadeOfExecution.module.css';

const stats = [
  { number: '10+', label: 'Years of Execution', sub: 'execution-focused operations' },
  { number: '55+', label: 'Industries', sub: 'served across B2B and B2C' },
  { number: '100s', label: 'Businesses', sub: 'supported through sales & revenue systems' },
  { number: '1000s', label: 'Sales Interactions', sub: 'analyzed, optimized, and executed' },
];

const industries = [
  'Real Estate',
  'EdTech',
  'Manufacturing',
  'Healthcare',
  'Financial Services',
  'D2C Brands',
  'Professional Services',
  'B2B Enterprises',
];

const DecadeOfExecution = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="10+ Years of Operational Legacy"
          subheading="A Decade of Execution"
          supportingText="Over the last decade, AOB India has worked across diverse business categories, developing deep understanding of buyer psychology, sales systems, funnel behavior, and execution dynamics."
        />

        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>

        <div className={styles.industriesBlock}>
          <p className={styles.industriesHeading}>Industries We Have Served</p>
          <div className={styles.industryTags}>
            {industries.map((ind) => (
              <span key={ind} className={styles.industryTag}>{ind}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecadeOfExecution;
