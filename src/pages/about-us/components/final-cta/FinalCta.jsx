import Button from '@/components/Button';
import styles from './FinalCta.module.css';
import { useNavigate } from 'react-router-dom';

const FinalCta = () => {

  const navigate  = useNavigate()

  const navigateToContact = ()=>{
    navigate('/contact-us')
  }
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>The Next Chapter</span>
        <h2 className={styles.heading}>The Next Chapter of AOB India</h2>
        <p className={styles.body}>
          As businesses continue to evolve, sales revenue systems must evolve with them. AOB India is now focused on building the next generation of AI-powered sales revenue infrastructure — combining execution, automation, intelligence, and operational discipline.

        </p>
        <p className={styles.mission}>
          The mission remains the same:{' '}
          <span className="text-gradient">
            Helping businesses build predictable, scalable growth systems.
          </span>
        </p>
        <div className={styles.buttons}>
          <Button onClick={navigateToContact} variant="primary">Build Your Sales Engine</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
