import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./DigitalEducation.css";
import Development from "@assets/Images/Developmentimg.png";
import Design from "@assets/Images/Designimg.png";
import Marketing from "@assets/Images/Marketingimg.png";
import Business from "@assets/Images/Businessimg.png";
import DataScience from "@assets/Images/DataScienceimg.png";
import Technology from "@assets/Images/Technologyimg.png";

const NIGGA_images = [
  Development,
  Design,
  Marketing,
  Business,
  DataScience,
  Technology,
  Development,
  Design,
  Marketing,
  Business,
  DataScience,
  Technology
];

export default function DigitalEducation() {
  const { language, data, status, error } = useLanguage();
  if (!data || !data.digitaleducationimages) {
    console.log("Data is not loading");
    return <div>Data is loading...</div>;
  }

  // Get the JSON data that corresponds to each image
  const images = data.digitaleducationcards;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1544,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
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
        {NIGGA_images.map((img, index) => (
          <Box
            key={index}
            className="PicBgDigitalEducationSlide"
            sx={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            {/* If data.digitaleducationcards exists, match it with the image */}
            {images[index] && (
              <Box className="DigitalEducationSlideNewandPicBox">
                <Box className="DigitalEducationSlideNewChildBox">
                  {images[index].new && (
                    <Typography
                      variant="body"
                      className="dm-sans DigitalEducationSlideNew clr-white"
                    >
                      {images[index].new}
                    </Typography>
                  )}
                </Box>
              </Box>
            )}

            <Box
              className={
                images[index].des
                  ? "DigitalEducationSlideTitleandPicBoxwith-description"
                  : "DigitalEducationSlideTitleandPicBox"
              }
            >
              <Typography
                variant="h5"
                className="DigitalEducationCardTitle inter clr-white"
              >
                {images[index]?.title}
              </Typography>
              {/* {images[index]?.des && (
                <Typography
                  variant="body"
                  className="dm-sans DigitalEducationSlideDescription clr-white"
                >
                  {images[index]?.des}
                </Typography> 
                     )}*/}
            </Box>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
