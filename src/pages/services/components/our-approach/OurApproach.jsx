import React from 'react';
import SectionHeading from '../../../../components/SectionHeading';
import styles from './OurApproach.module.css';

const startsWith = [
  'Revenue objectives',
  'Conversion assumptions',
  'Operational requirements',
  'Scalability goals',
];

const engineered = [
  'Manpower strategy',
  'Process architecture',
  'Technology stack',
  'Automation systems',
  'Reporting frameworks',
  'Operational management',
];

const OurApproach = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <SectionHeading
            heading="We Start With Numbers"
            subheading="Our Approach"
            centered={false}
          />
          <p className={styles.body}>
            Every business wants growth. But sustainable growth only happens when sales becomes
            measurable, structured, and operationally predictable.
          </p>
          <p className={styles.body}>
            At AOB India, every engagement begins with clear business targets — and from there, we
            engineer the complete execution system required to achieve those outcomes.
          </p>
          <div className={styles.highlight}>
            You define the destination. We build the system to get there.
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.block}>
            <p className={styles.blockLabel}>Every engagement begins with:</p>
            <ul className={styles.list}>
              {startsWith.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.dot}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.arrow}>↓</div>

          <div className={styles.block + ' ' + styles.blockAccent}>
            <p className={styles.blockLabel}>We engineer the complete system — including:</p>
            <ul className={styles.list}>
              {engineered.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.checkDot}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
