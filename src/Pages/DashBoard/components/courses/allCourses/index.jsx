import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./allcourses.css";
import heartIcon from "../../assets/icons/heartIcon.png";
import gradicon from "../../assets/icons/gradicon.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@utils/firebase"; //
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const afterClick = (segment, Idcard) => {
    navigate(`/${segment}/${Idcard}`);
  };
  const fetchCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id, // Include Firestore document ID
      }));
      setCourses(coursesData); // Set fetched data to state
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  useEffect(() => {
    fetchCourses(); // Fetch courses when component mounts
  }, []);

  return (
    <div className="allcourses-container row">
      {courses.map((course) => (
        <div className="allcourses-card row" key={course.id}>
          {/* Header Section */}
          <div className="allcourses-header row">
            <div className="allcourses-header-img">
              <img
                className="img-five"
                src={course.courseImage || "default-image-path"} // Default image if none is available
                alt="course"
              />
            </div>
            <h3>{course.courseName}</h3>
          </div>

          <div className="allcourses-details row">
            <div className="detail-text row">
              <h4>{course.startDate}</h4>
              <span className="detail-text-icon row">
                <p>{course.courseDetails}</p>
                <img src={heartIcon} alt="heart icon" />
              </span>
            </div>
            <div className="detail-text row">
              <span className="detail-text-icon row">
                <h4>{course.courseFee}</h4>
                <img src={gradicon} alt="graduation icon" />
              </span>
              <p>{`Max Students: ${course.maximumStudents}`}</p>
            </div>
          </div>

          <div className="allcourses-footer">
            <Button
              onClick={() =>
                afterClick("dashboard/Courses/AboutCourse", course.id)
              }
              className="allcourses-button"
              variant="outlined"
            >
              Learn More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
