import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./courses.css";
import { Typography } from "@mui/material";
import CoursesTabs from "./TabComponent";
const Courses = () => {
  return (
    <section className="width-90 courses-section">
      <Typography className="fs-48 inter clr-white" variant="h6">
        Discover Top Course
      </Typography>
      <Box className="courses-box">
        <CoursesTabs />
      </Box>
    </section>
  );
};

export default Courses;


