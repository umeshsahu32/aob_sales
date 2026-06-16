import React from 'react';
import SectionHeading from '../../../../components/SectionHeading';
import styles from './AobStory.module.css';

const stages = [
  { year: '2014', label: 'Sales Outsourcing', desc: 'Structured execution & accountability-driven sales teams.' },
  { year: '2017+', label: 'Tech Integration', desc: 'CRMs, automation tools, and digital workflows enter the picture.' },
  { year: '2020+', label: 'Revenue Operations', desc: 'End-to-end ownership of marketing, sales, and operations.' },
  { year: 'Today', label: 'AI Revenue Systems', desc: 'AI-powered lead systems, automation, and operational intelligence.', accent: true },
];

const AobStory = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <SectionHeading
            heading="The Evolution of AOB India"
            subheading="The AOB Story"
            centered={false}
          />
          <p className={styles.belief}>
            AOB India began with a simple belief:
          </p>
          <p className={styles.beliefStatement}>
            Businesses grow when execution becomes predictable.
          </p>
          <p className={styles.body}>
            At a time when most companies treated sales as manpower deployment, AOB focused on
            building structured execution systems driven by accountability, process, and measurable
            outcomes.
          </p>
          <p className={styles.body}>
            What started as a sales outsourcing company gradually evolved into a larger vision —
            integrating technology, automating workflows, improving operational efficiency, and
            building scalable revenue systems for modern businesses.
          </p>
          <div className={styles.intersection}>
            <span>Today, AOB India operates at the intersection of:</span>
            <div className={styles.intersectionTags}>
              <span className={styles.tag}>AI</span>
              <span className={styles.plus}>+</span>
              <span className={styles.tag}>Process</span>
              <span className={styles.plus}>+</span>
              <span className={styles.tag}>Human Execution</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          {stages.map((stage, i) => (
            <div key={i} className={`${styles.stage} ${stage.accent ? styles.stageAccent : ''}`}>
              <div className={styles.stageMeta}>
                <span className={styles.stageYear}>{stage.year}</span>
                <span className={styles.stageName}>{stage.label}</span>
              </div>
              <p className={styles.stageDesc}>{stage.desc}</p>
              {i < stages.length - 1 && <div className={styles.connector}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AobStory;
