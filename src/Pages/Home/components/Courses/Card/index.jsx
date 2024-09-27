import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import videoIcon from "../../../../../assets/Icons/videoIcon.png";
import heartIcon from "../../../../../assets/Icons/heartIcon.png";
import clockIcon from "../../../../../assets/Icons/clockIcon.png";
import certificateIcon from "../../../../../assets/Icons/certificateIcon.png";
import { useLanguage } from "../../../../../globalContext/GlobalProvider";
import "./courseCard.css";

const Cards = () => {
  const { data } = useLanguage();

  if (!data || !data.tabs || data.tabs.length < 2) {
    console.log("Data is not loading or there are not enough tabs");
    return <div>Data is loading...</div>;
  }

  // Access the second tab (index 1)
  const selectedTab = data.tabs[1];

  if (!selectedTab.courses || selectedTab.courses.length === 0) {
    console.log("No courses found in the selected tab");
    return <div>No courses available</div>;
  }

  // Extract the title of the first course - adjust index as needed
  const firstCourseTitle = selectedTab.courses[0].courseTitle;

  return (
    <div>
      {selectedTab.courses.map((course, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345 }}
          className="courses-card column"
        >
          <CardMedia
            component="img"
            height="150"
            image={course.profileImage}
            className="course-card-img"
            alt="course image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="course-card-title clr-white"
            >
              {course.courseTitle}
            </Typography>
            <div className="course-review-container flex flex-center gap-5 space-between">
              <div className="flex flex-center gap-5 mt-10">
                <span className="flex">
                  {course.rateStar.map((star, index) => (
                    <img key={index} src={star} alt="star rating" />
                  ))}
                </span>
                <Typography variant="body1" className="dark-gray">
                  ({course.reviews})
                </Typography>
              </div>
              <Typography variant="body1" className="clr-white">
                {course.rating}
              </Typography>
            </div>
            <div className="flex flex-center gap-5 mt-10">
              <Typography variant="body1" className="clr-white">
                {course.originalPrice}
              </Typography>
              <Typography variant="body1" className="dark-gray line-through">
                {course.discountedPrice}
              </Typography>
            </div>
            <div className="course-icon-container mt-10">
              <div className="flex gap-5">
                <span className="flex flex-center gap-5">
                  <img src={videoIcon} alt="" />
                  <p className="dark-gray">{course.videos}</p>
                </span>
                <span className="flex flex-center gap-5">
                  <img src={clockIcon} alt="" />
                  <p className="dark-gray">{course.duration}</p>
                </span>
                <span className="flex flex-center gap-5">
                  <img src={certificateIcon} alt="" />
                </span>
              </div>
              <span className="flex flex-center gap-5">
                <img src={heartIcon} alt="" />
              </span>
            </div>
            <div className="flex flex-center gap-5 mt-10">
              {course.tag && (
                <img src={course.tag} alt="" className="label-img" />
              )}
              <span className="clr-white discount-tag inter">
                {course.discount}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
