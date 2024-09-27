import React from "react";
import "./getajob.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import Spline from "@splinetool/react-spline";

const GetaJob = () => {
  const { data } = useLanguage();
  if (!data) return <div> data is loading..... </div>;
  const pickData = data.getajob;
  return (
    <section className="getajob-container">
      <Box className="getajob-heading">
        <h2 className="inter">{pickData.headtitle}</h2>
      </Box>
      <Box className="getajob-content">
        <div className="getajob-paragraphs">
          <p className="getajob-para dm-sans">{pickData.descriptionpara1}</p>
          <div className="getajob-para">
            <p className="getajob-qa dm-sans">
              {pickData.descriptionquestion1}
            </p>
            <p className="getajob-qa dm-sans">
              {pickData.descriptionquestion2}
            </p>
            <p className="getajob-qa dm-sans">{pickData.descriptionanswer}</p>
          </div>
          <p className="getajob-para dm-sans">{pickData.descriptionpara3}</p>
          <p className="getajob-para dm-sans">{pickData.descriptionpara4}</p>
          <div className="getajob-para">
            <p className="getajob-knwothat dm-sans">
              {pickData.descriptionparaknowthat1}
            </p>
            <p className="getajob-knwothat dm-sans">
              {pickData.descriptionparaknowthat2}
            </p>
          </div>
        </div>

        <div className="getajob-circle">
          <Spline scene="https://prod.spline.design/37l9lw5REBf6fMtO/scene.splinecode" />
        </div>
      </Box>
      <div className="getajob-infobox">
        <p className="getajob-info inter">{pickData.contentinfobox}</p>
      </div>
    </section>
  );
};

export default GetaJob;
