import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./LineCard.css";

const LineCards = () => {
  const { data } = useLanguage();
  if (!data) return <Typography>Data not available</Typography>;

  const parentArray = data.parentarray;
  const numbers = data.numbersforparentarray;

  return (
    <>
      {parentArray.map((section, sectionIndex) => {
        const sectionKey = Object.keys(section)[0];
        const sectionItems = section[sectionKey];

        return (
          <Box key={sectionIndex} className="importanttoread">
            <Typography
              variant="h1"
              className="LineCardContainerMainTitle inter"
            >
              {sectionItems[0]?.title}
            </Typography>
            <Box className="LineCardContainerMainTitleDesc">
              <Typography
                variant="h1"
                className="LineCardContainerMainTitle inter"
              >
                {sectionItems[0]?.title2}
              </Typography>
              <Box className="LineCardContainerMainTitleDesc">
                <Typography
                  variant="body1"
                  className="LineCardContainerMainDesc inter"
                >
                  {sectionItems[0]?.description}
                </Typography>
              </Box>
            </Box>
            <Box className="LineCardContainerMain">
              <Box className="LineCardContainerMainPic">
                <img
                  src={sectionItems[0]?.lineImg}
                  className="importanttoreadLinePic"
                  alt="Line"
                />
                <Box className="importanttoreadCardnumberDivParent">
                  {Object.values(numbers).map((num, index) => (
                    <Box
                      key={index}
                      className={`importanttoreadCardnumberDiv ${
                        sectionKey === "participate"
                          ? "specialClassForSecondComponent"
                          : ""
                      }`}
                    >
                      <Typography
                        variant="h6"
                        className="importanttoreadCardnumber inter"
                      >
                        {num}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className="importanttoreadcardContainer">
                {sectionItems.slice(1).map((item, index) => (
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
                          {item.Cardtitle}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="importanttoreadCarddescription inter"
                        >
                          {item.Carddescription}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default LineCards;
