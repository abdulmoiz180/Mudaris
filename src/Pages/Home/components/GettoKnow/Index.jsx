import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./get.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import Drimg from "../../../../assets/Images/Drimg.png";
import sciencespo from "../../../../assets/Images/sciencespo.png";
import tolonews from "../../../../assets/Images/tolonews.png";
import tv from "../../../../assets/Images/tv.png";
import mudaris from "../../../../assets/Images/mudaris.png";
import undplogo from "../../../../assets/Images/undplogo.png";
import onelogo from "../../../../assets/Images/onelogo.png";

const logos = [sciencespo, tolonews, tv, mudaris, undplogo, onelogo];

const GettoKnow = () => {
  const { language, data } = useLanguage();
  const navigate = useNavigate(); // Create navigate instance

  if (!data) return <div> data is loading..... </div>;
  const getData = data.gettoknow;

  // Function to handle button click and navigate
  const handleButtonClick = () => {
    navigate("/Mudaris/AboutOwner"); // Navigate to /Mudaris/AboutOwner
  };

  // Dynamically set the font based on the language
  const fontClass = language === "persian" ? "rubik" : "";

  return (
    <section className="GetToknowMainSection">
      <Box className="GetToknowMainContainer">
        <Box className="GetToknowContent">
          <img src={Drimg} alt="Drimg" />
          <Box className={`GetToknowTextContent inter ${fontClass}`}>
            <h2 className={`inter ${fontClass}`}>{getData.headtitle}</h2>
            <Box className="paraDivGettoKnow">
              <p className={`inter ${fontClass}`}>{getData.headdescription}</p>
              <p className={`inter ${fontClass}`}>{getData.headdescription2}</p>
            </Box>
            <Button className={`dm-sans ${fontClass}`} onClick={handleButtonClick}>
              {getData.buttonlabel}
            </Button>
          </Box>
        </Box>
        <Box className="GetToknowContentbelowContainer">
          <Box className={`GetToknowTextContentbelow ${fontClass}`}>
            <Box className="GetToknowTextContentbelowMainText">
              <h4 className={`inter ${fontClass}`}>{getData.transformtitle}</h4>
              <p className={`inter ${fontClass}`}>{getData.transformdescription}</p>
              <p className={`inter ${fontClass}`}>{getData.featuredline}</p>
            </Box>
          </Box>
          <Box className="GetToknowContentbelowLogoBox">
            {logos.map((logo, key) => (
              <Box key={key} className="GetToknowContentbelowLogo">
                <img src={logo} alt={`Company logo ${key}`} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default GettoKnow;
