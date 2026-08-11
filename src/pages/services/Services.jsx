import { Helmet } from 'react-helmet-async';
import {
  Hero,
  OurApproach,
  ServicesList,
  AobAdvantage,
  Industries,
  FinalCta,
} from './components';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Sales Outsourcing Services &amp; AI Automation Agency India | AOB India</title>
        <meta name="description" content="AOB India provides sales outsourcing services, AI automation, sales revenue operations outsourcing, lead generation services, and sales automation solutions." />
      </Helmet>
      <Hero />
      <OurApproach />
      <ServicesList />
      <Industries />
      <AobAdvantage />
      <FinalCta />
    </>
  );
};

export default Services;
