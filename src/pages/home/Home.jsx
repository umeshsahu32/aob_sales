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
