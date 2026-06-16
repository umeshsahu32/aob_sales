import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import sales from '../../../../assets/icons/home/sales_outsource.png'
import ai from '../../../../assets/icons/home/Ai.png'
import revenue from '../../../../assets/icons/home/Revenue_Operations.png'
import meetings from '../../../../assets/icons/home/Meeting_Generation_Systems.png'



const services = [
  {
    id: 'service-outsourcing',
    title: 'AI-Powered Sales Outsourcing',
    desc: 'End-to-end sales execution combining manpower, systems, reporting, and operational management.',
    ctaLabel: 'Hybrid Human + AI Operations',
    Icon: sales,
    active: true,
  },
  {
    id: 'service-automation',
    title: 'AI Automation',
    desc: 'Automating repetitive sales and operational workflows to improve efficiency and reduce cost.',
    ctaLabel: 'Automation Flows',
    Icon: ai,
  },
  {
    id: 'service-revenue-ops',
    title: 'Revenue Operations',
    desc: 'Designing and managing the backend systems that drive predictable sales performance.',
    ctaLabel: 'Performance Dashboard',
    Icon: revenue,
  },
  {
    id: 'service-meetings',
    title: 'Meeting Generation Systems',
    desc: 'Structured outbound systems focused on generating qualified business conversations and opportunities.',
    ctaLabel: 'Calendar + Outbound Workflow',
    Icon: meetings,
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrap}>
          <h2 className={styles.sectionTitle}>Sales Systems Designed for Scale</h2>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} id={s.id} className={`${styles.card} ${s.active ? styles.cardActive : ''}`}>
              <img src={s.Icon} className={styles.servicesIcon}/>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <Link to="/services" className={styles.ctaBtn}>{s.ctaLabel}</Link>
              <Link to="/services" className={styles.learnMore}>
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
