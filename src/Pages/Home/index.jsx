import React from "react";
import E_Learn from "./components/E_Learn";
import Hero from "./components/Hero/Index";
import FAQ from "./components/Accordion";
import GetStart from "./components/GetStarted";
import PriceCards from "./components/PriceCards/Index";
import Review from "./components/Review/Index";
import GettoKnow from "./components/GettoKnow/Index";
import DigitalEducation from "./components/DigitalEducationSlider";
import Community from "./components/Community";
import WhatYouGet from "./components/WhatYouGet";
import "./home.css";
import GetaJob from "./components/GetaJob";
import LineCards from "./components/ReadIt";
const Home = () => {
  return (
    <section className="home-page column primary-bg">
      <Hero />
      {/* <GetaJob /> */}
      <DigitalEducation />
      <Community />
      <LineCards />
      <WhatYouGet />
      <PriceCards />
      <GettoKnow />
      <Review />
      <E_Learn />
      <FAQ />
      <GetStart />
    </section>
  );
};

export default Home;
