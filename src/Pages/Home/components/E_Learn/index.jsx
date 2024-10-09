import { Box, Typography } from "@mui/material";
import React from "react";
import "./Elearn.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import Home from "@assets/Icons/Home.svg";
import CaseStudy from "@assets/Icons/caseStudy.svg";
import Discussion from "@assets/Icons/communication.svg";
import Schedule from "@assets/Icons/scheduel.svg";
import Certificate from "@assets/Icons/diploma.svg";
import Upload from "@assets/Icons/upload.png";

const E_Learn = () => {
  const { data, language } = useLanguage();

  // Ensure `data` exists before accessing `data.whyElearn`
  if (!data || !data.whyElearn) {
    return <div>Data is loading...</div>;
  }

  const whyElearn = data.whyElearn;
  {`${language === "persian" ? "viewBtn rubik" : "viewBtn dm-sans"}`}
  return (
    <section className="Elearn-section">
      <div className="width-90 why-cards-container">
        <Typography
          component="h6"
          className={`fs-48 why-title clr-white ${
            language === "persian" ? `align-right rubik`  : `align-left inter`
          }`}
        >
          {whyElearn[1].title}
        </Typography>
        <Box component="div" 
        className={`why_card_wrapper flex border-gradient ${
          language === "persian" ? `row-reverse` : ``
        }`}>
          {imgs.map((image, index) => (
            <React.Fragment key={index}>
              <Box component="div" className="why_card column">
                <Box component="div" className="why-img-wrapper">
                  <img src={image} alt={`icon-${index}`} />
                </Box>
                <Typography variant="body1" className={`${language === "persian" ? "why-card-content rubik" : "why-card-content inter"}`}>
                  {whyElearn[1][`box${index + 1}`]}
                </Typography>
              </Box>
              <div className="vertical"></div>
              {(index + 1) % 3 === 0 &&
                index !== whyElearn[0].img.length - 1 && (
                  <div className="horizontal-line"></div>
                )}
            </React.Fragment>
          ))}
        </Box>
      </div>
    </section>
  );
};

export default E_Learn;

let imgs = [Home, CaseStudy, Discussion, Schedule, Certificate, Upload];
