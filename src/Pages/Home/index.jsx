import React from "react";
import "./home.css";
import E_Learn from "../../components/E_Learn";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import Courses from "../../components/Courses";
import Cards from "../../components/Courses/Card";

const Home = () => {
  return (
    <section className="home-page column primary-bg">
      <Hero/>
      <Courses />
      <E_Learn />
      <FAQ />
      <Footer />
    </section>
  );
};

export default Home;
