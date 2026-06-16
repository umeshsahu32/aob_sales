import React from 'react';
import { Link } from 'react-router-dom';
import caseStudies from '../../data/caseStudiesData';
import styles from './CaseStudy.module.css';

const CaseStudy = () => (
  <div className={styles.page}>
    <section className={styles.hero}>
      <div className="container">
        <span className={styles.badge}>CASE STUDIES</span>
        <h1 className={styles.heroTitle}>
          Real Work.{' '}
          <span className="text-gradient">Real Results.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Deep-dive into how we engineer revenue transformation across industries.
        </p>
      </div>
    </section>

    <section className={styles.listSection}>
      <div className="container">
        <div className={styles.list}>
          {caseStudies.map((cs, i) => (
            <Link
              to={`/case-study/${cs.id}`}
              key={cs.id}
              className={styles.item}
            >
              <span className={styles.itemNum}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className={styles.itemInfo}>
                <div className={styles.itemHeader}>
                  <span className={styles.itemCompany}>{cs.company}</span>
                  <span className={styles.itemIndustry}>{cs.industry}</span>
                  <span className={styles.itemSegment}>{cs.segment}</span>
                </div>
                <p className={styles.itemTagline}>{cs.tagline}</p>
              </div>

              <div className={styles.itemMetrics}>
                {cs.keyMetrics.map((m) => (
                  <span key={m.label} className={styles.metricPill}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </span>
                ))}
              </div>

              <span className={styles.itemArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CaseStudy;
