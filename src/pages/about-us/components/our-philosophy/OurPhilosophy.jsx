import SectionHeading from '@/components/SectionHeading';
import RowItems from '@/components/RowItems';
import styles from './OurPhilosophy.module.css';
import disconnectedSystem from "@/assets/icons/about_us/Disconnected_systems.png"
import poorExecution from "@/assets/icons/about_us/Poor_execution_visibility.png"
import inconsistentProcess from "@/assets/icons/about_us/Inconsistent_processes.png"
import underutilizedTechnology from "@/assets/icons/about_us/underutilized_technology.png"

const painPoints = [
  { title: 'Disconnected systems', icon: disconnectedSystem },
  { title: 'Poor execution visibility', icon: poorExecution },
  { title: 'Inconsistent processes', icon: inconsistentProcess },
  { title: 'Underutilized technology', icon: underutilizedTechnology },
];

const OurPhilosophy = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading={<>Modern Sales Requires <span>More Than Manpower</span></>}
        />

        <div className={styles.quoteBlock}>
          <div className={styles.quoteMark}>"</div>
          <blockquote className={styles.quote}>
            Modern Sales is an art performed within the boundaries of data, driven by the right mix
            of technology.
          </blockquote>
          <div className={styles.author}>— Praveen Kumar, Founder</div>
        </div>

        <div className={styles.divider}>
          <span>We believe businesses do not suffer from lack of effort. They suffer from:</span>
        </div>

        <RowItems data={painPoints}/>

        <div className={styles.solution}>
          <p>
            That is why AOB focuses on building{' '}
            <strong className={styles.highlight}>complete revenue ecosystems</strong> — where AI,
            automation, process, and human execution work together as one unified system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
