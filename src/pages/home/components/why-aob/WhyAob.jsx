import styles from './WhyAob.module.css';
import numberDriven from '../../../../assets/icons/home/number_driven_execution.png'
import playAndPlug from '../../../../assets/icons/home/plug_and_play.png'
import ai_balance from '../../../../assets/icons/home/ai_balance.png'
import end_to_end_ownership from '../../../../assets/icons/home/end_to_end_ownership.png'
import ROI from '../../../../assets/icons/home/ROI.png'

const reasons = [
  {
    Icon: numberDriven,
    title: 'Number-Driven Execution',
    body: 'Every engagement is reverse engineered from business targets and conversion metrics. The only number-driven sales outsourcing service provider in India.'
  },
  {
    Icon: playAndPlug,
    title: 'Plug-and-Play Deployment',
    body: 'Rapid setup and execution with minimal go-to-market delay. AI-powered sales outsourcing.',
  },
  {
    Icon: ai_balance,
    title: 'AI + Human Balance',
    body: 'We optimize the right mix of automation, technology, and human execution.',
  },
  {
    Icon: end_to_end_ownership,
    title: 'End-to-End Ownership',
    body: 'From strategy to execution to reporting, AOB manages the entire revenue ecosystem.',
  },
  {
    Icon: ROI,
    title: 'Built for ROI',
    body: 'Every process is optimized for:',
    list: ['lower CAC', 'higher conversion', 'operational efficiency', 'scalable growth'],
  },
   {
    Icon: ROI,
    title: '12 Years of Experience',
    body: "Built on years of execution, market insights, and continuous evolution across industries and business models.",
  },
];

const WhyAob = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrap}>
          <h2 className={styles.sectionTitle}>Why Businesses Choose AOB</h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.block}>
              <img src={r.Icon} className={styles.reasonsIcons}/>
              <h3 className={styles.blockTitle}>{r.title}</h3>
              <p className={styles.blockBody}>{r.body}</p>
              {r.list && (
                <ul className={styles.roiList}>
                  {r.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAob;
