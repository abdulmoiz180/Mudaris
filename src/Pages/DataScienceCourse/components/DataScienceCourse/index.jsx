import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./datascience.css";
import { CourseCards } from "./CourseCards/Index";
import { MenuSide } from "./CourseCardSideMenu";
import PaginationComponent from "./Pagination";

// Import images
import courseImage1 from "../../../../assets/Images/coursepagecardimage.png";   // Course image 1
import courseImage2 from "../../../../assets/Images/coursepagecardimageML.png"; // Course image 2
import courseImage3 from "../../../../assets/Images/coursepagecardimageDV.png"; // Course image 3
import videoIcon from "../../../../assets/Icons/videoIcon.png";              // Video icon
import clockIcon from "../../../../assets/Icons/clockIcon.png";              // Clock icon
import certificateIcon from "../../../../assets/Icons/certificateIcon.png";        // Certificate icon
import heartIcon from "../../../../assets/Icons/heartIcon.png";              // Heart icon
import filledHeartIcon from "../../../../assets/Icons/Heartfilled.png";         // Filled heart icon

export const DataScience = () => {
  const { data } = useLanguage();  
  if (!data) return <div>Data is loading...</div>;
  if (!data.DataScienceCourse) return <div>No courses available.</div>;

  const [hearts, setHearts] = useState(
    data.DataScienceCourseCardsSection
      ? new Array(data.DataScienceCourseCardsSection.length).fill(false)
      : []
  );

  const toggleHeart = (index) => {
    setHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = !newHearts[index];
      return newHearts;
    });
  };

  return (
    <section className="DataScienceCoursePageComponentParent clr-white">
      <Box className="DataScienceCoursePageHero">
        <Box className="DataScienceCoursePageHeroTextContentMain">
          <h2 className="manrope">{data.DataScienceCourse[0].title}</h2>
          <p className="dm-sans">{data.DataScienceCourse[0].description}</p>
        </Box>
        <Box className="DataScienceCoursePageHeroRelatedSkills">
          <h4>{data.DataScienceCourse[1].tabname}</h4>
          <Box className="DataScienceCoursePageHeroRelatedSkillsTabs">
            {Object.values(data.DataScienceCourse[2]).map((tab, index) => (
              <Button key={index} className="dm-sans">
                {tab}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="DataScienceCoursePageCardSectionParent">
        <h2>{data.DataScienceCourseCardsSectiontitle}</h2>
        <Box className="DataScienceCoursePageCardSection">
          {data.DataScienceCourseCardsSection &&
            Object.values(data.DataScienceCourseCardsSection).map((c, index) => (
              <Box className="DataScienceCourseCard" key={index}>
                <img src={index === 0 ? courseImage1 : index === 1 ? courseImage2 : courseImage3} className="DataScienceCourseCardMainImg" alt={`Course ${index + 1}`} />
                <h3 className="manrope">{c.title}</h3>
                <Box className="DataScienceCourseCardVideocomp">
                  <img src={videoIcon} alt="Video Icon" /> {/* Video icon */}
                  <p className="DataScienceCourseCardVideocompInfo dm-sans">
                    {c.videos}
                  </p>
                  <img src={clockIcon} alt="Clock Icon" /> {/* Clock icon */}
                  <p className="DataScienceCourseCardVideocompInfo dm-sans">
                    {c.time}
                  </p>
                  <img src={certificateIcon} alt="Certificate Icon" /> {/* Certificate icon */}
                  <Box className="DataScienceCourseCardCertificateandheartIconBox">
                    <img
                      src={hearts[index] ? filledHeartIcon : heartIcon} // Heart icon based on state
                      onClick={() => toggleHeart(index)}
                      className="clickable-heart"
                      alt="Heart Icon"
                    />
                  </Box>
                </Box>

                <Box className="DataScienceCourseCardPricecomp">
                  <Box className="DataScienceCourseCardPriceonly">
                    <p className="dm-sans">{c.price}</p>
                    <p className="DataScienceCourseCardPriceonlyPriceDashed dm-sans">
                      {c.actualPrice}
                    </p>
                  </Box>
                  <Box className="DataScienceCourseCardPricecompButtonDiv">
                    <Button className="dm-sans">{c.btn}</Button>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>

      <Box className="DataScienceCoursePagebtnSection">
        {data.DataScienceCourseCardsSectionButtons[0] &&
          Object.entries(data.DataScienceCourseCardsSectionButtons[0]).map(
            ([key, value], index) => (
              <Button key={index} className="dm-sans">
                {value}
              </Button>
            )
          )}
        <Box className="DataScienceCoursePagebtnspanSection">
          <p className="dm-sans">
            {data.DataScienceCourseCardsSectionButtons[1].button3}
          </p>
          <span>
            {data.DataScienceCourseCardsSectionButtonsCourses.length} courses
          </span>
        </Box>
      </Box>
      <Box className="DataScienceCoursePagebtnCardsMainSection">
        <MenuSide />
        <CourseCards />
      </Box>
      <PaginationComponent />
    </section>
  );
};
