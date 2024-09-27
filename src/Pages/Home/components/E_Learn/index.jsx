import { Box, Typography } from "@mui/material";
import React from "react";
import "./Elearn.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";

const E_Learn = () => {
  const { data, language } = useLanguage();

  // Ensure `data` exists before accessing `data.whyElearn`
  if (!data || !data.whyElearn) {
    console.log("Data is not loading");
    return <div>Data is loading...</div>;
  }

  const whyElearn = data.whyElearn;

  return (
    <section className="Elearn-section">
      <div className="width-90 why-cards-container">
        <Typography
          component="h6"
          className={`inter fs-48 why-title clr-white ${
            language === "persian" ? `align-right` : `align-left`
          }`}
        >
          {whyElearn[1].title}
        </Typography>
        <Box component="div" className="why_card_wrapper flex border-gradient">
          {whyElearn[0].img.map((image, index) => (
            <React.Fragment key={index}>
              <Box component="div" className="why_card column">
                <Box component="div" className="why-img-wrapper">
                  <img src={image} alt={`icon-${index}`} />
                </Box>
                <Typography variant="body1" className="inter why-card-content">
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
