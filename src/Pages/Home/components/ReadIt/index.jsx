import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./LineCard.css";
import LineImg from '../../../../assets/Images/linewo.png';
import Symbol from '../../../../../public/assets/Icons/Symbol.png';
import Symbol1 from '../../../../../public/assets/Icons/Symbol (1).png';
import Symbol2 from '../../../../../public/assets/Icons/Symbol (2).png';
import Symbol3 from '../../../../../public/assets/Icons/Symbol (3).png';
import Symbol4 from '../../../../../public/assets/Icons/moneyicon.png';
import Symbol5 from '../../../../../public/assets/Icons/currciculumicon.png';
import Symbol6 from '../../../../../public/assets/Icons/networkbrighticon.png';
import Symbol7 from '../../../../../public/assets/Icons/unilevelicon.png';

const LineCards = () => {
  const { data, language } = useLanguage();
  if (!data) return <Typography>Data not available</Typography>;

  const parentArray = data.parentarray;
  const numbers = data.numbersforparentarray;

  const symbolArray = [
    Symbol,
    Symbol1,
    Symbol2,
    Symbol3,
    Symbol4,
    Symbol5,
    Symbol6,
    Symbol7
  ];

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
                  src={LineImg}
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
                        {/* Use the symbol from the symbolArray based on the index */}
                        <img src={symbolArray[index % symbolArray.length]} alt={`Symbol ${index}`} />
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
