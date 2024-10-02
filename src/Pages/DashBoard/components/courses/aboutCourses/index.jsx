import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; 
import './AboutCourses.css'; 
import aboutcardimg from "../../assets/images/aboutcardimg.jpg"

const earlyEducation = [
"Why is Early Education Essential"    
];

const aboutCoursetext = [
"About Course",
"Lorem Ipsum is simply dummy text of the printing and typesetting."
];
const detailblog = [
    { title: 'Duration', subtitle: '3 Year' },
    { title: 'Professor', subtitle: 'Jimmy Morris' },
    { title: 'Price', subtitle: '$ 1500' },
    { title: 'Date', subtitle: '07 August 2021' },
];

const moreDetails = [
{
title:"07",
desc:"Years"
},
{
title:"240",
desc:"Students"
},
{
title:"05",
desc:"Batches"
}
];

const courses = [
    "Our Courses",
    "Computer",
    "Programming",
    "Photoshop",
    "Management"
];

const languages = [
"Languages",
"English", 
"French",  
"Bangla",  
];

const coursesText = [
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents",
"A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."   
]

const coursesInformation = [
    
         "Courses Information",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine.",
            "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing."
        
    
];


const AboutCourses = () => {
    return (
        <div className="dc-about-container">

           {/* <div className="dc-about-page-title">
            <PageTitle activeMenu={"About Courses"} motherMenu={"Courses"} />
            </div>
             */}
            <div className="dc-about-body">

             <div className="dc-about-cards">
                <div className="dc-about-img-card">
                 <img src={aboutcardimg} alt="img"/>
                <span className='img-card-text'><h3>{earlyEducation[0]}</h3></span>
                </div>
                <div className="dc-about-course-card">
               <div className="ac-card-head">
               <h3>{aboutCoursetext[0]}</h3>
               <p>{aboutCoursetext[1]}</p>
               </div>
               <div className="ac-card-list">
               {detailblog.map((item, index)=>(
              <div className="ac-card-listitem">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
              </div>
            ))}  
            <div className="ac-card-foot">
            {moreDetails.map((item,index)=>(
            <div className="ac-card-foot-item">
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
            {coursesText.map((text, index)=>(
              <div className="cs-paragraphs">
               <p key={index}>{text}</p>
              </div>
            ))}  
            </div>
            <div className="cs-our-courses">
            <h3>{courses[0]}</h3>
            <div className="course-buttons">
            {courses.slice(1).map((course, index) => (
          <Chip className='course-outlined-button'
            key={index} 
            variant="outlined" 
            
          >
            {course}
          </Chip>
        ))}
            </div>
            </div>

            <div className="cs-language">
            <h3>{languages[0]}</h3>
            <div className="language-buttons">
            {languages.slice(1).map((lang, index) => (
          <Chip className='language-filled-button'
            key={index} 
            variant="contained" 
        
          >
            {lang}
          </Chip>
            
            ))}
            </div>
             </div>  

            <div className="cs-courses-info">
           <h3 className='primary-clr'>{coursesInformation[0]}</h3>
           <div className="courses-info-para">
            {coursesInformation.slice(1).map((ci,index) =>(
            <p className='primary-clr' key={index}>{ci}</p>                
         
            ))}
           </div>

            </div>

             
            </div>
                
            </div>
            </div>
    );
};

export default AboutCourses;
