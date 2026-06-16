import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>Contact AOB India</span>
        <h1 className={styles.heading}>
          Let's Build Your<br />
          <span className="text-gradient">Sales System</span>
        </h1>
        <p className={styles.subheading}>
          Tell us about your business goals. We'll design a system built around your
          numbers, your market, and your growth targets.
        </p>
      </div>
    </section>
  );
};

export default Hero;
