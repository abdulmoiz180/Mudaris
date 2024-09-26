import React from "react";
import "./classes.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../globalContext/GlobalProvider";

const Classes = () => {
  const { language, data } = useLanguage();
  if (!data) return <div> data is loading..... </div>;
  const pickData = data.Class;
  const getData = data.DonotJoinCourse;
  return (
    <section className="class-container row">
      <Box className="class-head row">
        <h2 className="purple inter">{data.Duration.title}</h2>
        <p className="inter">{data.Duration.description}</p>
      </Box>
      <Box className="class-cards row">
        {pickData.map((item, index) => (
          <div key={index} className="class-card row">
            <h2 className="inter purple">{item.title}</h2>
            <p className="inter">{item.description}</p>
          </div>
        ))}
      </Box>
      <Box className="class-foot row">
        <div className="class-ft">
        <h2 className="inter purple">{getData[0].title}</h2>
        
        </div>
        <div className="listi">
        <p className="inter">{getData[0].description}</p>
        {getData.slice(1).map((item, index) => (
        <div key={index} className="class-ul">
        <li className="inter">{item.listitem}</li>  
        </div>
        ))}
        </div>
      </Box>
    </section>
  );
};

export default Classes;
