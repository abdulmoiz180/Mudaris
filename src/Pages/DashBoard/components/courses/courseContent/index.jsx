import React, { useState, useEffect, useRef } from "react";
import "./courseContent.css";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CourseData from './courses.json'
export const CourseContent = () => {
  const { courseId } = useParams(); // Get the courseId from URL parameters
  const playlistvideoref = useRef(null);

  // State to hold the selected course data and other details
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [firstVideo, setFirstVideo] = useState("");
  const [mainvideoTitle, setMainVideoTitle] = useState("");

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(CourseData); // Replace with your API endpoint
        const data = await response.json();
        const course = data.find((course) => course.courseId === parseInt(courseId));
        setSelectedCourse(course);

        // Set the first video and its title if available
        if (course && course.videos.length > 0) {
          setFirstVideo(course.videos[0].src);
          setMainVideoTitle(course.videos[0].title);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [courseId]); // Dependency on courseId to refetch data when route changes

  // Function to handle changing the main video
  const handleChangingMainVideo = (videoLink, title) => {
    setFirstVideo(videoLink);
    setMainVideoTitle(title);
  };

  // If no course is found, display a message
  if (!selectedCourse) {
    return <div>Course not found!</div>;
  }

  return (
    <section className="courseContentinDashboard clr-white">
      <Box className="videoContentDashboard">
        <h1 className="inter">{selectedCourse.courseName}</h1>
        <Box className="videoContentOnly">
          {firstVideo ? (
            <Box>
              <h2>{mainvideoTitle}</h2>
              <iframe
                width="900"
                height="515"
                src={firstVideo}
                title="Course Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          ) : (
            <p>No videos available for this course.</p>
          )}
          <div className="videoList">
            {selectedCourse.videos.map((video) => (
              <Box key={video.id} className="VideoPlayListSmallSize">
                <h3>{video.title}</h3>
                <Box
                  onClick={() => handleChangingMainVideo(video.src, video.title)}
                  className="PlayListIndividualVideo"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.src.split("/embed/")[1]}/0.jpg`}
                    alt={video.title}
                    width="200"
                    height="155"
                    ref={playlistvideoref}
                  />
                </Box>
              </Box>
            ))}
          </div>
        </Box>
      </Box>
    </section>
  );
};
