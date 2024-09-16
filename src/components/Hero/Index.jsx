import React, { useState, useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import "./style.css";
import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import BlurGlow from "../../assets/Images/blur2.png";
import Play from "../../assets/Icons/play.svg";
import { useLanguage } from "../../globalContext/GlobalProvider";

const Hero = () => {
  const { language, data } = useLanguage();
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

  if (!data) return <div>Loading...</div>;

  return (
    <Container className="HeroPagecontainer">
      <Box className="ContainerContent">
        <Card className="card">
          <CardContent className={`cardText inter ${language === "persian" ? `w-half` : ``}`}>
            <Typography variant="p" className="NewText">
              {data.Introduction.tag}
            </Typography>
            <Typography variant="p">{data.Introduction.latest}</Typography>
          </CardContent>
        </Card>
        <Box className="ContainerText">
          <Typography variant="h1" className="mainHeading inter">
            {data.Introduction.title}
          </Typography>
          <Typography variant="body1" className="mainDescription inter">
            {data.Introduction.description}
          </Typography>
          <div className="HeroComponentButtonDiv">
            <button
              className={`hero-section-button inter ${language === "persian" ? `w-half` : ``}`}
              onClick={videoPlay}
            >
              {video ? data.Introduction.pausebtn : data.Introduction.playbtn}
            </button>
          </div>
          <span className="hero-bg-lines">
            <img src={BlurGlow} className="BlurGlow" />
          </span>
          <div className="video-container">
            {!video && (
              <span className={`hero-play-wrapper ${video ? "video-fade-out" : "video-fade-in"}`}>
                <img src={Play} alt="icon" onClick={videoPlay} />
              </span>
            )}
            <video ref={videoRef} src={LandingPageVideo} className="LandingPageVideo" />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
