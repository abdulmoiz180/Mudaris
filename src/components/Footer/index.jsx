import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./footer.css";
import { copyWrite, footerContent } from "../../Seed";
import FaceBook from "../../assets/icons/FaceBook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import Youtube from "../../assets/icons/Lozenge.svg";
import Twitter from "../../assets/icons/Twitter.svg";
const Footer = () => {
  return (
    <footer className="footer-bg align-center">
      <div className="footer-section row">
        <Box component="div" className="footer-left-section column">
          <Box component="div" className="footer-content-wrapper">
            <Typography variant="h6" className="clr-white footer-h2 monts">
              E-Learn
            </Typography>
            <Typography
              variant="p"
              className="secondary-font-clr footer-p dm-sans"
            >
              Sinau is a global online learning platform that offers anyone,
              anywhere access to online courses.
            </Typography>
          </Box>
          <Button variant="outlined" className="footer-btn clr-white inter">
            <span>
              <LanguageIcon />
            </span>
            English 
            <span>
              <ArrowForwardIosIcon className="footer-arrow-icon" />
            </span>
          </Button>
        </Box>

        <Box component="div" className="flex footer-right-section">
          {footerContent.map((content, index) => (
            <Box component="div" key={index} className="sublinks-wrapper">
              <Typography variant="h6" className="white-normal">
                {content.title}
              </Typography>
              <ul>
                {content.links.map((l, i) => (
                  <li key={i} className="secondary-font-clr dm-sans">
                  {l}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </div>
      <Divider />

      <div className="copy-write space-between flex-center ">
        <div className="footer-icons flex">
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Twitter} alt="" />
          <img src={FaceBook} alt="" />
          <img src={Youtube} alt="" />
        </div>

        <Typography variant="p" className="secondary-font-clr footer-p dm-sans">
          {copyWrite[1].text}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
