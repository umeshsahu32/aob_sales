import Button from '../../../../components/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className={styles.label}>About AOB India</span>
          <h1>
            Engineering Sales Systems
            <br />
            <span className="text-gradient">Since 2014</span>
          </h1>
          <p className={styles.subheading}>
            From sales outsourcing to AI-powered revenue systems — AOB India has spent over a decade
            helping businesses scale through execution, process, technology, and innovation.
          </p>
          <p className={styles.supportingText}>
            Over the last 10+ years, AOB India has evolved from a traditional sales outsourcing
            company into a modern sales engineering organization powered by AI, automation, and
            structured execution. Today, we help businesses build predictable revenue systems by
            combining the right balance of People, Process, Technology, and AI.
          </p>
          <div className={styles.buttons}>
            <Button variant="primary">Build Your Sales Engine</Button>
            <Button variant="secondary">Book Strategy Call</Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.journeyCard}>
            <div className={styles.journeyTop}>
              <div className={styles.yearBadge}>2014</div>
              <div className={styles.journeyLine}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.yearBadge + ' ' + styles.yearBadgeAccent}>Today</div>
            </div>
            <div className={styles.journeyLabels}>
              <span>Sales Outsourcing</span>
              <span className="text-gradient">AI Revenue Systems</span>
            </div>
            <div className={styles.pillars}>
              {['People', 'Process', 'Technology', 'AI'].map((p) => (
                <span key={p} className={styles.pillar}>{p}</span>
              ))}
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Years of Execution</div>
          </div>

          <div className={styles.orb}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
