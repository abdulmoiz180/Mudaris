import React, { useState } from "react";
import "./CourseCardMenu.css";
import { useLanguage } from "../../../../../globalContext/GlobalProvider";
import Box from "@mui/material/Box"; // Assuming you're using MUI's Box component
import IconButton from "@mui/material/IconButton"; // For the dropdown button
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Dropdown icon

export const MenuSide = () => {
  const { language, data } = useLanguage();
  const [openMenu, setOpenMenu] = useState({}); // To track open/closed state of each menu section

  if (!data) return <div>Data is loading.....</div>;

  const handleToggle = (index) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the current section's visibility
    }));
  };

  return (
    <section className="CourseCardMenuBarLeft">
      {data.DataScienceCourseCardsSectionMenuBarSide.map((menu, index) => (
        <Box key={index} className="menu-section">
          {menu.title ? (
            <div className="menu-header" onClick={() => handleToggle(index)}>
              <p className="menu-title dm-sans">{menu.title}</p>
              <IconButton size="small">
                <ExpandMoreIcon
                  className={openMenu[index] ? "rotate-icon" : ""}
                />
              </IconButton>
            </div>
          ) : null}

          {openMenu[index] || !menu.title ? (
            <div className="menu-items">
              {Object.keys(menu).map((key) => {
                if (key === "title") return null; // Skip 'title' key
                return (
                  <label key={key} className="menu-item">
                    <input type="checkbox" /> {/* Add your checkbox */}
                    <span className="menu-bar-CoursesCardSection dm-sans">
                      {menu[key]}
                    </span>{" "}
                    {/* Display the option text */}
                  </label>
                );
              })}
            </div>
          ) : null}
        </Box>
      ))}
    </section>
  );
};
