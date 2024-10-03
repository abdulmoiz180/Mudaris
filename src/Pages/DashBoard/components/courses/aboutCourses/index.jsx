import React from "react";
import { useParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { Button } from "@mui/material";
import "./AboutCourses.css";

const coursebtntext = [
"Check the Course's Content"  
]
const coursesData = [
  {
    courseId: 1,
    img: "https://i.ytimg.com/vi/3LPJfIKxwWc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3llYo3viOLyF1FWLYmgOqiYYgqA",
    earlyEducation: ["Why is Computer Science Important"],
    aboutCoursetext: [
      "About Course",
      "CS50: Introduction to Computer Science",
      "This course provides a broad and rigorous introduction to computer science, teaching the foundations of programming, algorithms, and data structures. Students will learn how to think algorithmically and solve problems efficiently, using C, Python, SQL, and web programming languages.",
    ],
    detailblog: [
      { title: "Start Date", subtitle: "April 23" },
      { title: "Duration", subtitle: "12 weeks" },
      { title: "Professor", subtitle: "David Malan" },
      { title: "Students Enrolled", subtitle: "3,000+" },
    ],
    moreDetails: [
      { title: "12", desc: "Weeks" },
      { title: "3000+", desc: "Students" },
      { title: "01", desc: "Batch" },
    ],
    courses: [
      "Our Courses",
      "Computer Science",
      "Programming",
      "Web Development",
      "Data Structures",
    ],
    languages: ["Languages", "English", "French", "Spanish"],
    coursesText: [
      "Computer Science is a rapidly evolving field that is the backbone of today's digital economy. Through this course, students gain the skills needed to solve complex problems and create innovative software solutions.",
      "This course covers programming languages like C, Python, and SQL, along with web technologies like HTML, CSS, and JavaScript.",
      "Students will work on practical projects, build their problem-solving skills, and gain an understanding of algorithms and data structures critical for software development.",
      "The course also touches on modern topics like cybersecurity and artificial intelligence.",
    ],
    coursesInformation: [
      "Courses Information",
      "The course is structured in a way that challenges students to apply their learning through weekly problem sets, projects, and interactive lectures.",
      "It is suitable for both beginners and experienced programmers, providing a robust foundation for further study in software development and computer science.",
    ],
  },
  {
    courseId: 2,
    img: "https://i.ytimg.com/vi/gD_HWj_hvbo/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4OgAK4CIoCDAgAEAEYEyBeKH8wDw==&rs=AOn4CLDX3YFlYzNxfuo8QTN7RdCtSk5Ecg",
    earlyEducation: ["Why Study Artificial Intelligence"],
    aboutCoursetext: [
      "About Course",
      "AI for Everyone",
      "Artificial Intelligence is transforming industries and changing the way we live and work. This course offers an accessible introduction to AI and machine learning concepts, equipping students with the knowledge needed to understand and leverage AI tools and technologies.",
    ],
    detailblog: [
      { title: "Start Date", subtitle: "May 10" },
      { title: "Duration", subtitle: "4 weeks" },
      { title: "Professor", subtitle: "Andrew Ng" },
      { title: "Students Enrolled", subtitle: "5,000+" },
    ],
    moreDetails: [
      { title: "04", desc: "Weeks" },
      { title: "5000+", desc: "Students" },
      { title: "02", desc: "Batches" },
    ],
    courses: [
      "Our Courses",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Neural Networks",
    ],
    languages: ["Languages", "English", "Chinese", "Hindi"],
    coursesText: [
      "Artificial Intelligence (AI) is at the core of modern technological advancements. From autonomous cars to virtual assistants, AI is shaping the future.",
      "This course covers the basics of machine learning, neural networks, and deep learning, allowing students to grasp the core concepts that power AI technologies.",
      "Students will explore real-world applications of AI, including natural language processing, image recognition, and decision-making systems.",
      "Led by Andrew Ng, this course makes AI accessible to everyone, with no prior coding experience required.",
    ],
    coursesInformation: [
      "Courses Information",
      "The course offers video lectures, hands-on exercises, and quizzes to ensure students fully understand the material. By the end of the course, students will be able to discuss and implement basic AI solutions.",
    ],
  },
  {
    courseId: 3,
    img: "https://i.ytimg.com/vi/fc2axTKm4ps/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqkNPUCiJiGWTjoQff_8Xt0UREmA", // Replace with actual image URL
    earlyEducation: ["Why Learn Web Development"],
    aboutCoursetext: [
      "About Course",
      "Full-Stack Web Development",
      "This comprehensive course takes students from beginner to advanced levels in web development, teaching them how to build dynamic, responsive websites and web applications using HTML, CSS, JavaScript, React, and Node.js.",
    ],
    detailblog: [
      { title: "Start Date", subtitle: "June 15" },
      { title: "Duration", subtitle: "16 weeks" },
      { title: "Professor", subtitle: "Colt Steele" },
      { title: "Students Enrolled", subtitle: "8,000+" },
    ],
    moreDetails: [
      { title: "16", desc: "Weeks" },
      { title: "8000+", desc: "Students" },
      { title: "05", desc: "Batches" },
    ],
    courses: ["Our Courses", "HTML/CSS", "JavaScript", "React.js", "Node.js"],
    languages: ["Languages", "English", "German", "Spanish"],
    coursesText: [
      "Web development skills are highly in demand as businesses move towards digital transformation.",
      "In this course, students will learn how to build visually appealing, functional websites, mastering front-end and back-end technologies.",
      "The course covers the core technologies like HTML5, CSS3, and JavaScript, along with modern libraries and frameworks such as React for building interactive web interfaces, and Node.js for creating back-end services.",
      "Students will work on real-world projects, gaining practical experience in full-stack development.",
    ],
    coursesInformation: [
      "Courses Information",
      "This course is ideal for anyone looking to start a career in web development or improve their existing skills. It provides a complete learning path, from basic front-end design to advanced server-side development.",
    ],
  },
  {
    courseId: 4,
    img: "https://i.ytimg.com/vi/qVOTW9kGYNM/hq720.jpg?sqp=-oaymwEpCNAFEJQDSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIHBACGAYgATgBQAE=&rs=AOn4CLB83DFmg7Sgr6QQbAvnlONaPrzDiQ", // Replace with actual image URL
    earlyEducation: ["Why Data Science Matters"],
    aboutCoursetext: [
      "About Course",
      "Data Science for Beginners",
      "Data Science is one of the most sought-after skills today. This course teaches the basics of data analysis, manipulation, and visualization, using tools like Python, SQL, and Tableau.",
    ],
    detailblog: [
      { title: "Start Date", subtitle: "July 20" },
      { title: "Duration", subtitle: "8 weeks" },
      { title: "Professor", subtitle: "Kaggle Expert" },
      { title: "Students Enrolled", subtitle: "6,000+" },
    ],
    moreDetails: [
      { title: "08", desc: "Weeks" },
      { title: "6000+", desc: "Students" },
      { title: "03", desc: "Batches" },
    ],
    courses: [
      "Our Courses",
      "Python",
      "Statistics",
      "Machine Learning",
      "Data Visualization",
    ],
    languages: ["Languages", "English", "Spanish", "Japanese"],
    coursesText: [
      "Data Science involves using data to drive decision-making, uncover insights, and predict future trends.",
      "In this course, students will learn how to collect, clean, and analyze data using Python and tools like Pandas, NumPy, and Matplotlib.",
      "They will also explore machine learning algorithms to create predictive models and visualizations to present their findings.",
      "By the end of this course, students will be well-equipped with the skills needed to begin a career in data science.",
    ],
    coursesInformation: [
      "Courses Information",
      "This course is suitable for anyone with a curiosity about data. It starts with the basics and progresses to more advanced techniques, making it ideal for beginners as well as those looking to sharpen their skills.",
    ],
  },
  {
    courseId: 5,
    earlyEducation: ["Why Digital Marketing is Critical"],
    img: "https://i.ytimg.com/vi/UjeNA_JtXME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCssJaHN3Z4WqL2Dkl1K8o_Rvn1Pg", // Replace with actual image URL
    aboutCoursetext: [
      "About Course",
      "Digital Marketing Masterclass",
      "Learn the essential strategies and tools for digital marketing in this comprehensive course, covering SEO, content marketing, social media advertising, and analytics.",
    ],
    detailblog: [
      { title: "Start Date", subtitle: "August 30" },
      { title: "Duration", subtitle: "10 weeks" },
      { title: "Professor", subtitle: "Neil Patel" },
      { title: "Students Enrolled", subtitle: "4,500+" },
    ],
    moreDetails: [
      { title: "10", desc: "Weeks" },
      { title: "4500+", desc: "Students" },
      { title: "04", desc: "Batches" },
    ],
    courses: [
      "Our Courses",
      "SEO",
      "Content Marketing",
      "Social Media Advertising",
      "Email Marketing",
    ],
    languages: ["Languages", "English", "Portuguese", "Italian"],
    coursesText: [
      "Digital Marketing is a vital part of modern business, helping companies reach larger audiences and grow their brands.",
      "This course covers the key elements of successful digital marketing campaigns, including search engine optimization (SEO), content creation, and social media marketing strategies.",
      "Students will learn how to optimize websites for search engines, create compelling content, and leverage social media platforms for targeted advertising.",
      "By the end of the course, students will be able to develop and implement digital marketing strategies that drive results.",
    ],
    coursesInformation: [
      "Courses Information",
      "This course provides a complete overview of digital marketing, offering hands-on experience with tools like Google Analytics, SEO platforms, and content management systems. Ideal for aspiring marketers and business owners alike.",
    ],
  },
];

const AboutCourses = () => {
  console.log("hello");
  const { courseId } = useParams(); // Get the courseId from the URL params
  const course = coursesData.find((c) => c.courseId === parseInt(courseId));
  console.log(course);
  if (!course) {
    return <div>Course not found!</div>;
    console.log("ye mil kr ham ko pagal bna rhy hain");
  }
  return (
    <div className="dc-about-container">
      <div className="dc-about-body">
        <div className="dc-about-cards">
          <div className="dc-about-img-card">
            <img src={course.img} alt="img" />
            <span className="img-card-text">
              <h3>{course.earlyEducation[0]}</h3>
            </span>
          </div>
          <div className="dc-about-course-card">
            <div className="ac-card-head">
              <h3>{course.aboutCoursetext[0]}</h3>
              <p>{course.aboutCoursetext[1]}</p>
            </div>
            <div className="ac-card-list">
              {course.detailblog.map((item, index) => (
                <div className="ac-card-listitem" key={index}>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              ))}
              <div className="ac-card-foot">
                {course.moreDetails.map((item, index) => (
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
            {course.coursesText.map((text, index) => (
              <div className="cs-paragraphs" key={index}>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="cs-our-courses">
            <h3>{course.courses[0]}</h3>
            <div className="course-buttons">
              {course.courses.slice(1).map((course, index) => (
                <Chip
                  className="course-outlined-button"
                  key={index}
                  variant="outlined"
                  label= {course}
                >
                  
                </Chip>
              ))}
            </div>
          </div>

          <div className="cs-language">
            <h3>{course.languages[0]}</h3>
            <div className="language-buttons">
              {course.languages.slice(1).map((lang, index) => (
                <Chip
                  className="language-filled-button"
                  key={index}
                  variant="contained"
                  label= {lang}
                >
          
                </Chip>
              ))}
            </div>
          </div>

          <div className="cs-courses-info">
            <h3 className="primary-clr">{course.coursesInformation[0]}</h3>
            <div className="courses-info-para">
              {course.coursesInformation.slice(1).map((ci, index) => (
                <p className="primary-clr" key={index}>
                  {ci}
                </p>
              ))}
            </div>
            <div className="courses-info-btn">
                <Button
                variant="contained"
                className="ci-btn" 
               >
                <p className="ci-btn-text">{coursebtntext}</p>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourses;
