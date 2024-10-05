import React, { useState } from "react";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../../globalContext/GlobalProvider";
import "./CourseCard.css";
import coursepagecardimage from "../../../../../assets/Images/coursepagecardimage.png";
import videoIcon from "../../../../../assets/Icons/videoIcon.png";
import clockIcon from "../../../../../assets/Icons/clockIcon.png";
import certificateIcon from "../../../../../assets/Icons/certificateIcon.png";
import heartIcon from "../../../../../assets/Icons/heartIcon.png";
import heartFilled from "../../../../../assets/Icons/Heartfilled.png";

export const CourseCards = () => {
  const { data } = useLanguage();
  if (!data) return <div>Data is loading...</div>;

  // Ensure you have the correct number of images
  const imageArray = data.DataScienceCourseCardsSectionButtonsCourses.map((course) => ({
    img: coursepagecardimage, // replace with course-specific image if available
    videoIcon: videoIcon,
    clockIcon: clockIcon,
    certificateIcon: certificateIcon,
    heartIcon: heartIcon,
    heartFilled: heartFilled,
  }));

  const [hearts, setHearts] = useState(
    new Array(data.DataScienceCourseCardsSectionButtonsCourses.length).fill(false)
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
        {Object.values(data.DataScienceCourseCardsSectionButtonsCourses).map((c, index) => (
          <Box className="DataScienceCourses" key={index}>
            <img src={imageArray[index]?.img} className="DataScienceCoursesFrontImg" alt={c.title} />
            <h3 className="manrope">{c.title}</h3>
            <Box className="DataScienceCourseCardPriceComp">
              <p className="dm-sans">{c.price}</p>
              <p className="dm-sans">{c.actualPrice}</p>
            </Box>
            <Box className="DataScienceCourseCardVideocomp">
              <img src={imageArray[index]?.videoIcon} alt="Video Icon" />
              <p className="dm-sans">{c.videos}</p>
              <img src={imageArray[index]?.clockIcon} alt="Clock Icon" />
              <p className="dm-sans">{c.time}</p>
              <Box className="DataScienceCourseCardCertificateandheartIcon">
                <img src={imageArray[index]?.certificateIcon} alt="Certificate Icon" />
                <img
                  src={hearts[index] ? imageArray[index]?.heartFilled : imageArray[index]?.heartIcon}
                  onClick={() => toggleHeart(index)}
                  alt="Heart Icon"
                  className="clickable-heart"
                />
              </Box>
            </Box>
            <Box className="DataScienceCourseCardExtraTags">
              {c.special && <p className="SpecialExtraCardsSpecial dm-sans">{c.special}</p>}
              {c.latest && <p className="SpecialExtraCardsLatest dm-sans">{c.latest}</p>}
              {c.new && <p className="SpecialExtraCardsNew dm-sans">{c.new}</p>}
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  );
};
