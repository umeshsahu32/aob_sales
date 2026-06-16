import styles from './Philosophy.module.css';

const Philosophy = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.content}`}>
        <div className={styles.quoteMark}>"</div>
        <blockquote className={styles.quote}>
          Modern Sales is an art performed within the boundaries of data,
          driven by the right mix of technology.
        </blockquote>
        <div className={styles.author}>— Praveen Kumar, Founder</div>
      </div>
    </section>
  );
};

export default Philosophy;
