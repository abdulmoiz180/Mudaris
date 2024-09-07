import E_Learn from "../../components/E_Learn";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import GetStart from "../../components/GetStarted";
import PriceCards from "../../components/PriceCards/Index";
import Courses from "../../components/Courses";
import "./home.css";
import Review from "../../components/Review/Index";
const Home = () => {
  return (
    <section className="home-page column primary-bg">
      <Hero />
      <Courses />
      <Review />
      <E_Learn />
      <PriceCards />
      <FAQ />
      <GetStart />
    </section>
  );
};

export default Home;
