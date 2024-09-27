import React, { useState } from "react";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../../globalContext/GlobalProvider";
import "./CourseCard.css";
export const CourseCards = () => {
  const { language, data } = useLanguage();
  if (!data) return <div> data is loading..... </div>;
  const [hearts, setHearts] = useState(
    new Array(data.DataScienceCourseCardsSectionButtonsCourses.length).fill(
      false
    )
  );
  const toggleHeart = (index) => {
    setHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = !newHearts[index];
      return newHearts;
    });
  };
  return (
    <section className="DataScienceCoursePageCourseSectionParent">
      <Box className="DataScienceCoursePageCourseSection">
        {Object.values(data.DataScienceCourseCardsSectionButtonsCourses).map(
          (c, index) => (
            <Box className="DataScienceCourses" key={index}>
              <img src={c.img} className="DataScienceCoursesFrontImg" />
              <h3 className="manrope">{c.title}</h3>
              <Box className="DataScienceCourseCardPriceComp">
                <p className="dm-sans">{c.price}</p>
                <p className="dm-sans">{c.actualPrice}</p>
              </Box>
              <Box className="DataScienceCourseCardVideocomp">
                <img src={c.videoIcon} />
                <p className="dm-sans">{c.videos}</p>
                <img src={c.clockIcon} />
                <p className="dm-sans">{c.time}</p>
                <Box className="DataScienceCourseCardCertificateandheartIcon">
                  <img src={c.certificateIcon} />
                  <img
                    src={hearts[index] ? c.fillHeart : c.heartIcon}
                    onClick={() => toggleHeart(index)}
                  />
                </Box>
              </Box>
              <Box className="DataScienceCourseCardExtraTags">
                {c.special && (
                  <p className="SpecialExtraCardsSpecial dm-sans">
                    {c.special}
                  </p>
                )}
                {c.latest && (
                  <p className="SpecialExtraCardsLatest dm-sans">{c.latest}</p>
                )}
                {c.new && (
                  <p className="SpecialExtraCardsNew dm-sans">{c.new}</p>
                )}
              </Box>
            </Box>
          )
        )}
      </Box>
    </section>
  );
};
