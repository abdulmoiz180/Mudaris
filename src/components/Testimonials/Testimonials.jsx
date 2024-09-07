import * as React from "react";
import Box from "@mui/material/Box";
import "./Testimonials.css";
import "../../global.css";
import Client from "../../assets/Images/Client.png";
import Ellipse7 from "../../assets/Images/Ellipse7.png";
import Avatar from "../../assets/Images/Avatar.png";

function Testimonials() {
  return (
    <Box className="container">
      <Box className="box1">
        <h1 className="clients clr-white inter">Our Clients</h1>
        <p className="clients clr-white inter">
          Empowering top companies and institutions with innovative learning
          solutions.
        </p>
      </Box>
      <Box className="box2">
        <div className="image-container">
          <img className="ellipse" src={Ellipse7} alt="img" />
          <img className="square-image" src={Client} alt="img" />
          <img src={Avatar} className="avatar" alt="img" />
        </div>
        <div className="client-review">
          <p className="clr-white inter clienttext">
            This platform has revolutionized our training programs. The results
            speak for themselves!
          </p>
          <p className="clr-white inter clientname">Talia Taylor</p>
          <p className="lightgray inter clientrole">
            John Doe, CEO of @ Quantum
          </p>
        </div>
      </Box>
    </Box>
  );
}

export default Testimonials;
