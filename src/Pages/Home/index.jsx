
import E_Learn from "../../components/E_Learn";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import PriceCards from "../../components/PriceCards/Index";
import Courses from "../../components/Courses";

const Home = () => {
  return (
    <section className="home-page column primary-bg">
      <Hero/> 
      <Courses />
       <E_Learn />
      <PriceCards/>
      <FAQ />
      <Footer />
    </section>
  );
};

export default Home;
