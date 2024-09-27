import React from "react";
// import E_Learn from "./components/E_Learn";
import Hero from "./components/Hero/Index";
import FAQ from "./components/Accordion";
import GetStart from "./components/GetStarted";
import PriceCards from "./components/PriceCards/Index";
import Courses from "./components/Courses";
import Review from "./components/Review/Index";
import Testimonials from "./components/Testimonials/Testimonials";
import { useLanguage } from "../../globalContext/GlobalProvider";
import GettoKnow from "./components/GettoKnow/Index";
import DigitalEducation from "./components/DigitalEducationSlider";
import Community from "./components/Community";
import WhatYouGet from "./components/WhatYouGet";
import GetaJob from "./components/GetaJob";
import Participate from "./components/Participate";
import Classes from "./components/Classes";
import { DataScience } from "./components/DataScienceCourse";
import "./home.css";
const Home = () => {
  const { language } = useLanguage(); // Moved inside the function

  return (
    <section
      className="home-page column primary-bg"
      dir={language === "english" ? "ltr" : "rtl"} // Set text direction based on language
    >
      <Hero />
      <Testimonials />
      <Review />
      <E_Learn />
      <PriceCards />
      <Participate />
      <Classes />
      <DigitalEducation />
      <Community />
      <WhatYouGet />
      <GettoKnow />
      <DataScience />
      <FAQ />
      <GetStart />
    </section>
  );
};

export default Home;
