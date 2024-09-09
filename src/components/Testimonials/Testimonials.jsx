import * as React from "react";
import Box from "@mui/material/Box";
import "./Testimonials.css";
import "../../global.css";
import Client from "../../assets/Images/Client.png";
import Ellipse7 from "../../assets/Images/Ellipse7.png";
import Avatar from "../../assets/Images/Avatar.png";
import {useLanguage} from "../../globalContext/GlobalProvider";

function Testimonials() {
  const { data } = useLanguage();

  return (
    <Box className="testim-container">
      <Box className="testim-box">
        <h1 className="clients clr-white inter">{data[3].title}</h1>
        <p className="clients clr-white inter">
        {data[3].description}
        </p>
      </Box>
      <Box className="testim-second-box">
        <div className="testim-image-container">
          <img className="ellipse" src={Ellipse7} alt="img" />
          <img className="square-image" src={Client} alt="img" />
          <img src={Avatar} className="avatar" alt="img" />
        </div>
        <div className="client-review">
          <p className="clr-white inter clienttext">
          {data[3].platformdescription}
          </p>
          <p className="clr-white inter clientname">{data[3].clientname}</p>
          <p className="lightgray inter clientrole">
            {data[3].clientrole}
          </p>
        </div>
      </Box>
    </Box>
  );
}

export default Testimonials;
