import Button from '../../../../components/Button';
import styles from './Hero.module.css';

const pillars = ['Structured Execution', 'Operational Intelligence', 'AI-Powered Systems', 'Revenue Management'];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>AOB India Services</span>
        <h1 className={styles.heading}>
          Sales Systems Built<br />
          <span className="text-gradient">for Growth</span>
        </h1>
        <p className={styles.subheading}>
          We design, deploy, and run sales ecosystems that combine execution, process, technology,
          and AI to drive measurable business outcomes.
        </p>

        <div className={styles.pillars}>
          {pillars.map((p) => (
            <span key={p} className={styles.pillar}>{p}</span>
          ))}
        </div>

        <p className={styles.supporting}>
          AOB India helps businesses build scalable revenue infrastructure designed around numbers,
          efficiency, and execution.
        </p>

        <div className={styles.buttons}>
          <Button variant="primary">Build Your Sales Engine</Button>
          <Button variant="secondary">Book Strategy Call</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
