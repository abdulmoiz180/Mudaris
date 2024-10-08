import React, { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material"; // Import loader component
import "./allcourses.css";
import heartIcon from "../../assets/icons/heartIcon.png";
import gradicon from "../../assets/icons/gradicon.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@utils/firebase";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State for loader
  const navigate = useNavigate();

  const afterClick = (segment, Idcard) => {
    navigate(`/${segment}/${Idcard}`);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="allcourses-container row">
      {loading ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : (
        courses.map((course) => (
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
              <div className="details-box">
                <h3 className="dm-sans fs-30">{course.courseName}</h3>
                <p className="inter">
                  {truncateParagraph(course.courseDetails, 15)}
                </p>
              </div>
            </div>
            <div className="allcourses-details row">
              <div className="detail-text row">
                <h3 className="dm-sans fs-18">Fee</h3>
                <p className="inter">{course.courseFee}</p>
              </div>

              <div className="detail-text row">
                <h3 className="dm-sans fs-18">Students</h3>
                <p className="inter">{course.maximumStudents}</p>
              </div>
            </div>

            <div className="allcourses-footer">
              <Button
                onClick={() =>
                  afterClick("/dashboard/Courses/AboutCourse", course.id)
                }
                className="allcourses-button"
                variant="outlined"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllCourses;

const truncateParagraph = (paragraph, maxWords) => {
  const words = paragraph.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return paragraph;
};
