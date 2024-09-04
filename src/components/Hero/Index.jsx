import React, { useState, useRef } from 'react'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import "./style.css"
import LandingPageVideo from '../../assets/LandingPageVideo.mp4'
import BlurGlow from '../../assets/Images/blur2.png'

const Hero = () => {
  const [video, setVideo] = useState(false);
  const videoRef = useRef(null);

  const videoPlay = () => {
    setVideo(prevState => {
      const newState = !prevState;
      if (newState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      return newState;
    });
  }

  return (
    <Container className='container'>
      <Box className='ContainerContent'>
        <Card className='card'>
          <CardContent className='cardText inter'>
            <Typography variant='p' className='NewText'>NEW</Typography>
            <Typography variant='p'>Latest Recommendation</Typography>
          </CardContent>
        </Card>
        <Box className='ContainerText'>
          <Typography variant='h1' className='mainHeading inter'>Watch Our Introduction Video</Typography>
          <Typography variant="body1" className="mainDescription inter">
            Discover how our platform can help you achieve your learning goals.
          </Typography>
          <button onClick={videoPlay}>{video ? "Pause Video" : "Play Video"}</button>
          <img src={BlurGlow} className='BlurGlow' />
          <video
            ref={videoRef}
            src={LandingPageVideo}
            className="LandingPageVideo"
          />
        </Box>
      </Box>
    </Container>
  )
}
export default Hero; 