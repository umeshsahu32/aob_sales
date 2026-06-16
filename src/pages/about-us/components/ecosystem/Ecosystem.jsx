import SectionHeading from '../../../../components/SectionHeading';
import styles from './Ecosystem.module.css';

const verticals = [
  { icon: '🤖', title: 'AI-Powered Lead Systems', desc: 'Intelligent lead generation and qualification at scale.' },
  { icon: '🎯', title: 'Qualification Frameworks', desc: 'Structured processes to identify high-intent prospects.' },
  { icon: '⚙️', title: 'Sales Process Automation', desc: 'Automating repetitive workflows to free execution bandwidth.' },
  { icon: '📊', title: 'Revenue Operations', desc: 'End-to-end alignment of sales, marketing, and operations.' },
  { icon: '📡', title: 'Outbound Systems', desc: 'Structured outreach infrastructure for predictable pipeline.' },
  { icon: '🏗', title: 'Sales Infrastructure Platforms', desc: 'Custom-built tech stacks for revenue execution teams.' },
];

const Ecosystem = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Building Beyond AOB"
          subheading="The Ecosystem"
          supportingText="Over the years, AOB India's operational expertise led to the development of multiple specialized business verticals focused on different aspects of modern sales and automation."
        />

        <div className={styles.grid}>
          {verticals.map((v) => (
            <div key={v.title} className={styles.card}>
              <div className={styles.icon}>{v.icon}</div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.objective}>
          <p className={styles.objectiveLabel}>One Common Objective</p>
          <p className={styles.objectiveStatement}>
            Making sales execution{' '}
            <span className="text-gradient">smarter, faster, and more scalable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
