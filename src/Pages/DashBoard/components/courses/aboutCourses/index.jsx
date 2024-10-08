import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import { db } from "@utils/firebase";
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

  const getFirst12Words = (text) => {
    return (
      text.split(" ").slice(0, 12).join(" ") +
      (text.split(" ").length > 12 ? "..." : "")
    );
  };

  return (
    <div className="dc-about-container">
      <div className="dc-about-body">
        <div className="dc-about-cards">
          <div className="dc-about-img-card">
            <img src={course.courseImage} alt="img" />
            <span className="img-card-text">
              <h3 className=" inter">{course.courseName}</h3>
            </span>
          </div>
          <div className="dc-about-course-card">
            <div className="ac-card-head">
              <h2 className=" inter">About Course</h2>
              <p className=" inter dark-gray">
                {getFirst12Words(course.courseDetails)}
              </p>
            </div>
            <div className="ac-card-list">
              <div className="ac-card-listitem">
                <h4 className=" inter">Duration</h4>
                <p className=" inter dark-gray">{course.courseDuration}</p>
              </div>
              <div className="ac-card-listitem">
                <h4 className=" inter">Professor</h4>
                <p className=" inter dark-gray">{course.professorName}</p>
              </div>

              <div className="ac-card-listitem">
                <h4 className=" inter">Price</h4>
                <p className=" inter dark-gray">{course.courseFee}</p>
              </div>
              <div className="ac-card-listitem">
                <h4 className=" inter">Date</h4>
                <p className=" inter dark-gray">{course.startDate}</p>
              </div>

              <div className="ac-card-foot">
                <div className="ac-card-foot-item">
                  <p className=" inter">{course.courseDuration}</p>
                </div>
                <div className="ac-card-foot-item">
                  <p className=" inter">{course.maximumStudents}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dc-about-courses-section">
          <div className="cs-text">
            <p className=" inter dark-gray">{course.courseDetails}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          handleVideocome("dashboard/Courses/courseContent", course.courseId)
        }
      >
        courseContent
      </button>
    </div>
  );
};

export default AboutCourses;
