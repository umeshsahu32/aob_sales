import { Link } from 'react-router-dom';
import bannerGraph from '../../../../assets/images/Home page/banner-graph.jpeg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className={styles.heroBadge}>AI-Powered</span>
          <h1 className={styles.heading}>
            Sales Systems
          </h1>
          <p className={styles.supportingText}>
           We design, deploy, and run sales revenue engines powered by the right balance of People, Process, Technology, and AI. AOB India is a sales outsourcing company in India that helps businesses build predictable sales systems through AI automation, structured execution, and performance-driven sales operations.
          </p>
          <div className={styles.buttons}>
            <Link to="/contact-us" className={styles.btnPrimary}>
              Build Your Sales Engine
            </Link>
            <Link to="/contact-us" className={styles.btnSecondary}>
              Book Strategy Call
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src={bannerGraph}
            alt="Revenue growth bar chart"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
