import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./courses.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Card";
import { useLanguage } from "../../globalContext/GlobalProvider";
import Slider from "react-slick";
const debug = (value) => {
  console.log(`i am ${value}-> `, value);
};

export const TabComponent = () => {
  const { data } = useLanguage();
  let CourseData = data[0];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [items, setItems] = useState(4);
  const [selectedTab, setSelectedTab] = useState(CourseData[0].name);
  const [value, setValue] = useState(0);
  // debug(selectedTab);
  useEffect(() => {
    // Ensure that selectedTab and value are reset when data (language) changes
    if (data[0] && data[0].length > 0) {
      setSelectedTab(data[0][0].name); // Reset to the first tab's name
      setValue(0); // Reset the tab index to the first tab
    }
  }, [data]);

  useEffect(() => {
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
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // This will trigger whenever the language changes

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
        {CourseData.map((tab, index) => (
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
    const selectedTabData = CourseData?.find((tab) => tab.name === selectedTab);

    if (!selectedTabData || !selectedTabData.courses) {
      return <div>Select any tab please...</div>;
    }
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
  var settings = {
    dots: true,
    infinite: false, // Change to true to enable continuous scrolling
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, // Reduce this value to ensure smoother scrolling
    initialSlide: 0,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons flex">{renderTabs()}</div>
      <div
        className={`course-content flex ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        <Slider key={selectedTab} {...settings}>
          {renderCourses()}
        </Slider>
      </div>
    </div>
  );
};
