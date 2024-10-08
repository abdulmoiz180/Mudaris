import React from "react";
import "./getajob.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import MudarisLogo from '../../../../assets/Images/mudarislogo.jfif'
const GetaJob = () => {
  const { data,language } = useLanguage();
  if (!data) return <div> data is loading..... </div>;
  const pickData = data.getajob;
  return (
    <section className="getajob-container">
      <Box className="getajob-heading">
        <h1 className="inter">{pickData.headtitle}</h1>
      </Box>
      <Box className="getajob-content">
        <div className="getajob-paragraphs">
          <div className='getajobParaforbg'>
            <div className="getajobparacontentonly">
          <p className="getajob-para dm-sans">{pickData.descriptionpara1}</p>
          <div className="getajob-para">
            <p className="getajob-qa dm-sans">
              {pickData.descriptionquestion1}
            </p>
            </div>
            <p className="getajob-qa dm-sans">
              {pickData.descriptionquestion2}
            </p>
            <p className="getajob-qa dm-sans">{pickData.descriptionanswer}</p>
            </div>

          </div>
          <div className="getajobParaforbg">
          <p className="getajob-para dm-sans">{pickData.descriptionpara3}</p>
          </div>
          <div className="getajobParaforbg">
          <p className="getajob-para dm-sans">{pickData.descriptionpara4}</p>
          </div>
          <div className="getajobParaforbg">
          <div className="getajob-para">
            <p className="getajob-knwothat dm-sans">
              {pickData.descriptionparaknowthat1}
            </p>
            <p className="getajob-knwothat dm-sans">
              {pickData.descriptionparaknowthat2}
            </p>
          </div>
          </div>
              <img src={MudarisLogo}  className="logodiv"/>
        </div>
      </Box>
      <div className="getajob-infobox">
        <p className="getajob-info inter">{pickData.contentinfobox}</p>
      </div>
    </section>
  );
};

export default GetaJob;
