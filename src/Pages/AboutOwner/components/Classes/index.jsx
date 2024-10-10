import React from "react";
import "./classes.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";

const Classes = () => {
  const { language, data } = useLanguage(); // Get language in addition to data
  if (!data) return <div> data is loading..... </div>;
  
  // Dynamically set the font based on the language
  const fontClass = language === "persian" ? "rubik" : "";
  
  const pickData = data.Class;
  const getData = data.DonotJoinCourse;
  
  return (
    <section className="class-container row">
      <Box className="class-head row">
        <h2 className={`purple inter ${fontClass}`}>{data.Duration.title}</h2>
        <p className={`inter ${fontClass}`}>{data.Duration.description}</p>
      </Box>
      <Box className="class-cards row">
        {pickData.map((item, index) => (
          <div key={index} className="class-card row">
            <h2 className={`inter purple ${fontClass}`}>{item.title}</h2>
            <p className={`inter ${fontClass}`}>{item.description}</p>
          </div>
        ))}
      </Box>
      <Box className="class-foot row">
        <div className="class-ft">
          <h2 className={`inter purple ${fontClass}`}>{getData[0].title}</h2>
        </div>
        <div className="listi">
          <p className={`inter ${fontClass}`}>{getData[0].description}</p>
          {getData.slice(1).map((item, index) => (
            <div key={index} className="class-ul">
              <li className={`inter ${fontClass}`}>{item.listitem}</li>
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
};

export default Classes;
