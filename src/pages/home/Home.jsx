import { Helmet } from 'react-helmet-async';
import {
  Hero,
  TheProblem,
  AobApproach,
  CoreFramework,
  ServicesSection,
  WhyAob,
  Industries,
  Philosophy,
  FinalCta
} from './components';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Helmet>
        <title>AI-Powered Sales Outsourcing Company in India | AOB India</title>
        <meta name="description" content="AOB India is a leading sales outsourcing company in India providing AI-powered sales outsourcing, lead generation services, sales automation, and revenue operations outsourcing." />
      </Helmet>
      <Hero />
      <TheProblem />
      <AobApproach />
      <CoreFramework />
      <ServicesSection />
      <WhyAob />
      <Industries />
      <Philosophy />
      <FinalCta />
    </div>
  );
};

export default Home;
