import E_Learn from "../../components/E_Learn";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import GetStart from "../../components/GetStarted";
import PriceCards from "../../components/PriceCards/Index";
import "./home.css";
import Review from "../../components/Review/Index";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useLanguage } from "../../globalContext/GlobalProvider";
import GettoKnow from "../../components/GettoKnow/Index";
import LineCards from "../../components/ReadIt";
import DigitalEducation from "../../components/DigitalEducationSlider";
import WhatYouGet from "../../components/WhatYouGet";
const Home = () => {
  const { language } = useLanguage();
  return (
    <section
      className="home-page column primary-bg"
      dir={language === "english" ? "ltr" : "rtl"}
    >
      <Hero />
      <Testimonials />
      <Review />
      <E_Learn />
      <WhatYouGet />
      <PriceCards />
      <DigitalEducation />
      <LineCards />
      <GettoKnow />
      <FAQ />
      <GetStart />
    </section>
  );
};

export default Home;
