import SectionHeading from '../../../../components/SectionHeading';
import styles from './ServicesList.module.css';

const services = [
  {
    id: 'sales-outsourcing',
    number: '01',
    icon: '🤝',
    title: 'AI-Powered Sales Outsourcing',
    description:
      'Sales execution today requires more than manpower. AOB India combines trained execution teams, structured operational systems, reporting infrastructure, and AI-assisted workflows to build scalable sales ecosystems for businesses.',
    manages: [
      'Inside sales teams',
      'Field sales teams',
      'Hybrid execution models',
      'Lead management systems',
      'Reporting structures',
      'Operational optimization',
    ],
    designedAround: [
      'Conversion efficiency',
      'Execution visibility',
      'Process discipline',
      'Measurable ROI',
    ],
    capabilities: [
      'Inside Sales Operations',
      'Field Sales Deployment',
      'Hybrid Sales Models',
      'Team Hiring & Training',
      'KPI Management',
      'Daily Reporting Systems',
      'Lead Tracking & CRM',
      'Sales Workflow Management',
    ],
  },
  {
    id: 'ai-automation',
    number: '02',
    icon: '🤖',
    title: 'AI Automation Systems',
    description:
      'Modern businesses lose significant time and revenue through repetitive operational tasks, disconnected workflows, and inconsistent follow-ups. AOB India designs automation systems that improve efficiency, reduce operational dependency, and create scalable execution frameworks.',
    manages: [
      'Sales workflows',
      'Lead qualification',
      'Communication systems',
      'Reporting',
      'Operational intelligence',
    ],
    designedAround: [
      'Reduce operational friction',
      'Improve execution speed',
    ],
    capabilities: [
      'AI Qualification Systems',
      'Workflow Automation',
      'CRM Automation',
      'Follow-Up Automation',
      'Reporting Dashboards',
      'Process Automation',
      'Operational Intelligence Systems',
    ],
  },
  {
    id: 'revenue-operations',
    number: '03',
    icon: '📊',
    title: 'Sales Revenue Operations',
    description:
      'Most businesses operate with fragmented sales and operational systems. Sales Revenue Operations brings structure, visibility, accountability, and predictability into the entire revenue process.',
    manages: [
      'Scalable workflow design',
      'Conversion system optimization',
      'Reporting visibility improvement',
      'Team alignment around measurable outcomes',
    ],
    designedAround: [
      'Better operational efficiency',
      'Lower revenue leakage',
      'Stronger accountability',
      'Improved forecasting',
    ],
    capabilities: [
      'Funnel Architecture',
      'KPI Systems',
      'SOP Design',
      'Conversion Tracking',
      'QA & Performance Monitoring',
      'Sales Reporting Systems',
      'Revenue Visibility Frameworks',
    ],
  },
  {
    id: 'meeting-generation',
    number: '04',
    icon: '📅',
    title: 'Meeting Generation Systems',
    description:
      'Modern outbound is not about mass outreach. It is about building structured systems that create meaningful business conversations with the right prospects — combining outbound workflows, targeting intelligence, process-driven execution, and structured qualification.',
    manages: [
      'Outbound workflows',
      'Targeting intelligence',
      'Process-driven execution',
      'Structured qualification',
    ],
    designedAround: [
      'Buyer relevance',
      'Engagement quality',
      'Sales efficiency',
    ],
    capabilities: [
      'Outbound Workflow Systems',
      'Lead Qualification Frameworks',
      'Calendar Booking Systems',
      'Structured Follow-Up',
      'CRM Tracking',
      'Prospect Engagement Workflows',
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div className={`${styles.serviceCard} ${isEven ? styles.serviceCardReverse : ''}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <span className={styles.serviceNumber}>{service.number}</span>
          <span className={styles.serviceIcon}>{service.icon}</span>
        </div>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDesc}>{service.description}</p>

        <div className={styles.twoCol}>
          <div>
            <p className={styles.colLabel}>Focus areas:</p>
            <ul className={styles.dotList}>
              {service.manages.map((item) => (
                <li key={item}>
                  <span className={styles.blueDot}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colLabel}>Designed around:</p>
            <ul className={styles.dotList}>
              {service.designedAround.map((item) => (
                <li key={item}>
                  <span className={styles.cyanDot}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.capabilitiesPanel}>
        <p className={styles.capLabel}>Included Capabilities</p>
        <div className={styles.capGrid}>
          {service.capabilities.map((cap) => (
            <span key={cap} className={styles.capTag}>{cap}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesList = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          heading="Sales Systems Designed for Modern Businesses"
          subheading="Our Services"
          supportingText="Each service is engineered around your specific business targets, operational requirements, and scalability goals."
        />

        <div className={styles.list}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
