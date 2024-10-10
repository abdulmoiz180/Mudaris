import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./footer.css";
import FaceBook from "@assets/Icons/FaceBook.svg";
import Instagram from "@assets/Icons/Instagram.svg";
import LinkedIn from "@assets/Icons/LinkedIn.svg";
import Youtube from "@assets/Icons/Lozenge.svg";
import { useLanguage } from "../../globalContext/GlobalProvider";
import Twitter from "@assets/Icons/Twitter.svg";

const Footer = () => {
  const { data, toggleLanguage, language } = useLanguage();

  if (!data) return <h2>data is loading....</h2>;

  const fontClass = language === "persian" ? "rubik" : "monts";

  return (
    <footer className="footer-bg align-center">
      <div className="footer-section row">
        <Box component="div" className="footer-left-section column">
          <Box component="div" className="footer-content-wrapper">
            <Typography
              variant="h6"
              className={`clr-white footer-h2 ${fontClass}`}
            >
              {data.footerContent[0].title}
            </Typography>
            <Typography
              variant="body1"
              className={`secondary-font-clr footer-p ${fontClass}`}
            >
              {data.footerDescription}
            </Typography>
          </Box>
          {/* <Button
            variant="outlined"
            className="footer-btn clr-white inter"
            onClick={toggleLanguage}
          >
            <span>
              <LanguageIcon />
            </span>
            {data.togglebutton}
            <span>
              <ArrowForwardIosIcon className="footer-arrow-icon" />
            </span>
          </Button> */}
        </Box>

        <Box component="div" className="flex footer-right-section">
          {data.footerContent.map((content, index) => (
            <Box component="div" key={index} className="sublinks-wrapper">
              <Typography variant="h6" className={`white-normal ${fontClass}`}>
                {content.title}
              </Typography>
              <ul>
                {content.links.map((l, i) => (
                  <li key={i} className={`secondary-font-clr ${fontClass}`}>
                    {l}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </div>
      <Divider />

      <div className="copy-write space-between flex-center">
        <div className="footer-icons flex">
          <img src={Instagram} alt="Instagram" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Twitter} alt="Twitter" />
          <img src={FaceBook} alt="Facebook" />
          <img src={Youtube} alt="YouTube" />
        </div>

        <Typography
          variant="body1"
          className={`secondary-font-clr footer-p ${fontClass}`}
        >
          {data.copyWrite.text}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
