import React from 'react';
import styles from './LegalPage.module.css';

const LegalPage = ({ title, subtitle, lastUpdated, children }) => {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.badge}>Legal</span>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {lastUpdated && (
            <p className={styles.meta}>Last updated: {lastUpdated}</p>
          )}
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default LegalPage;
