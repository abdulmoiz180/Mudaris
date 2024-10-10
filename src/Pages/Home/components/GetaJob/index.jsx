import React from "react";
import "./getajob.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import MudarisVideo from "@assets/Images/AgencyNavigatorMale.mp4"; // Video import

const GetaJob = () => {
  const { data, language } = useLanguage();
  if (!data) return <div>Data is loading...</div>;
  const pickData = data.getajob;

  return (
    <section className="getajob-container">
      <Box className="getajob-heading">
        <h1
          className={`clr-white ${language === "persian" ? "rubik" : "inter"}`}
        >
          {pickData.headtitle}
        </h1>
      </Box>
      <div className="getajob-infobox">
        <p
          className={`getajob-info ${language === "persian" ? "rubik" : "inter"}`}
        >
          {pickData.contentinfobox}
        </p>
      </div>
      <Box className="getajob-content">
        <div className="getajob-paragraphs">
          <div className="getajobParaforbg">
            <div className="getajobparacontentonly">
              <p
                className={`getajob-para ${language === "persian" ? "rubik" : "dm-sans"}`}
              >
                {pickData.descriptionpara1}
              </p>
              <div className="getajob-para">
                <p
                  className={`getajob-qa ${language === "persian" ? "rubik" : "dm-sans"}`}
                >
                  {pickData.descriptionquestion1}
                </p>
              </div>
              <p
                className={`getajob-qa ${language === "persian" ? "rubik" : "dm-sans"}`}
              >
                {pickData.descriptionquestion2}
              </p>
              <p
                className={`getajob-qa ${language === "persian" ? "rubik" : "dm-sans"}`}
              >
                {pickData.descriptionanswer}
              </p>
            </div>
          </div>
          <div className="getajobParaforbg">
            <p
              className={`getajob-para ${language === "persian" ? "rubik" : "dm-sans"}`}
            >
              {pickData.descriptionpara3}
            </p>
          </div>
          <div className="getajobParaforbg">
            <p
              className={`getajob-para ${language === "persian" ? "rubik" : "dm-sans"}`}
            >
              {pickData.descriptionpara4}
            </p>
          </div>
          <div className="getajobParaforbg">
            <div className="getajob-para">
              <p
                className={`getajob-knwothat ${language === "persian" ? "rubik" : "dm-sans"}`}
              >
                {pickData.descriptionparaknowthat1}
              </p>
              <p
                className={`getajob-knwothat ${language === "persian" ? "rubik" : "dm-sans"}`}
              >
                {pickData.descriptionparaknowthat2}
              </p>
            </div>
          </div>

          {/* Infinite looping video */}
          <div className="logodiv">
            <video width="100%" autoPlay loop muted>
              <source src={MudarisVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default GetaJob;
