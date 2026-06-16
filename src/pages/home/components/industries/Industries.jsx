import styles from './Industries.module.css';
import realEstate from '../../../../assets/images/Home page/Realestate.png';
import edTech from '../../../../assets/images/Home page/Edtech.png';
import manufacturing from '../../../../assets/images/Home page/Manufacturing.png';
import healthcare from '../../../../assets/images/Home page/healthcare.png';
import financialServices from '../../../../assets/images/Home page/financial services.png';
import b2bServices from '../../../../assets/images/Home page/B2B service.png';
import d2cBrands from '../../../../assets/images/Home page/D2C Brands.png';
import professionalServices from '../../../../assets/images/Home page/professional services.png';

const industries = [
  {
    name: 'Real Estate',
    img: realEstate,
    desc: 'We help real estate teams automate leads, nurture clients, and close deals faster.',
  },
  {
    name: 'EdTech',
    img: edTech,
    desc: 'From student acquisition to engagement, we build systems that scale EdTech businesses efficiently.',
  },
  {
    name: 'Manufacturing',
    img: manufacturing,
    desc: 'We streamline operations, optimize supply chains, and improve B2B customer engagement.',
  },
  {
    name: 'Healthcare',
    img: healthcare,
    desc: 'We automate patient engagement, improve follow-ups, and drive better care outcomes.',
  },
  {
    name: 'Financial Services',
    img: financialServices,
    desc: 'We help financial teams generate quality leads, ensure compliance, and boost client retention.',
  },
  {
    name: 'B2B Services',
    img: b2bServices,
    desc: 'We build scalable outbound systems that generate pipeline and drive measurable growth.',
  },
  {
    name: 'D2C Brands',
    img: d2cBrands,
    desc: 'We help D2C brands scale with data-driven marketing, automation, and customer loyalty systems.',
  },
  {
    name: 'Professional Services',
    img: professionalServices,
    desc: 'We streamline operations, automate workflows, and help you deliver more value to clients.',
  },
];

const Industries = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingWrap}>
          <h2 className={styles.sectionTitle}>Sales Systems Across Industries</h2>
          <p className={styles.sectionSub}>
            AOB India designs customized sales revenue systems for businesses across multiple sectors.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={ind.img} alt={ind.name} className={styles.cardImg} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{ind.name}</h3>
                <p className={styles.cardDesc}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
