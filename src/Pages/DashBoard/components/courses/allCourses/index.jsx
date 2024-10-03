import React, { useState } from "react";
import { Button } from "@mui/material";
import "./allcourses.css";
import heartIcon from "../../../../../../public/assets/Icons/heartIcon.png";  // default heart icon from data
import Heartfill from "../../../../../../public/assets/Icons/Heartfill.png";  // heart filled icon
import gradicon from "../../../../../../public/assets/Icons/gradicon.png"; // graduation icon
import { useNavigate } from "react-router-dom";

const coursesCards = [
  {
    cardId: 1,
    courseInfo: [
      {
        type: "header",
        img: "https://i.ytimg.com/vi/3LPJfIKxwWc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3llYo3viOLyF1FWLYmgOqiYYgqA",
        title: "CS50: Introduction to Computer Science",
      },
      { type: "details", title: "Start Date:", icon: heartIcon, subtitle: "April 23" }, // Using heartIcon from the data
      { type: "details", title: "Duration:", subtitle: "12 weeks" },
      { type: "details", title: "Professor:", subtitle: "David Malan" },
      { type: "details", icon: gradicon, title: "Students Enrolled:", subtitle: "+3000" },
      { type: "footer", title: "Read More" },
    ],
  },
  {
    cardId: 2,
    courseInfo: [
      {
        type: "header",
        img: "https://i.ytimg.com/vi/gD_HWj_hvbo/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4OgAK4CIoCDAgAEAEYEyBeKH8wDw==&rs=AOn4CLDX3YFlYzNxfuo8QTN7RdCtSk5Ecg", // Replace with actual image URL
        title: "AI for Everyone",
      },
      { type: "details", title: "Start Date:", icon: heartIcon, subtitle: "May 10" },
      { type: "details", title: "Duration:", subtitle: "4 weeks" },
      { type: "details", title: "Instructor:", subtitle: "Andrew Ng" },
      { type: "details", icon: gradicon, title: "Students Enrolled:", subtitle: "+5000" },
      { type: "footer", title: "Read More" },
    ],
  },
  {
    cardId: 3,
    courseInfo: [
      {
        type: "header",
        img: "https://i.ytimg.com/vi/fc2axTKm4ps/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqkNPUCiJiGWTjoQff_8Xt0UREmA", // Replace with actual image URL
        title: "Web Development Bootcamp",
      },
      { type: "details", title: "Start Date:", icon: heartIcon, subtitle: "June 15" },
      { type: "details", title: "Duration:", subtitle: "10 weeks" },
      { type: "details", title: "Instructor:", subtitle: "Angela Yu" },
      { type: "details", icon: gradicon, title: "Students Enrolled:", subtitle: "+2000" },
      { type: "footer", title: "Read More" },
    ],
  },
  {
    cardId: 4,
    courseInfo: [
      {
        type: "header",
        img: "https://i.ytimg.com/vi/qVOTW9kGYNM/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIHBACGAYgATgBQAE=&rs=AOn4CLB83DFmg7Sgr6QQbAvnlONaPrzDiQ", // Replace with actual image URL
        title: "Data Science Specialization",
      },
      { type: "details", title: "Start Date:", icon: heartIcon, subtitle: "July 20" },
      { type: "details", title: "Duration:", subtitle: "5 months" },
      { type: "details", title: "Instructor:", subtitle: "Johns Hopkins University" },
      { type: "details", icon: gradicon, title: "Students Enrolled:", subtitle: "+1500" },
      { type: "footer", title: "Read More" },
    ],
  },
  {
    cardId: 5,
    courseInfo: [
      {
        type: "header",
        img: "https://i.ytimg.com/vi/UjeNA_JtXME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCssJaHN3Z4WqL2Dkl1K8o_Rvn1Pg", // Replace with actual image URL
        title: "Python for Everybody",
      },
      { type: "details", title: "Start Date:", icon: heartIcon, subtitle: "August 5" },
      { type: "details", title: "Duration:", subtitle: "6 weeks" },
      { type: "details", title: "Instructor:", subtitle: "Charles Severance" },
      { type: "details", icon: gradicon, title: "Students Enrolled:", subtitle: "+4000" },
      { type: "footer", title: "Read More" },
    ],
  },
 
];

const AllCourses = () => {
  const navigate = useNavigate();
  
  // State to track liked/unliked for each card
  const [likedCards, setLikedCards] = useState({});

  // Function to toggle the heart icon
  const toggleHeart = (cardId) => {
    setLikedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId], // Toggle the liked state for the specific card
    }));
  };

  const afterClick = (segment, Idcard) => {
    navigate(`/${segment}/${Idcard}`);
  };

  return (
    <div className="allcourses-container row">
      {coursesCards.map((course) => (
        <div className="allcourses-card row" key={course.cardId}>
          {/* Header Section */}
          <div className="allcourses-header row">
            <div className="allcourses-header-img">
              <img
                className="img-five"
                src={
                  course.courseInfo.find((item) => item.type === "header").img
                }
                alt="course"
              />
            </div>
            <h3>
              {course.courseInfo.find((item) => item.type === "header").title}
            </h3>
          </div>

          <div className="allcourses-details row">
            {course.courseInfo
              .filter((item) => item.type === "details")
              .map((detail, index, detailsArray) => {
                const isFirst = index === 0;
                const isLast = index === detailsArray.length - 1;

                return (
                  <div className="detail-text row " key={index}>
                    {/* First item: Render both title (April 23) and subtitle with heart icon */}
                    {isFirst ? (
                      <>
                        {detail.title && <h4>{detail.title}</h4>}
                        <span className="detail-text-icon row">
                          <p>{detail.subtitle}</p>
                          {/* Toggle heart icon on click */}
                          <img
                            src={likedCards[course.cardId] ? Heartfill : detail.icon}
                            alt="heart icon"
                            onClick={() => toggleHeart(course.cardId)} // Handle click event
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                      </>
                    ) : isLast ? (
                      <>
                        {/* Last item: Render both title and subtitle with grad icon */}
                        <span className="detail-text-icon row">
                          <h4>{detail.title}</h4> {/* Render title */}
                          <img src={gradicon} alt="graduation icon" />
                        </span>
                        {detail.subtitle && <p>{detail.subtitle}</p>}
                      </>
                    ) : (
                      <>
                        {/* Middle items: Render normally */}
                        {detail.title && <h4>{detail.title}</h4>}
                        {detail.subtitle && <p>{detail.subtitle}</p>}
                      </>
                    )}
                  </div>
                );
              })}
          </div>

          <div className="allcourses-footer">
            <Button
              onClick={() => afterClick("dashboard/Courses/AboutCourse", course.cardId)}
              className="allcourses-button"
              variant="outlined"
            >
              {course.courseInfo.find((item) => item.type === "footer").title}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
