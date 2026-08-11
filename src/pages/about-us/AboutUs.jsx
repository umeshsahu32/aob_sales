import { Helmet } from 'react-helmet-async';
import {
  Hero,
  AobStory,
  OurPhilosophy,
  DecadeOfExecution,
  Transformation,
  Milestones,
  Ecosystem,
  WhyAob,
  FinalCta,
} from './components';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About AOB India | Sales Outsourcing Company in India</title>
        <meta name="description" content="Learn about AOB India, a trusted sales outsourcing company in India helping businesses scale through AI-powered sales outsourcing, automation, and revenue operations." />
      </Helmet>
      <Hero />
      <AobStory />
      <OurPhilosophy />
      <DecadeOfExecution />
      <Transformation />
      <Milestones />
      <Ecosystem />
      <WhyAob />
      <FinalCta />
    </>
  );
};

export default AboutUs;
