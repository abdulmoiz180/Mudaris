import * as React from "react";
import Box from "@mui/material/Box";
import "./Testimonials.css";
import Ellipse7 from "../../../../assets/Images/Ellipse7.png";
import Avatar from "../../../../assets/Images/Avatar.png";
import Client from "../../../../assets/Images/Client.png"
import { useLanguage } from "../../../../globalContext/GlobalProvider";

function Testimonials() {
  const { language, data } = useLanguage();
  if (!data) return <div>Loading...</div>;
  return (
    <Box className="testim-container">
      <Box className="testim-box">
        <h1 className="clients clr-white inter">{data.clientdata.title}</h1>
        <p className="clients clr-white inter">{data.clientdata.description}</p>
      </Box>
      <Box className="testim-second-box">
        <div className="testim-image-container">
          <img className="ellipse" src={Ellipse7} alt="img" />
          <img
            className="square-image"
            src={Client} // Use image from data
            alt="Client"
          />
          <img src={Avatar} className="avatar" alt="img" />
        </div>
        <div className="client-review">
          <p className="clr-white inter clienttext">
            {data.clientdata.platformdescription}
          </p>
          <p className="clr-white inter clientname">
            {data.clientdata.clientname}
          </p>
          <p className="lightgray inter clientrole">
            {data.clientdata.clientrole}
          </p>
        </div>
      </Box>
    </Box>
  );
}

export default Testimonials;
