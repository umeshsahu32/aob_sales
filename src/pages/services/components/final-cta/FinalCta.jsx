import Button from '@/components/Button';
import styles from './FinalCta.module.css';
import HeroBadge from '@/components/HeroBadge';

const FinalCta = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
      <HeroBadge text="Get Started"/>
        <h2 className={styles.heading}>Build a Sales System That Scales</h2>
        <p className={styles.body}>
          Whether you are building a sales function, improving operational efficiency, or
          restructuring revenue execution, AOB India helps create systems designed for measurable
          growth.
        </p>
        <div className={styles.buttons}>
          <Button variant="primary">Build Your Sales Engine</Button>
          <Button variant="secondaryDark">Book Strategy Call</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
