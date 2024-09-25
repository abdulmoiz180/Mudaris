import React from "react";
import "./whatyouget.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../globalContext/GlobalProvider";

const WhatYouGet = () => {
const { language, data } = useLanguage();
if(!data)return <div> data is loading..... </div>
const pickData = data.whatyouget;

return(
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
            <img src={item.blueverifiedbadge} alt="Verified badge" className="whatyouget-verified-badge" />
            </div>
            <p className="public-sans">{item.description}</p>
            </div>
            <div className="whatyouget-card-imagecontainer">
              <img src={item.video} alt={item.role} className="imagevid"/>
              <img src={item.playbutton} alt="Play button" className="whatyouget-playbutton" />
              <p className="purple-box-text public-sans">{item.purpleboxtext}</p>
            </div>
          </div>
        ))}
      </Box>
</section>    
)



}

export default WhatYouGet