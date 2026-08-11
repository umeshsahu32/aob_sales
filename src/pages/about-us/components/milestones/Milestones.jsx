import SectionHeading from '@/components/SectionHeading';
import styles from './Milestones.module.css';
import Achievements from '@/components/Achievements';
import reliableSales from '@/assets/icons/about_us/Reliable_Sales.png'
import salesOutsource from '@/assets/icons/about_us/Sales_Outsourcing_Agency.png'
import startupSales from '@/assets/icons/about_us/Startup_Sales.png'
import fAndBSales from '@/assets/icons/about_us/F&B_Sales.png'
import earlyDigital from '@/assets/icons/about_us/Early_Digital.png'
import qualificationFramework from '@/assets/icons/about_us/Qualification_Frameworks.png'

const achievements = [
  {
    Icon: reliableSales,
    title: 'Reliable Sales Outsourcing Partner',
    body: 'AOB India was featured as a unique sales outsourcing company with the capability to recruit, train, deploy, manage, sell on behalf of clients, and support payment collection.',
    tag: 'AOB Sales',
  },
  {
    Icon: salesOutsource,
    title: "India's First Sales Outsourcing Agency",
    body: "Media coverage described AOB India as India's first sales outsourcing agency — a pathbreaking initiative focused on outsourcing sales efficiently while contributing to business growth and employment generation.",
    tag: 'AOB Sales',
  },
  {
    Icon: startupSales,
    title: 'Startup Sales Enablement Recognition',
    body: 'AOB India was featured for solving one of the biggest pain points of early-stage startups — building sales strategy and reaching customers when resources are limited.',
    tag: 'AOB Sales',
  },
  {
    Icon: fAndBSales,
    title: 'F&B Sales & Marketing Transformation',
    desc: "AOB India was featured for bringing innovative sales and marketing strategies to the Food & Beverage sector, including coverage around Rameshwaram Café's growth story.",
    tag: 'AOB Sales',
  },
  {
    Icon: earlyDigital,
    title: 'Early Digital & Online Event Innovation',
    body: "AOB's innovation journey included online events, with media coverage positioning AOB Events as India's leader in online events — hosting multi-day events across automobile, education, real estate, wellness, and investment.",
    tag: 'AOB Events',
  },
  {
    Icon: qualificationFramework,
    title: 'Thought Leadership in AI & Digital Transformation',
    body: 'The group\'s thought leadership has been documented through published articles on AI, phygital experiences, AI-based prediction models, virtualization, augmented reality, and digital transformation.',
    tag: 'Thought Leadership',
  },
];

const Milestones = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading={<>Our <span>Achievements</span></>}
          supportingText="AOB India's journey has not only been built through client work, but also documented over time through media coverage, industry stories, business features, and public recognition."
          dark
        />
        <Achievements data={achievements} />
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
