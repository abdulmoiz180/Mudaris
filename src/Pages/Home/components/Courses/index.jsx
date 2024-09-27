import React from "react";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import Box from "@mui/material/Box";
import "./courses.css";
import TabComponent from "./TabComponent";
import { Typography } from "@mui/material";
const Courses = () => {
  const { data } = useLanguage();

  // Check if data is loaded
  if (!data) {
    console.log("data is not loading...");
    return <div>Loading...</div>; // Loading state if data isn't available
  }

  return (
    <section className="courses-section">
      <Typography
        className="fs-48 inter course-setion-title clr-white"
        variant="h6"
      >
        {data["tabsTitle"]}
      </Typography>

      <Box className="courses-box">
        <TabComponent />
      </Box>
    </section>
  );
};

export default Courses;
