import React, { useState, useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import "./style.css";
import LandingPageVideo from "@assets/LandingPageVideo.mp4";
import BlurGlow from "@assets/Images/Blur2.png";
import Play from "@assets/Icons/play.svg";
import { useLanguage } from "../../../../globalContext/GlobalProvider";

const Hero = () => {
  const { language, data } = useLanguage();
  const [video, setVideo] = useState(false);
  const videoRef = useRef(null);

  const videoPlay = () => {
    setVideo((prevState) => {
      const newVideoState = !prevState;
      if (newVideoState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      return newVideoState;
    });
  };

  if (!data) {
    return <div className="clr-white">Data is not available</div>;
  }

  return (
    <Container className="HeroPagecontainer">
      <Box className="ContainerContent">
        <Box className="ContainerText">
          {/*  */}
          <Typography
            variant="h1"
            className={`  ${language === "persian" ? "persianHeading clr-white rubik" : "mainHeading inter"}`}
          >
            {data.Introduction.title}
          </Typography>

          <Typography
            variant="body1"
            className={` ${language === "persian" ? "persianDescription clr-white rubik" : "mainDescription inter"}`}
          >
            {data.Introduction.description}
          </Typography>
          <span className="hero-bg-lines">
            <img src={BlurGlow} className="BlurGlow" />
          </span>
          <div className="video-container">
            {!video && (
              <span
                className={`hero-play-wrapper ${
                  video ? "video-fade-out" : "video-fade-in"
                }`}
              >
                <img src={Play} alt="icon" onClick={videoPlay} />
              </span>
            )}
            <video
              ref={videoRef}
              src={LandingPageVideo}
              className={`LandingPageVideo`}
              onClick={videoPlay}
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
