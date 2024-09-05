import { Box } from "@mui/material";
import React, { useState, useRef } from "react";
import "./Review.css";
import { Typography } from "@mui/material";
import StudentReviews from "../../Seed";
import Base from "../../assets/Images/Base.png";
import { Button } from "@mui/material";
const Review = () => {
  const [More, setMore] = useState(true);
  const Wrap = useRef(null);
  const bg = useRef(null);
  const viewMore = () => {
    setMore(!More);
    if (More) {
      Wrap.current.className = "reviewWrapper active";
      bg.current.style.background = "transparent";
      bg.current.className = "ReviewComponentButton View";
    } else {
      Wrap.current.className = "reviewWrapper";
      bg.current.style.backgroundImage = `url(${Base})`
      bg.current.style.backgroundSize = "cover";
      bg.current.style.backgroundRepeat = "no-repeat";
      bg.current.className = "ReviewComponentButton";
    }
  };
  return (
    <section className="reviewComponentParentSection">
      <Box component="div" className="ReviewContainer">
        <Typography variant="h2" className="inter title heading">
          {StudentReviews[0].title}
        </Typography>
        <Box component="div" ref={Wrap} className="reviewWrapper">
          {StudentReviews.slice(1).map((review, index) => (
            <Box key={index} component="div" className="review">
              <Typography variant="h4" className="dm-sansn reviewcontent">
                {review.review}
              </Typography>
              <Box component="div" className="contentwrap">
                <Box component="div" className="reviewers">
                  <Typography variant="body1" className="dm-sans studentname">
                    {review.studentname}
                  </Typography>
                  <Typography variant="body1" className="dm-sans course">
                    {review.coursetaken}
                  </Typography>
                </Box>
                <Box component="div" className="ratingsImageStar">
                  {review.brightstar && (
                    <img src={review.brightstar} alt="Rating Star" />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="ReviewComponentButton" ref={bg}>
        <Button className="dm-sans viewBtn" onClick={viewMore}>
            {More ? 'View More' : 'Show Less'}
        </Button>
      </Box>
    </section>
  );
};

export default Review;
