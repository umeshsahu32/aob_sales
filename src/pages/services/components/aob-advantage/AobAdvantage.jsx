import React from 'react';
import SectionHeading from '../../../../components/SectionHeading';
import styles from './AobAdvantage.module.css';

const advantages = [
  {
    number: '01',
    title: 'Execution-First Thinking',
    desc: 'We focus on operational execution, not just strategy presentations.',
  },
  {
    number: '02',
    title: 'Number-Driven Systems',
    desc: 'Every process is built around measurable business outcomes.',
  },
  {
    number: '03',
    title: 'AI + Human Balance',
    desc: 'Technology where automation improves scale. Human execution where relationships matter.',
  },
  {
    number: '04',
    title: 'Plug-and-Play Deployment',
    desc: 'Rapid setup and execution with minimal operational disruption.',
  },
  {
    number: '05',
    title: 'Process-Led Execution',
    desc: 'Structured systems built for consistency, accountability, and scale.',
  },
  {
    number: '06',
    title: 'Built for ROI',
    desc: 'Focused on lower CAC, operational efficiency, higher conversion, and scalable growth.',
  },
];

const AobAdvantage = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Why Businesses Work With AOB"
          subheading="The AOB Advantage"
        />

        <div className={styles.grid}>
          {advantages.map((item) => (
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

export default AobAdvantage;
