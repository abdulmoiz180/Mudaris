import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../../globalContext/GlobalProvider";
import "./DigitalEducation.css"; // Make sure this file is properly linked

export default function DigitalEducation() {
  const { data } = useLanguage();

  if (!data || !data.digitaleducationimages) {
    console.log("Data is not loading");
    return <div>Data is loading...</div>;
  }

  const images = data.digitaleducationcards;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   responsive: [
  //     {
  //       breakpoint: 1044,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 844,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1544, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1044, // Large screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960, // Medium screens
        settings: {
          slidesToShow: 3,  // Adjust to 3 slides for 844px and below
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,     
        },
      },
      {
        breakpoint: 670, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  
  return (
    <section className="DigitalEducationComponent">
      <Box className="DigitalEducationComponentTextComponent">
        <Box className="DigitalEducationComponentTitleDesc">
          <Typography
            variant="h1"
            className="DigitalEducationComponentMainTitle inter"
          >
            {data.digitaleducation.headtitle}
          </Typography>
          <Typography
            variant="body1"
            className="DigitalEducationComponentDescription inter"
          >
            {data.digitaleducation.description}
          </Typography>
        </Box>
        <Box className="DigitalEducationComponentButtonDiv">
          <Button>See All</Button>
        </Box>
      </Box>
      <Slider {...settings}>
        {Object.entries(images).map(([category, imagePath], index) => (
          <Box key={index} className="DigitalEducationSlide">
            <Box className="PicBgDigitalEducationSlide"
               sx={{
                backgroundImage: `url(${imagePath.pic})`,
                backgroundSize: 'cover',    // Ensures the image covers the div fully
              }}>
            <Box className="DigitalEducationSlideNewandPicBox">
              <Box className="DigitalEducationSlideNewChildBox">
                {imagePath.new && (
                  <Typography
                    variant="body"
                    className="dm-sans DigitalEducationSlideNew"
                  >
                    {imagePath.new}
                  </Typography>
                )}
              </Box>
            </Box>
            {/* <img src={imagePath.pic} className="DigitalEducationImage" /> */}
            <Box
              className={
                imagePath.des
                  ? "DigitalEducationSlideTitleandPicBoxwith-description" // Apply this class if `des` exists
                  : "DigitalEducationSlideTitleandPicBox" // Default class when `des` does not exist
              }
            >
              <Typography
                variant="h5"
                className="DigitalEducationCardTitle inter"
              >
                {imagePath.title}
              </Typography>
              {imagePath.des && (
                <Typography
                  variant="body"
                  className="dm-sans DigitalEducationSlideDescription"
                >
                  {imagePath.des}
                </Typography>
              )}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
