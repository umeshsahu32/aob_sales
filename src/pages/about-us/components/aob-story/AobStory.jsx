import React from 'react';
import SectionHeading from '../../../../components/SectionHeading';
import styles from './AobStory.module.css';

const stages = [
  { year: '2014',  label: 'Sales Outsourcing',   desc: 'Structured execution & accountability-driven sales teams.' },
  { year: '2017+', label: 'Tech Integration',    desc: 'CRMs, automation tools, and digital workflows enter the picture.' },
  { year: '2020+', label: 'Revenue Operations',  desc: 'End-to-end ownership of marketing, sales, and operations.' },
  { year: 'Today', label: 'AI Revenue Systems',  desc: 'AI-powered lead systems, automation, and operational intelligence.', accent: true },
];

const AobStory = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>

        {/* ── Left: narrative ── */}
        <div className={styles.content}>
          <SectionHeading
            heading={<>The AOB <span>Story</span></>}
            centered={false}
          />
          <p className={styles.belief}>AOB India began with a simple belief:</p>
          <blockquote className={styles.beliefStatement}>
            Businesses grow when execution becomes predictable.
          </blockquote>
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
            <span className={styles.intersectionLabel}>Today, AOB India operates at the intersection of:</span>
            <div className={styles.intersectionTags}>
              <span className={styles.tag}>AI</span>
              <span className={styles.plus}>+</span>
              <span className={styles.tag}>Process</span>
              <span className={styles.plus}>+</span>
              <span className={styles.tag}>Human Execution</span>
            </div>
          </div>
        </div>

        {/* ── Right: alternating timeline ── */}
        <div className={styles.timeline}>
          {stages.map((stage, i) => {
            const isRight = i % 2 === 0;
            return (
              <div key={i} className={styles.timelineRow}>
                {/* Left cell */}
                <div className={styles.cellLeft}>
                  {!isRight && (
                    <div className={`${styles.card} ${stage.accent ? styles.cardAccent : ''}`}>
                      <span className={styles.stageYear}>{stage.year}</span>
                      <h4 className={styles.stageName}>{stage.label}</h4>
                      <p className={styles.stageDesc}>{stage.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className={styles.dotCol}>
                  <div className={styles.dot}></div>
                </div>

                {/* Right cell */}
                <div className={styles.cellRight}>
                  {isRight && (
                    <div className={`${styles.card} ${stage.accent ? styles.cardAccent : ''}`}>
                      <span className={styles.stageYear}>{stage.year}</span>
                      <h4 className={styles.stageName}>{stage.label}</h4>
                      <p className={styles.stageDesc}>{stage.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AobStory;
