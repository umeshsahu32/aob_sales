import React, { useEffect, useRef } from 'react';
import styles from './Toast.module.css';

const ICONS = {
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(0,200,130,0.15)" />
      <path d="M5.5 10.5l3 3 6-6" stroke="#00C882" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(255,80,80,0.15)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#FF5050" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
};

const Toast = ({ type = 'success', message, onClose, duration = 4000 }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    if (progressRef.current) {
      progressRef.current.style.animationDuration = `${duration}ms`;
    }
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert" aria-live="polite">
      <div className={styles.icon}>{ICONS[type]}</div>
      <p className={styles.message}>{message}</p>
      <button className={styles.close} onClick={onClose} aria-label="Dismiss notification">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div ref={progressRef} className={`${styles.progress} ${styles[`progress_${type}`]}`} />
    </div>
  );
};

export default Toast;
