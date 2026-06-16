import React from 'react';
import SectionHeading from '../../../../components/SectionHeading';
import styles from './Transformation.module.css';

const oldModel = [
  'Just telecallers',
  'Isolated marketing',
  'Disconnected execution teams',
  'Manual, error-prone processes',
  'No operational visibility',
];

const newModel = [
  'Intelligent systems',
  'AI-powered automation',
  'Operational visibility',
  'Process-driven execution',
  'Measurable ROI',
];

const focusAreas = [
  'AI-assisted sales operations',
  'Workflow automation',
  'Structured outbound systems',
  'Operational intelligence',
  'Scalable revenue execution',
];

const Transformation = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="From Sales Outsourcing to Revenue Engineering"
          subheading="The Transformation"
          supportingText="The world of sales has changed. Modern businesses need more than manpower — they need intelligent systems built for scale."
        />

        <div className={styles.comparisonGrid}>
          <div className={styles.column}>
            <div className={styles.columnHeader + ' ' + styles.oldHeader}>
              <span className={styles.headerLabel}>Old World</span>
              <span className={styles.headerSub}>What businesses no longer need</span>
            </div>
            <ul className={styles.list}>
              {oldModel.map((item) => (
                <li key={item} className={`${styles.listItem} ${styles.oldItem}`}>
                  <span className={styles.crossIcon}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.dividerCol}>
            <div className={styles.dividerLine}></div>
            <div className={styles.arrowCircle}>→</div>
            <div className={styles.dividerLine}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeader + ' ' + styles.newHeader}>
              <span className={styles.headerLabel}>New World</span>
              <span className={styles.headerSub}>What they need today</span>
            </div>
            <ul className={styles.list}>
              {newModel.map((item) => (
                <li key={item} className={`${styles.listItem} ${styles.newItem}`}>
                  <span className={styles.checkIcon}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.focusBlock}>
          <p className={styles.focusHeading}>Today, our focus is on:</p>
          <div className={styles.focusTags}>
            {focusAreas.map((area) => (
              <span key={area} className={styles.focusTag}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
