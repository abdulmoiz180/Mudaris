import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { db } from "@utils/firebase";
import { Chip } from "@mui/material";
import "./AboutCourses.css";

const AboutCourses = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { courseId } = useParams(); // Get the courseId from the URL params
  // Function to fetch the course from Firestore by ID
  const fetchCourse = async (id) => {
    try {
      const docRef = doc(db, "courses", id); // Reference to the course document
      const docSnap = await getDoc(docRef); // Fetch the document

      if (docSnap.exists()) {
        setCourse(docSnap.data()); // Set course data to state
      } else {
        console.log("No such course!");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  console.log(course);
  useEffect(() => {
    if (courseId) {
      fetchCourse(courseId); // Fetch course when component mounts
    }
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!course) {
    return <div>Course not found!</div>; // If no course is found
  }

  return (
    <div className="dc-about-container">
      <div className="dc-about-body">
        <div className="dc-about-cards">
          <div className="dc-about-img-card">
            <img src={course.courseImage || "default-image-path"} alt="img" />{" "}
            <span className="img-card-text">
              <h3>{course.earlyEducation && course.earlyEducation[0]}</h3>
            </span>
          </div>
          <div className="dc-about-course-card">
            <div className="ac-card-head">
              {/* <h3>{course.aboutCoursetext && course.aboutCoursetext[0]}</h3> */}
              <p>{course.details}</p>
            </div>
            <div className="ac-card-list">
              {course.detailblog &&
                course.detailblog.map((item, index) => (
                  <div className="ac-card-listitem" key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              <div className="ac-card-foot">
                {course.moreDetails &&
                  course.moreDetails.map((item, index) => (
                    <div className="ac-card-foot-item" key={index}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dc-about-courses-section">
          <div className="cs-text">
            {course.coursesText &&
              course.coursesText.map((text, index) => (
                <div className="cs-paragraphs" key={index}>
                  <p>{text}</p>
                </div>
              ))}
          </div>

          <div className="cs-our-courses">
            <h3>{course.courses && course.courses[0]}</h3>
            <div className="course-buttons">
              {course.courses &&
                course.courses.slice(1).map((course, index) => (
                  <Chip
                    className="course-outlined-button"
                    key={index}
                    variant="outlined"
                  >
                    {course}
                  </Chip>
                ))}
            </div>
          </div>

          <div className="cs-language">
            <h3>{course.languages && course.languages[0]}</h3>
            <div className="language-buttons">
              {course.languages &&
                course.languages.slice(1).map((lang, index) => (
                  <Chip
                    className="language-filled-button"
                    key={index}
                    variant="contained"
                  >
                    {lang}
                  </Chip>
                ))}
            </div>
          </div>

          <div className="cs-courses-info">
            <h3 className="primary-clr">
              {course.coursesInformation && course.coursesInformation[0]}
            </h3>
            <div className="courses-info-para">
              {course.coursesInformation &&
                course.coursesInformation.slice(1).map((ci, index) => (
                  <p className="primary-clr" key={index}>
                    {ci}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourses;
