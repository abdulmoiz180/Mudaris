// LineCards.js
import React from "react";
import "./LineCard.css";
import { Box, Typography } from "@mui/material";
import LineWo from "../../../public/assets/Icons/linewo.png";
const LineCards = ({ data }) => {
  return (
    <section className="importanttoread">
      <Typography
        variant="h1"
        className="LineCardContainerMainTitle inter"
      >
        {data[0].title}
      </Typography>
      <Box className="LineCardContainerMainTitleDesc">
        <Typography
          variant="h1"
          className="LineCardContainerMainTitle inter"
        >
          {data[0].title2}
        </Typography>
        <Typography
          variant="body1"
          className="LineCardContainerMainDesc inter"
        >
          {data[0].description}
        </Typography>
      </Box>
      <Box className="LineCardContainerMain">
        <Box className="LineCardContainerMainPic">
        <img src={LineWo} className="importanttoreadLinePic" />
        </Box>
        <Box className="importanttoreadcardContainer">
          {data.slice(1).map((item, index) => (
            <Box className="uaatest" key={index}>
              <Box className="importanttoreadCard">
                <Box className="importanttoreadCardPicDiv">
                  <img src={item.symbol} alt={`Symbol ${index}`} />
                </Box>
                <Box className="importanttoreadCardContentText">
                  <Typography
                    variant="h6"
                    className="importanttoreadCardtitle inter"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="importanttoreadCarddescription inter"
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
              <Box className="importanttoreadCardnumberDiv">
                <Typography
                  variant="h6"
                  className="importanttoreadCardnumber inter"
                >
                  {item.number}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default LineCards;
