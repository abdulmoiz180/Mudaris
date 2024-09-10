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

const Home = () => {
  const { toggleLanguage, data, language } = useLanguage(); // Access language separately

  return (
    <section
      className="home-page column primary-bg"
      dir={language === "persian" ? "ltr" : "rtl"} // Use language directly
   <Hero />
      <Testimonials />
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
