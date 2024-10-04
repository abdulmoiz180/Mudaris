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

  const getFirst12Words = (text) => {
    return text.split(' ').slice(0, 12).join(' ') + (text.split(' ').length > 12 ? '...' : '');
  };

  return (
    <div className="dc-about-container">
      <div className="dc-about-body">
        <div className="dc-about-cards">
          <div className="dc-about-img-card">
            <img src={course.courseImage} alt="img" />
            <span className="img-card-text">
              <h3 className=" inter" >{course.courseName
              }</h3>
            </span>
          </div>
          <div className="dc-about-course-card">
            <div className="ac-card-head">
            <h2 className=" inter" >About Course</h2>
            <p className=" inter dark-gray" >{getFirst12Words(course.courseDetails)}</p>
            </div>
            <div className="ac-card-list">
                    <div className="ac-card-listitem">
                    <h4 className=" inter" >Duration</h4>
                    <p className=" inter dark-gray">{course.courseDuration}</p>
                    </div>
                    <div className="ac-card-listitem"> 
                    <h4 className=" inter" >Professor</h4>  
                    <p className=" inter dark-gray">{course.professorName}</p>
                    </div>
                 
                  
                  <div className="ac-card-listitem"> 
                  <h4 className=" inter" >Price</h4>
                  <p className=" inter dark-gray" >{course.courseFee}</p>
                  </div>
                  <div className="ac-card-listitem">
                  <h4 className=" inter" >Date</h4> 
                  <p className=" inter dark-gray">{course.startDate}</p>
                  </div>
                 
                   
                  
             
              <div className="ac-card-foot">
               
                    <div className="ac-card-foot-item">
                      <p className=" inter" >{course.courseDuration}</p>
                      </div>
                      <div className="ac-card-foot-item">
                      <p className=" inter" >{course.maximumStudents}</p>
                    </div>
                 
              </div>
            </div>
          </div>
        </div>

        <div className="dc-about-courses-section">
          <div className="cs-text">
            <p className=" inter dark-gray" >{course.courseDetails
            }</p>
             
          </div>

          {/* <div className="cs-our-courses">
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
          </div> */}

          {/* <div className="cs-language">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutCourses;
