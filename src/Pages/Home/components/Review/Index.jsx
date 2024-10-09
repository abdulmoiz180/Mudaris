import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./Review.css";
import Base from "@assets/Images/Base.png";
import Brightstar from "@assets/Icons/StarReview.png";
const Review = () => {
  const [more, setMore] = useState(true);
  const wrap = useRef(null);
  const bg = useRef(null);
  const { data, language } = useLanguage();

  // Check if data is available and valid before accessing it
  if (!data || !data.StudentReviews || data.StudentReviews.length === 0) {
    return <div>Loading...</div>; // Return loading state if data is not available
  }

  const studentReviews = data.StudentReviews;

  const viewMore = () => {
    setMore(!more);
    if (more) {
      wrap.current.className = "reviewWrapper active";
      bg.current.style.background = "transparent";
      bg.current.className = "ReviewComponentButton View";
    } else {
      wrap.current.className = "reviewWrapper";
      bg.current.style.backgroundImage = `url(${Base})`;
      bg.current.style.backgroundSize = "cover";
      bg.current.style.backgroundRepeat = "no-repeat";
      bg.current.className = "ReviewComponentButton";
    }
  };
 
  return (
    <section className="reviewComponentParentSection">
      <Box component="div" className="ReviewContainer">
        <Typography variant="h2" className={`${language === "persian" ? "title heading rubik" : "title heading inter"}`}>
          {studentReviews[0].title} {/* Access the title */}
        </Typography>
        <Box component="div" ref={wrap} className="reviewWrapper">
          {studentReviews.map(
            (review, index) =>
              index !== 0 && ( // Skip the first entry (title object)
                <Box key={index} component="div" className="review">
                  <Typography variant="h4" className={`${language === "persian" ? "reviewcontent rubik" : "reviewcontent dm-sans"}`}>
                    {review.review}
                  </Typography>
                  <Box component="div" className="contentwrap">
                    <Box component="div" className="reviewers">
                      <Typography
                        variant="body1"
                        className={`${language === "persian" ? "studentname rubik" : "studentname dm-sans"}`}
                      >
                        {review.studentname || "Anonymous"}
                      </Typography>
                      {review.coursetaken && (
                        <Typography variant="body1" className={`${language === "persian" ? "course rubik" : "course dm-sans"}`}>
                          {review.coursetaken}
                        </Typography>
                      )}
                    </Box>
                    <Box component="div" className="ratingsImageStar">
                      {review.brightstar && (
                        <img src={Brightstar} alt="Rating Star" />
                      )}
                    </Box>
                  </Box>
                </Box>
              )
          )}
        </Box>
      </Box>
      <Box className="ReviewComponentButton" ref={bg}>
        <Button className={`${language === "persian" ? "viewBtn rubik" : "viewBtn dm-sans"}`} onClick={viewMore}>
          {more ? "View More" : "Show Less"}
        </Button>
      </Box>
    </section>
  );
};

export default Review;
