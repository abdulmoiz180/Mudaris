import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./courses.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Card";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import Slider from "react-slick";

const debug = (value) => {
  console.log(`i am ${value}-> `, value);
};

const TabComponent = () => {
  const { data } = useLanguage();
  let CourseData = data[0];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [items, setItems] = useState(4);
  const [selectedTab, setSelectedTab] = useState("");
  const [value, setValue] = useState("");

  // Ensure that selectedTab and value are reset when data (language) changes
  useEffect(() => {
    if (data && data.tabs && data.tabs.length > 0) {
      setSelectedTab(data.tabs[0].name);
      setValue(0);
    }
  }, [data]);

  // Handle responsive design for number of visible items in the slider
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

  // Handle tab change and apply fade-in and fade-out animations
  const handleChange = (event, newValue) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setValue(newValue);
      if (data && data.tabs && data.tabs[newValue]) {
        setSelectedTab(data.tabs[newValue].name);
      }
      setIsTransitioning(false);
    }, 300); // Match with CSS transition duration
  };

  // Render the tab bar with course categories
  const renderTabs = () => {
    if (!data || !data.tabs) {
      return <div>Data or tabs not available</div>;
    }
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
        {data.tabs.map((tab, index) => (
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

  // Render the courses inside a slider
  const renderCourses = () => {
    if (!data || !data.tabs) {
      return <div>Select any tab please...</div>;
    }

    const selectedTabData = data.tabs[value];

    if (!selectedTabData || !selectedTabData.courses) {
      return <div>No courses available for the selected tab.</div>;
    }

    return (
      <Slider key={selectedTab} {...settings}>
        {selectedTabData.courses.map((course, index) => (
          <div key={index} className="cou rse-cards-container clr-white">
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
        ))}
      </Slider>
    );
  };

  // Slider settings for slick carousel
  var settings = {
    dots: true,
    infinite: false, // Change to true to enable continuous scrolling
    speed: 500,
    slidesToShow: items,
    slidesToScroll: 1, // Reduce this value to ensure smoother scrolling
    initialSlide: 0,
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons flex">{renderTabs()}</div>
      <div
        className={`course-content flex ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        {renderCourses()}
      </div>
    </div>
  );
};

export default TabComponent;
