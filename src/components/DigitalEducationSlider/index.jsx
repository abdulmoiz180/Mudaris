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

  const images = data.digitaleducationimages;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
            <img
              src={imagePath}
              alt={category}
              className="DigitalEducationImage"
            />
          </Box>
        ))}
      </Slider>
    </section>
  );
}
