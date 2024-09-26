import E_Learn from "../../components/E_Learn";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import GetStart from "../../components/GetStarted";
import PriceCards from "../../components/PriceCards/Index";
import Courses from "../../components/Courses";
import "./home.css";
import Review from "../../components/Review/Index";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useLanguage } from "../../globalContext/GlobalProvider";
import GettoKnow from "../../components/GettoKnow/Index";
import LineCards from "../../components/ReadIt";
import DigitalEducation from "../../components/DigitalEducationSlider";
import Community from "../../components/Community";
import WhatYouGet from "../../components/WhatYouGet";
import GetaJob from "../../components/GetaJob";
import { DataScience } from "../../components/DataScienceCourse";
const Home = () => {
  const { language } = useLanguage();
  return (
    <>
      <section
        className="home-page column primary-bg"
        dir={language === "english" ? "ltr" : "rtl"}
      >
        <Hero />
        <Testimonials />
        {/* <Courses /> */}
        <Review />
        <E_Learn />
        <Community />
        <WhatYouGet />
        <PriceCards />
        <DigitalEducation />
        <LineCards />
        <GettoKnow />
        <GetaJob />
        <DataScience/>
        <FAQ />
        <GetStart />
      </section>
    </>
  );
};

export default Home;
