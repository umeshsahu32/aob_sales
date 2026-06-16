import SectionHeading from '../../../../components/SectionHeading';
import styles from './WhyAob.module.css';

const differentiators = [
  {
    number: '01',
    title: 'Number-Driven Approach',
    desc: 'Every engagement begins with targets, metrics, and measurable business goals.',
  },
  {
    number: '02',
    title: 'Plug-and-Play Execution',
    desc: 'Rapid deployment of systems, process, manpower, and operational infrastructure.',
  },
  {
    number: '03',
    title: 'AI + Human Balance',
    desc: 'Optimizing the right balance of automation and human execution for maximum output.',
  },
  {
    number: '04',
    title: 'Process-Led Thinking',
    desc: 'Structured systems built for predictability, consistency, and scale.',
  },
  {
    number: '05',
    title: 'End-to-End Ownership',
    desc: 'From strategy to execution to optimization — we manage the complete revenue system.',
  },
  {
    number: '06',
    title: 'Built for ROI',
    desc: 'Focused on operational efficiency, conversion improvement, and measurable outcomes.',
  },
];

const WhyAob = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Why Businesses Trust AOB"
          subheading="What Makes AOB Different"
        />

        <div className={styles.grid}>
          {differentiators.map((item) => (
            <div key={item.number} className={styles.card}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAob;
