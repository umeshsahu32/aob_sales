import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ heading, subheading, supportingText, centered = true, className = '' }) => {
  return (
    <div className={`${styles.headerContainer} ${centered ? styles.centered : ''} ${className}`}>
      {subheading && <h3 className={styles.subheading}>{subheading}</h3>}
      <h2 className={styles.heading}>{heading}</h2>
      {supportingText && <p className={styles.supportingText}>{supportingText}</p>}
    </div>
  );
};

export default SectionHeading;
