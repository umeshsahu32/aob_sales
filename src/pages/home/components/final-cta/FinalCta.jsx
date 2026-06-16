import { Link } from 'react-router-dom';
import styles from './FinalCta.module.css';

const FinalCta = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading}>Build a Predictable Sales Engine</h2>
        <p className={styles.subtext}>
         Whether you are scaling, restructuring, or building a modern sales ecosystem, AOB India helps you create systems that drive measurable growth. This makes us the top sales outsourcing company in India.
        </p>
        <div className={styles.buttons}>
          <Link to="/contact-us" className={styles.btnPrimary}>Book Strategy Call</Link>
          <Link to="/contact-us" className={styles.btnOutline}>Build Your Sales Engine</Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
