import React, { useState, useRef } from "react";
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
];

const WhatYouGet = () => {
  const { language, data } = useLanguage();
  if (!data) return <div>data is loading.....</div>;

  // Manage separate states for each video
  const [videoStates, setVideoStates] = useState(Array(wygImages.length).fill(false));
  
  // Create refs for each video and play button
  const videoRefs = useRef([]);
  const playButtonRefs = useRef([]);

  // Function to handle video play/pause
  const videoPlay = (index) => {
    setVideoStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];

      if (newStates[index]) {
        videoRefs.current[index].play();
        playButtonRefs.current[index].style.display = "none"; // Hide play button for the playing video
      } else {
        videoRefs.current[index].pause();
        playButtonRefs.current[index].style.display = "block"; // Show play button again when paused
      }

      // Pause other videos if one is playing
      videoRefs.current.forEach((video, idx) => {
        if (idx !== index && video) {
          video.pause();
          playButtonRefs.current[idx].style.display = "block"; // Show play button for other videos
          newStates[idx] = false; // Update the state for other videos to 'paused'
        }
      });

      return newStates;
    });
  };

  const pickData = data.whatyouget;

  return (
    <section className="whatyouget-container">
      <Box className="whatyouget-headings">
        <p className="inter wyg-para1">{pickData[0].headtitle1}</p>
        <h2 className="inter wyg-head1">{pickData[0].headtitle2}</h2>
        <p className="inter wyg-para2">{pickData[0].headtitle3}</p>
      </Box>
      <Box className="whatyouget-cards">
        {pickData.slice(1).map((item, index) => (
          <div key={index} className="whatyouget-card">
            <div className="whatyouget-card-text">
              <div className="badgeandrole">
                <h2 className="public-sans">{item.role}</h2>
                <img
                  src={blueverifiedbadge}
                  alt="Verified badge"
                  className="whatyouget-verified-badge"
                />
              </div>
              <p className="public-sans">{item.description}</p>
            </div>
            <div className="whatyouget-card-imagecontainer">
              <video
                src={wygImages[index]}
                ref={(el) => (videoRefs.current[index] = el)} // Assign ref for each video
                key={index}
              ></video>
              <img
                src={playbuttonimg}
                alt="Play button"
                className="whatyouget-playbutton"
                onClick={() => videoPlay(index)} // Pass index to handle specific video
                ref={(el) => (playButtonRefs.current[index] = el)} // Assign ref for each play button
                key={index}
              />
              <p className="purple-box-text public-sans">
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
