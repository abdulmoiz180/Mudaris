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
import Community from "../../components/Community";

const Home = () => {
  const { language } = useLanguage(); // Access language separately

  return (
    <section
      className="home-page column"
      dir={language === "persian" ? "rtl" : "ltr"}
    >
      <PriceCards />
    </section>
  );
};

export default Home;
