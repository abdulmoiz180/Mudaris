import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useLanguage } from "../../globalContext/GlobalProvider";
import "./datascience.css";
import { CourseCards } from "./CourseCards/Index";
import { MenuSide } from "./CourseCardSideMenu";
import PaginationComponent from "./Pagination";

export const DataScience = () => {
  const { language, data } = useLanguage();
console.log(data);
  // Ensure data is loaded
  if (!data) return <div>Data is loading...</div>;
  if (!data.DataScienceCourse) return <div>No courses available.</div>;

  const [hearts, setHearts] = useState(
    data.DataScienceCourseCardsSection ? new Array(data.DataScienceCourseCardsSection.length).fill(false) : []
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
          {data.DataScienceCourseCardsSection && Object.values(data.DataScienceCourseCardsSection).map((c, index) => (
            <Box className="DataScienceCourseCard" key={index}>
              <img src={c.img} className="DataScienceCourseCardMainImg" />
              <h3 className="manrope">{c.title}</h3>
              <Box className="DataScienceCourseCardVideocomp">
                <img src={c.videoIcon} />
                <p className="DataScienceCourseCardVideocompInfo dm-sans">{c.videos}</p>
                <img src={c.clockIcon} />
                <p className="DataScienceCourseCardVideocompInfo dm-sans">{c.time}</p>
                <img src={c.certificateIcon} />
                <Box className="DataScienceCourseCardCertificateandheartIconBox">
                  <img
                    src={hearts[index] ? c.fillHeart : c.heartIcon}
                    onClick={() => toggleHeart(index)}
                    className="clickable-heart"
                    alt="Heart Icon"
                  />
                </Box>
              </Box>

              <Box className="DataScienceCourseCardPricecomp">
                <Box className="DataScienceCourseCardPriceonly">
                  <p className="dm-sans">{c.price}</p>
                  <p className="DataScienceCourseCardPriceonlyPriceDashed dm-sans">{c.actualPrice}</p>
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
        {data.DataScienceCourseCardsSectionButtons[0] && Object.entries(data.DataScienceCourseCardsSectionButtons[0]).map(
          ([key, value], index) => (
            <Button key={index} className="dm-sans">{value}</Button>
          )
        )}
        <Box className="DataScienceCoursePagebtnspanSection">
          <p className="dm-sans">{data.DataScienceCourseCardsSectionButtons[1].button3}</p>
         <span>{data.DataScienceCourseCardsSectionButtonsCourses.length} courses</span>
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
