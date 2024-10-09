import React, { useRef } from "react";
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
import { GetStartedButton } from "./components/GetStartedButton";
const Home = () => {
  const priceCardsRef = useRef(null);

  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="home-page column primary-bg">
      <Hero />
      <GetaJob />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <DigitalEducation />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <LineCards />
      <WhatYouGet />
      <div className="price" ref={priceCardsRef}>
        <PriceCards />
      </div>
      <GettoKnow />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <E_Learn />
      <FAQ />
      <GetStartedButton onButtonClick={scrollToPriceCards} />
      <GetStart />
    </section>
  );
};

export default Home;
