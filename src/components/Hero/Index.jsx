import React, { useState, useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import "./style.css";
import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import BlurGlow from "../../assets/Images/blur2.png";
import Play from "../../assets/Icons/play.svg";
import { useLanguage } from "../../globalContext/GlobalProvider";
const Hero = () => {
  const { data,language} = useLanguage();
  const [video, setVideo] = useState(false);
  const videoRef = useRef(null);
  const videoPlay = () => {
    setVideo((prevState) => {
      const newState = !prevState;
      if (newState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      return newState;
    });
  };

  return (
    <Container className="HeroPagecontainer">
      <Box className="ContainerContent">
        <Card className="card">
          <CardContent className={`cardText inter ${language==="english" ? `w-half`:`` }`}>
            <Typography variant="p" className="NewText">
              {data[1].tag}
            </Typography>
            <Typography variant="p">{data[1].latest}</Typography>
          </CardContent>
        </Card>
        <Box className="ContainerText">
          <Typography variant="h1" className="mainHeading inter">
            {data[1].title}
          </Typography>
          <Typography variant="body1" className="mainDescription inter">
            {data[1].description}
          </Typography>
          <div className="HeroComponentButtonDiv">
            <button 
            className={`hero-section-button inter  ${language==="english" ? `w-half`:` ` }`} onClick={videoPlay}>
              {video ? data[1].pausebtn : data[1].playbtn}
            </button>
          </div>
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
              className="LandingPageVideo"
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
};
export default Hero;
