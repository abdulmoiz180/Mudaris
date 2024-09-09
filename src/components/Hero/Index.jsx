import React, { useState, useRef } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import "./style.css";
import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import BlurGlow from "../../assets/Images/blur2.png";
import Play from "../../assets/Icons/play.svg";
const Hero = () => {
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
          <CardContent className="cardText inter">
            <Typography variant="p" className="NewText">
              NEW
            </Typography>
            <Typography variant="p">Latest Recommendation</Typography>
          </CardContent>
        </Card>
        <Box className="ContainerText">
          <Typography variant="h1" className="mainHeading inter">
            Watch Our Introduction Video
          </Typography>
          <Typography variant="body1" className="mainDescription inter">
            Discover how our platform can help you achieve your learning goals.
          </Typography>
          <div className="HeroComponentButtonDiv">
          <button className="hero-section-button inter" onClick={videoPlay}>
            {video ? "Pause Video" : "Play Video"}
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
