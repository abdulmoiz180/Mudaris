import React, { useState } from "react";

import Box from "@mui/material/Box";
import "./courses.css";
import { Typography } from "@mui/material";
import CoursesTabs from "./TabComponent";
const Courses = () => {
  return (
    <section className="courses-section">
      <Typography className="fs-48 inter course-setion-title  clr-white" variant="h6">
        Discover Top Course
      </Typography>
      <Box className="courses-box">
        <CoursesTabs />
      </Box>
    </section>
  );
};

export default Courses;


