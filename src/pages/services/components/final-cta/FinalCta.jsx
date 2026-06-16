import Button from '../../../../components/Button';
import styles from './FinalCta.module.css';

const FinalCta = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Get Started</span>
        <h2 className={styles.heading}>Build a Sales System That Scales</h2>
        <p className={styles.body}>
          Whether you are building a sales function, improving operational efficiency, or
          restructuring revenue execution, AOB India helps create systems designed for measurable
          growth.
        </p>
        <div className={styles.buttons}>
          <Button variant="primary">Build Your Sales Engine</Button>
          <Button variant="secondary">Book Strategy Call</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
