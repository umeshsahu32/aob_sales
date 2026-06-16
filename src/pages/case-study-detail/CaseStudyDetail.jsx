import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import caseStudies from '../../data/caseStudiesData';
import styles from './CaseStudyDetail.module.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const cs = caseStudies.find((c) => c.id === id);

  if (!cs) return <Navigate to="/case-study" replace />;

  return (
    <div className={styles.page}>
      {/* ── Back bar ── */}
      <div className={styles.backBar}>
        <div className="container">
          <Link to="/case-study" className={styles.back}>
            ← Back to Case Studies
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroCont}>
            <div className={styles.heroTags}>
              <span className={styles.industryTag}>{cs.industry}</span>
              <span className={styles.segmentTag}>{cs.segment}</span>
            </div>
            <h1 className={styles.heroCompany}>{cs.company}</h1>
            <p className={styles.heroTagline}>{cs.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── Customer Overview ── */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <span className={styles.overviewLabel}>Industry</span>
              <span className={styles.overviewValue}>{cs.overview.industry}</span>
            </div>
            <div className={styles.overviewCard}>
              <span className={styles.overviewLabel}>Business</span>
              <span className={styles.overviewValue}>{cs.overview.business}</span>
            </div>
            <div className={styles.overviewCard}>
              <span className={styles.overviewLabel}>Focus Segment</span>
              <span className={styles.overviewValue}>{cs.overview.focusSegment}</span>
            </div>
            <div className={styles.overviewCard}>
              <span className={styles.overviewLabel}>Core Challenge</span>
              <span className={styles.overviewValue}>{cs.overview.challenge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Challenge ── */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Business Challenge</h2>
          <p className={styles.challengeIntro}>{cs.intro.heading}</p>
          <div className={styles.challengeLines}>
            {cs.intro.lines.map((line, i) => (
              <span key={i} className={styles.challengeLine}>{line}</span>
            ))}
          </div>
          <div className={styles.challengeGrid}>
            {cs.challenges.map((ch) => (
              <div key={ch.title} className={styles.challengeCard}>
                <span className={styles.challengeDot} />
                <div>
                  <h3 className={styles.challengeCardTitle}>{ch.title}</h3>
                  <p className={styles.challengeCardDesc}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AOB Intervention ── */}
      <section className={styles.interventionSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>AOB Revenue Engineering Intervention</h2>
          <div className={styles.interventionGrid}>

            {/* People */}
            <div className={styles.interventionCard}>
              <h3 className={styles.interventionCardTitle}>People</h3>
              <div className={styles.modelCompare}>
                <div className={styles.modelBox}>
                  <span className={styles.modelLabel}>Old Model</span>
                  {cs.people.oldModel.map((p) => (
                    <span key={p} className={styles.modelItem}>{p}</span>
                  ))}
                </div>
                <span className={styles.modelArrow}>→</span>
                <div className={styles.modelBox}>
                  <span className={styles.modelLabel}>New Model</span>
                  {cs.people.newModel.map((p) => (
                    <span key={p} className={styles.modelItem}>{p}</span>
                  ))}
                </div>
              </div>
              <p className={styles.modelOutcome}>{cs.people.outcome}</p>
            </div>

            {/* Process */}
            <div className={styles.interventionCard}>
              <h3 className={styles.interventionCardTitle}>Process</h3>
              <div className={styles.processFunnel}>
                {cs.process.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className={styles.processStep}>{step}</span>
                    {i < cs.process.length - 1 && (
                      <span className={styles.processArrow}>↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div className={styles.interventionCard}>
              <h3 className={styles.interventionCardTitle}>Technology Stack</h3>
              <div className={styles.techList}>
                {cs.technology.map((t) => (
                  <span key={t} className={styles.techItem}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Operational Impact</h2>
          <div className={styles.impactGrid}>
            {cs.impactMetrics.map((m) => (
              <div key={m.label} className={`${styles.impactCard} ${m.direction === 'up' ? styles.impactCardUp : styles.impactCardDown}`}>
                <span className={`${styles.impactValue} ${m.direction === 'up' ? styles.impactUp : styles.impactDown}`}>
                  {m.direction === 'up' ? '↑' : '↓'}&nbsp;{m.value}
                </span>
                <span className={styles.impactLabel}>{m.label}</span>
                <p className={styles.impactDetail}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Transformation ── */}
      <section className={styles.transformSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Strategic Outcome</h2>
          <p className={styles.transformIntro}>
            Andromeda moved from manpower-led sales scaling to AI-powered revenue infrastructure.
          </p>
          <div className={styles.transformGrid}>
            {cs.transformation.map((t, i) => (
              <div key={i} className={styles.transformRow}>
                <span className={styles.transformFrom}>{t.from}</span>
                <span className={styles.transformArrow}>→</span>
                <span className={styles.transformTo}>{t.to}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className={styles.closingSection}>
        <div className="container">
          <blockquote className={styles.closingQuote}>
            &ldquo;{cs.closingLine}&rdquo;
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
