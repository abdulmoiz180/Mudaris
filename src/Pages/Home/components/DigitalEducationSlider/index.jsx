import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./DigitalEducation.css";
import Development from "@assets/Images/Developmentimg.png";
import Design from "@assets/Images/Designimg.png";
import Marketing from "@assets/Images/Marketingimg.png";
import Business from "@assets/Images/Businessimg.png";
import DataScience from "@assets/Images/DataScienceimg.png";
import Technology from "@assets/Images/Technologyimg.png";

const educationImages = [
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
  Technology,
];

export default function DigitalEducation() {
  const { language, data, status, error } = useLanguage();
  const navigate = useNavigate(); // Create navigate instance

  if (!data) {
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

  // Function to handle "See All" button click
  const handleSeeAllClick = () => {
    navigate("/Mudaris/datascience"); // Navigate to Mudaris/datascience
  };

  return (
    <section className="DigitalEducationComponent">
      <Box
        className={`DigitalEducationComponentTextComponent`}
      >
        <Box
          className={`DigitalEducationComponentTitleDesc`}
        >
          <Typography
            variant="h1"

          >
            {data.digitaleducation.headtitle}
          </Typography>
          <Typography
            variant="body1"
            className={`${language === "persian" ? "DigitalEducationComponentDescription rubik" : "DigitalEducationComponentDescription inter"}`}
          >
            {data.digitaleducation.description}
          </Typography>
        </Box>
        <Box className="DigitalEducationComponentButtonDiv">
          <Button onClick={handleSeeAllClick}>See All</Button>{" "}
          {/* Add onClick event */}
        </Box>
      </Box>

      <Slider {...settings}>
        {educationImages.map((img, index) => (
          <Box
            key={index}
            className="PicBgDigitalEducationSlide"
            sx={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
            }}
          >
            {images[index] && (
              <Box className="DigitalEducationSlideNewandPicBox">
                <Box className="DigitalEducationSlideNewChildBox">
                  {images[index].new && (
                    <Typography
                      variant="body"
                      className={`${language === "persian" ? "DigitalEducationSlideNew clr-white rubik" : "DigitalEducationSlideNew clr-white dm-sans"}`}
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
                className={`${language === "persian" ? "DigitalEducationCardTitle clr-white rubik" : "DigitalEducationCardTitle clr-white inter"}`}
              >
                {images[index]?.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
