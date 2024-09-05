import { Box, Typography } from "@mui/material";
import React from "react";
import Home from "../../assets/Icons/Home.svg";
import CaseStudy from "../../assets/Icons/caseStudy.svg";
import Discussion from "../../assets/Icons/communication.svg";
import Schedule from "../../assets/Icons/scheduel.svg";
import Certificate from "../../assets/Icons/diploma.svg";
import Upload from "../../assets/Icons/upload.png";

import "./Elearn.css";
const E_Learn = () => {
  return (
    <section className="Elearn-section">
      <div className="width-90 why-cards-container ">
        <Typography component="h6" className="inter fs-48 why-title clr-white">
          Why E-Learn?
        </Typography>
        <Box component="div" className="why_card_wrapper flex border-gradient">
          {whyCard[0].img.map((image, index) => (
            <>
              <Box key={index} component="div" className=" why_card column">
                <Box component="div" className="why-img-wrapper">
                  <img src={image} alt={`icon-${index}`} />
                </Box>
                <Typography variant="body1" className="inter  why-card-content">
                  {whyCard[0].content[index]}
                </Typography>
              </Box>
              <div className="vertical"></div>
              {(index + 1) % 3 === 0 && index !== whyCard[0].img.length - 1 && (
                <div className="horizontal-line"></div>
              )}
            </>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default E_Learn;

let whyCard = [
  {
    img: [Home, CaseStudy, Discussion, Schedule, Certificate, Upload],
    content: [
      "Learn anything, anywhere",
      "Case Studies",
      "Discussion 24/7",
      "Schedule with mentor",
      "Certificate",
      "Upload Portfolio",
    ],
  },
];
