import React from "react";
import "./home.css";
import E_Learn from "../../components/E_Learn";
import Hero from "../../components/Hero/Index";
import GetStart from "../../components/GetStarted";
import PriceCards from "../../components/PriceCards/Index";
import Review from "../../components/Review/Index";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from '../../components/Accordion/index' 
import Courses from '../../components/Courses/index'
const Home = () => {
  return (
    <>
      <section className="home-page column primary-bg">
        <Hero />
        <Testimonials />
        <Courses/>
        <Review />
        <E_Learn />
        <PriceCards />
        <FAQ/>
        <GetStart />
      </section>
    </>
  );
};

export default Home;
