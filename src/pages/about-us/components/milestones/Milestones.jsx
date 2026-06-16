import SectionHeading from '../../../../components/SectionHeading';
import styles from './Milestones.module.css';

const achievements = [
  // {
  //   icon: '₹',
  //   title: '₹460 Crore Sales Milestone',
  //   desc: 'QLead, an AOB ecosystem brand, was featured for achieving sales worth ₹460 crore — a strong validation of the group\'s ability to build scalable lead and revenue systems.',
  //   tag: 'AOB Sales',
  // },
  {
    icon: '🤝',
    title: 'Reliable Sales Outsourcing Partner',
    desc: 'AOB India was featured as a unique sales outsourcing company with the capability to recruit, train, deploy, manage, sell on behalf of clients, and support payment collection.',
    tag: 'AOB Sales',
  },
  {
    icon: '🥇',
    title: "India's First Sales Outsourcing Agency",
    desc: "Media coverage described AOB India as India's first sales outsourcing agency — a pathbreaking initiative focused on outsourcing sales efficiently while contributing to business growth and employment generation.",
    tag: 'AOB Sales',
  },
  {
    icon: '🚀',
    title: 'Startup Sales Enablement Recognition',
    desc: 'AOB India was featured for solving one of the biggest pain points of early-stage startups — building sales strategy and reaching customers when resources are limited.',
    tag: 'AOB Sales',
  },
  {
    icon: '🍽',
    title: 'F&B Sales & Marketing Transformation',
    desc: "AOB India was featured for bringing innovative sales and marketing strategies to the Food & Beverage sector, including coverage around Rameshwaram Café's growth story.",
    tag: 'AOB Sales',
  },
  {
    icon: '🌐',
    title: 'Early Digital & Online Event Innovation',
    desc: "AOB's innovation journey included online events, with media coverage positioning AOB Events as India's leader in online events — hosting multi-day events across automobile, education, real estate, wellness, and investment.",
    tag: 'AOB Events',
  },
  {
    icon: '🧠',
    title: 'Thought Leadership in AI & Digital Transformation',
    desc: 'The group\'s thought leadership has been documented through published articles on AI, phygital experiences, AI-based prediction models, virtualization, augmented reality, and digital transformation.',
    tag: 'Thought Leadership',
  },
];

const Milestones = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="A Decade of Work, Documented by the Market"
          subheading="Milestones & Recognition"
          supportingText="AOB India's journey has not only been built through client work, but also documented over time through media coverage, industry stories, business features, and public recognition."
        />

        <div className={styles.grid}>
          {achievements.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                {/* <span className={styles.cardTag}>{item.tag}</span> */}
              </div>
            </div>
          ))}
        </div>

        <p className={styles.closing}>
          From sales outsourcing to AI-powered revenue systems, AOB's journey has been shaped by
          execution, experimentation, innovation, and the ability to adapt before the market demands
          it.
        </p>
      </div>
    </section>
  );
};

export default Milestones;
