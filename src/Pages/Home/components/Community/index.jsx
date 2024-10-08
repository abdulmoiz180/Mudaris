import { Button, Typography } from "@mui/material";
import React from "react";
import "./community.css";
import {useLanguage} from "../../../../globalContext/GlobalProvider";
import Person from "../../../../assets/Images/communityPerson.png";
import Picture from "../../../../assets/Images/nigga.png";
import Meeting from "../../../../assets/Images/meeting.png";
import Podcast from "../../../../assets/Images/podcast.png";

import Meet from "../../../../assets/Images/meet.png";
import Play from "../../../../assets/Icons/play.svg";
import Conversation from "../../../../assets/Images/conversation.png";
const Community = () => {
  const { language, data, status, error } = useLanguage();
  
  if (!data) {
    return <div className="clr-white">Data is not available</div>;
  }
  return (
    <section className="community-section">
      <div className="community-header column ">
        <Typography variant="h3" className="clr-white inter community-title ">
          {data.studentvideoreviews.title}
        </Typography>
        <Typography variant="h3" className="clr-white inter description">
        {data.studentvideoreviews.para}
        </Typography>
        <Button variant="contained" className="community-btn inter">
        {data.studentvideoreviews.button}
        </Button>
      </div>
      <section className="community-stories flex">
        {images.map((imageGroup, index) => (
          <div key={index} className="community-stories-section">
            {Object.keys(imageGroup).map((column, i) => (
              <div key={i} className="column stories-wrapper">
                {imageGroup[column].map((img, idx) => (
                  <div className="community-video-container">
                    <span className="community-overlay-play">
                      <img src={Play} alt="play-icon" />
                    </span>
                    <img
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      className="video-img"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Community;

let images = [
  {
    column1: [Conversation, Meet, Picture],
    column2: [Meet, Picture, Meeting],
    column3: [Person, Podcast, Conversation, Person],
  },
];
