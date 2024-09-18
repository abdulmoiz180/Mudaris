import E_Learn from "../../components/E_Learn";
import Hero from "../../components/Hero/Index";
import FAQ from "../../components/Accordion";
import GetStart from "../../components/GetStarted";
import PriceCards from "../../components/PriceCards/Index";
// import Courses from "../../components/Courses";
import "./home.css";
import Review from "../../components/Review/Index";
import Testimonials from "../../components/Testimonials/Testimonials";
import { useLanguage } from "../../globalContext/GlobalProvider";
import GettoKnow from "../../components/GettoKnow/Index";
import LineCards from "../../components/LineCards";
const Home = () => {
  const { data,language } = useLanguage(); // Access language separately
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <section
        className="home-page column primary-bg"
        dir={language === "english" ? "ltr" : "rtl"}
      >
        <Hero />
        <Testimonials />
        {/* <Courses /> */}
        <Review />
        <E_Learn />
        <PriceCards/>
        <LineCards data={data.readthis}/>
        <LineCards data={data.whyshouldiparticipate}/>
        <GettoKnow/>
        <FAQ />
        <GetStart /> 
      </section>
    </>
  );
};

export default Home;
