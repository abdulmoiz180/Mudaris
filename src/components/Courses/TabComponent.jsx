import React, { useState, useEffect, useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./courses.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Cards from "./Card";
import { GlobalContext } from "../../globalContext/GobalContext";

export const TabComponent = ({ tabs }) => {
  const { courseTab } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [value, setValue] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [items, setItems] = useState(4); // Initial value of items

  // Update the number of items based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItems(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
        setItems(2);
      } else if (window.innerWidth >= 992 && window.innerWidth <= 1140) {
        setItems(2);
      } else if (window.innerWidth >= 1140 && window.innerWidth <= 1300) {
        setItems(3);
      } else if (window.innerWidth >= 1350) {
        setItems(4);
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const handleChange = (event, newValue) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setValue(newValue);
      setSelectedTab(tabs[newValue].name);
      setIsTransitioning(false);
    }, 300); // Match with CSS transition duration
  };

  const renderTabs = () => {
    return (
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        aria-label="secondary tabs example"
        className="course-tab-container"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#9855ff",
          },
        }}
      >
        {courseTab.map((tab, index) => (
          <Tab
            value={index}
            key={index}
            className={`clr-white `}
            label={tab.name}
          />
        ))}
      </Tabs>
    );
  };

  const renderCourses = () => {
    const selectedCourses = tabs.find(
      (tab) => tab.name === selectedTab
    ).courses;

    return selectedCourses.map((course, index) => (
      <div key={index} className="course-cards-container clr-white">
        <Cards
          courseTitle={course.courseTitle}
          courseRating={course.rating}
          courseReviews={course.reviews}
          OriginalPrice={course.originalPrice}
          DiscountedPrice={course.discountedPrice}
          courseTag={course.tag}
          courseDiscount={course.discount}
          videos={course.videos}
          duration={course.duration}
          rateStar={course.rateStar}
          profileImage={course.profileImage}
        />
      </div>
    ));
  };
  var options = {
    items: items,
    nav: true,
    rewind: true,
    autoplay: false,
    dots: true,
    loop: true,
    dotsEach: true,
  };
  return (
    <div className="tab-container">
      <div className="tab-buttons flex">{renderTabs()}</div>
      <div
        className={`course-content flex ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        <OwlCarousel className="owl-theme" {...options}>
          {renderCourses()}
        </OwlCarousel>
      </div>
    </div>
  );
};

function CoursesTabs() {
  const { courseTab } = useContext(GlobalContext);
  return (
    <div className="App">
      <TabComponent tabs={courseTab} />
    </div>
  );
}

export default CoursesTabs;
