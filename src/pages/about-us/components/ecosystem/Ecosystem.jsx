import SectionHeading from '@/components/SectionHeading';
import HomeCard from '@/components/HomeCard';
import styles from './Ecosystem.module.css';
import leadSystem from '@/assets/icons/about_us/AI_Powered_Lead_1.png'
import framework from '@/assets/icons/about_us/Qualification_Frameworks_1.png'
import salesProcess from '@/assets/icons/about_us/Sales_Process_1.png'
import revenueOperation from '@/assets/icons/about_us/Revenue_Operations_1.png'
import outbound from '@/assets/icons/about_us/outbound.png'
import salesPlatforms from '@/assets/icons/about_us/Sales_Infrastructure_Platforms_1.png'

const verticals = [
  { icon: leadSystem, title: 'AI-Powered Lead Systems', desc: 'Intelligent lead generation and qualification at scale.' },
  { icon: framework, title: 'Qualification Frameworks', desc: 'Structured processes to identify high-intent prospects.' },
  { icon: salesProcess, title: 'Sales Process Automation', desc: 'Automating repetitive workflows to free execution bandwidth.' },
  { icon: revenueOperation, title: 'Revenue Operations', desc: 'End-to-end alignment of sales, marketing, and operations.' },
  { icon: outbound, title: 'Outbound Systems', desc: 'Structured outreach infrastructure for predictable pipeline.' },
  { icon: salesPlatforms, title: 'Sales Infrastructure Platforms', desc: 'Custom-built tech stacks for revenue execution teams.' },
];

const Ecosystem = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading={<>AI-Powered <span>Sales Transformation</span></>}
          supportingText="Over the years, AOB India's operational expertise led to the development of multiple specialized business verticals focused on different aspects of modern sales and automation."
        />

        <HomeCard data={verticals}/>

        <div className={styles.objective}>
          <p className={styles.objectiveLabel}>One Common Objective</p>
          <p className={styles.objectiveStatement}>
            Making sales execution{' '}
            <span className="text-gradient">smarter, faster, and more scalable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
