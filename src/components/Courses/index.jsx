import React from "react";
import { useLanguage } from "../../globalContext/GlobalProvider";
import Box from "@mui/material/Box";
import "./courses.css";
import { Typography } from "@mui/material";
import { TabComponent } from "./TabComponent";

const Courses = () => {
  const { data } = useLanguage();

  return (
    <section className="courses-section">
      <Typography
        className="fs-48 inter course-setion-title  clr-white"
        variant="h6"
      >
        {data[14]}
      </Typography>
      <Box className="courses-box">
        <TabComponent />
      </Box>
    </section>
  );
};

export default Courses;
