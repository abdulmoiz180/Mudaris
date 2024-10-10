import React, { useRef } from "react";
import "./whatyouget.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import blueverifiedbadge from "../../../../assets/Icons/blueverifiedbadge.png";
import AgencyNavigatorMale from "../../../../assets/LandingPageVideo.mp4";
import AgencyNavigatorFemale from "../../../../assets/LandingPageVideo.mp4";
import SixFigureSalesRep from "../../../../assets/LandingPageVideo.mp4";
import playbuttonimg from "../../../../assets/Images/playbuttonimg.png";

const wygImages = [
  AgencyNavigatorMale,
  AgencyNavigatorFemale,
  SixFigureSalesRep,
  AgencyNavigatorMale,
  AgencyNavigatorFemale,
];

const WhatYouGet = () => {
  const { language, data } = useLanguage();
  if (!data) return <div>data is loading.....</div>;

  const videoRefs = useRef([]); // To store video elements
  const playButtonRefs = useRef([]); // To store play button elements

  const videoPlay = (index) => {
    const currentVideo = videoRefs.current[index];
    const currentPlayButton = playButtonRefs.current[index];

    if (currentVideo.paused) {
      // Play the current video and hide its play button
      currentVideo.play();
      currentPlayButton.classList.add("hidden");
    } else {
      // Pause the current video and show its play button
      currentVideo.pause();
      currentPlayButton.classList.remove("hidden");
    }

    // Pause all other videos
    videoRefs.current.forEach((video, idx) => {
      if (idx !== index && video) {
        video.pause();
        playButtonRefs.current[idx].classList.remove("hidden");
      }
    });
  };

  const pickData = data.whatyouget;

  // Dynamically choose the font based on the language
  const fontClass = language === "persian" ? "rubik" : "inter"; // Use your default font class

  return (
    <section className={`whatyouget-container ${fontClass}`}>
      <Box className="whatyouget-headings">
        <p className={` wyg-para1 ${fontClass}`}>{pickData[0].headtitle1}</p>
        <h2 className={` wyg-head1 ${fontClass}`}>{pickData[0].headtitle2}</h2>
        <p className={` wyg-para2 ${fontClass}`}>{pickData[0].headtitle3}</p>
      </Box>
      <Box className="whatyouget-cards">
        {pickData.slice(1).map((item, index) => (
          <div key={index} className={`whatyouget-card ${fontClass}`}>
            <div className="whatyouget-card-text">
              <div className="badgeandrole">
                <h2 className={` ${fontClass}`}>{item.role}</h2>
                <img
                  src={blueverifiedbadge}
                  alt="Verified badge"
                  className="whatyouget-verified-badge"
                />
              </div>
              <p className={` ${fontClass}`}>{item.description}</p>
            </div>
            <div className="whatyouget-card-imagecontainer">
              <video
                src={wygImages[index]}
                ref={(el) => (videoRefs.current[index] = el)}
                className="whatyouget-video"
              ></video>
              <img
                src={playbuttonimg}
                alt="Play button"
                className="whatyouget-playbutton"
                onClick={() => videoPlay(index)}
                ref={(el) => (playButtonRefs.current[index] = el)}
              />
              <p className={`purple-box-text public-sans ${fontClass}`}>
                {item.purpleboxtext}
              </p>
            </div>
          </div>
        ))}
      </Box>
    </section>
  );
};

export default WhatYouGet;
