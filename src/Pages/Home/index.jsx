import E_Learn from "../../components/E_Learn";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import PriceCards from "../../components/PriceCards/Index";
import Courses from "../../components/Courses";
import "./home.css";
import Review from "../../components/Review/Index";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <section className="home-page column primary-bg">
      <Hero />
      <Testimonials/>
      <Courses />
      <Review />
      <E_Learn />
      <PriceCards />
      <FAQ />
      <Footer />
    </section>
  );
};

export default Home;
