import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./courses.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Cards from "./Card";
import { useLanguage } from "../../globalContext/GlobalProvider";

export const TabComponent = () => {
  const { data } = useLanguage();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [items, setItems] = useState(4);
  const [selectedTab, setSelectedTab] = useState(data[0].name);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (data[0] && data[0].length > data[0]) {
      setSelectedTab(data[0].name);
      setValue(0);
    }
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItems(1);
      } else if (window.innerWidth >= 600 && window.innerWidth <= 769) {
        setItems(1);
      } else if (window.innerWidth >= 769 && window.innerWidth <= 992) {
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
  }, [data[0]]);

  const handleChange = (event, newValue) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setValue(newValue);
      setSelectedTab(data[0][newValue].name);
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
        {data[0].map((tab, index) => (
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
    const selectedTabData = data[0].find((tab) => tab.name === selectedTab);

    if (!selectedTabData || !selectedTabData.courses) return null;

    return selectedTabData.courses.map((course, index) => (
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
    autoplay: true,
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
