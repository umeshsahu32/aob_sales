import SectionHeading from '@/components/SectionHeading';
import styles from './Industries.module.css';
import realEstate from "@/assets/images/Services/Realestate.webp"
import edTech from "@/assets/images/Services/Edtech.webp"
import manufacturing from "@/assets/images/Services/Manufacturing.webp"
import healthcare from "@/assets/images/Services/healthcare.webp"
import financialServices from "@/assets/images/Services/financial_services.webp"
import b2bServices from "@/assets/images/Services/B2B_service.webp"
import d2cBrands from "@/assets/images/Services/D2C_Brands.webp"
import professionalServices from "@/assets/images/Services/professional_services.webp"
import HeroBadge from '@/components/HeroBadge';

const industries = [
  { icon: realEstate, name: 'Real Estate' },
  { icon: edTech, name: 'EdTech' },
  { icon: manufacturing, name: 'Manufacturing' },
  { icon: healthcare, name: 'Healthcare' },
  { icon: financialServices, name: 'Financial Services' },
  { icon: b2bServices, name: 'B2B Services' },
  { icon: d2cBrands, name: 'D2C Brands' },
  { icon: professionalServices, name: 'Professional Services' },
];

const alignmentPoints = [
  'Buyer behavior',
  'Sales cycle complexity',
  'Operational structure',
  'Conversion dynamics',
];

const Industries = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>

        <HeroBadge text="Industries We Support"/>
        <SectionHeading
          heading={<>Sales Systems Across <span>Industries</span></>}
          supportingText="Every industry operates differently. That is why AOB India designs customised revenue systems aligned to each sector's unique dynamics."
          />
          </div>

        <div className={styles.alignmentRow}>
          {alignmentPoints.map((pt) => (
            <div key={pt} className={styles.alignChip}>
              <span className={styles.alignDot}></span>
              {pt}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {industries.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <img src={ind.icon} className={styles.icon} alt={`${ind.name} sales outsourcing services`} loading="lazy" width="200" height="140" />
              <span className={styles.name}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
