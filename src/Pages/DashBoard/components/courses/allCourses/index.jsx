import React from 'react';
import { Button } from '@mui/material'; 
import './allcourses.css'; 
import aboutcardimg from "../../assets/images/aboutcardimg.jpg"
import heartIcon from "../../assets/icons/heartIcon.png"
import gradicon from "../../assets/icons/gradicon.png"
import { useNavigate } from "react-router-dom";


const coursesCards = [
    {
      cardId: 1,
      courseInfo: [
        { type: 'header', img:aboutcardimg, title:"Why Should You Consider Taking an Education Course?" },
        { type: 'details', title: 'April 23', icon:heartIcon, subtitle:"400"},
        { type: 'details', title: 'Duration:', subtitle: '12 months' },
        { type: 'details', title: 'Professor:', subtitle: 'Jack Ronan' },
        { type: 'details', icon:gradicon, title:'Student', subtitle: '+120' },
        { type: 'footer', title: "Read More"}
      ]
    },
    {
      cardId: 2,
      courseInfo: [
        { type: 'header', img:aboutcardimg, title: "Why Should You Consider Taking an Education Course?"},
        { type: 'details', title: 'April 23', icon:heartIcon, subtitle:"400"},
        { type: 'details', title: 'Duration:', subtitle: '12 months' },
        { type: 'details', title: 'Professor:', subtitle: 'Jack Ronan' },
        { type: 'details', icon:gradicon, title:'Student', subtitle: '+120' },
        { type: 'footer', title: "Read More"}
      ]
    },

    {
        cardId: 3,
        courseInfo: [
          { type: 'header', img:aboutcardimg, title: "Why Should You Consider Taking an Education Course?"},
          { type: 'details', title: 'April 23', icon:heartIcon, subtitle:"400"},
          { type: 'details', title: 'Duration:', subtitle: '12 months' },
          { type: 'details', title: 'Professor:', subtitle: 'Jack Ronan' },
          { type: 'details', icon:gradicon, title:'Student', subtitle: '+120' },
        
          { type: 'footer', title: "Read More" }
        ]
      },

      
      {
        cardId: 4,
        courseInfo: [
          { type: 'header', img:aboutcardimg, title: "Why Should You Consider Taking an Education Course?"},
          { type: 'details', title: 'April 23', icon:heartIcon, subtitle:"400"},
          { type: 'details', title: 'Duration:', subtitle: '12 months' },
          { type: 'details', title: 'Professor:', subtitle: 'Jack Ronan' },
          { type: 'details', icon:gradicon, title:'Student', subtitle: '+120' },
          { type: 'footer', title: "Read More" }
        ]
      },

      
      {
        cardId: 5,
        courseInfo: [
          { type: 'header', img:aboutcardimg, title: "Why Should You Consider Taking an Education Course?"},
          { type: 'details', title: 'April 23', icon:heartIcon, subtitle:"400"},
          { type: 'details', title: 'Duration:', subtitle: '12 months' },
          { type: 'details', title: 'Professor:', subtitle: 'Jack Ronan' },
          { type: 'details', icon:gradicon, title:'Student', subtitle: '+120' },
          { type: 'footer', title: "Read More"}
        ]
      },

  ];
  
const AllCourses = () => {
const navigate = useNavigate();
// const handleNavigation = () => {
// navigate("Courses/AboutCourse");
// console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");  
// }
const afterClick = (segment) => {
navigate(`/${segment}`); // Navigate to the respective route dynamically
};
return(
<div className="allcourses-container row">
  {coursesCards.map((course, cardIndex) => (
    <div className="allcourses-card row" key={course.cardId}>
      {/* Header Section */}
      <div className="allcourses-header row">
        <div className="allcourses-header-img"> 
        <img className='img-five' src={course.courseInfo.find(item => item.type === 'header').img} alt="course" />
        </div>
        <h3>{course.courseInfo.find(item => item.type === 'header').title}</h3>
        </div>



        <div className="allcourses-details row">
  {course.courseInfo
    .filter(item => item.type === 'details')
    .map((detail, index, detailsArray) => {
      const isFirst = index === 0;
      const isLast = index === detailsArray.length - 1;

      return (
       
            <div className="detail-text row " key={index}>
              
              {/* First item: Render both title (April 23) and subtitle with heart icon */}
              {isFirst ? (
                <>
                  {detail.title && <h4>{detail.title}</h4>} {/* Render title (April 23) */}
                  <span className="detail-text-icon row">
                    <p>{detail.subtitle}</p> {/* Render subtitle */}
                    <img  src={heartIcon} alt="heart icon" />
                  </span>
                </>
              ) : isLast ? (
                <>
                  {/* Last item: Render both title and subtitle with grad icon */}
                  <span className="detail-text-icon row">
                    <h4>{detail.title}</h4> {/* Render title */}
                    <img src={gradicon} alt="graduation icon" />
                  </span>
                  {detail.subtitle && <p>{detail.subtitle}</p>} {/* Render subtitle (+120) */}
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



      {/* Footer Section */}
      <div className="allcourses-footer">
        <Button onClick={()=>afterClick("dashboard/Courses/AboutCourse")} className='allcourses-button' 
        variant='outlined'
        >
        {course.courseInfo.find(item => item.type === 'footer').title}
        </Button>
      </div>
    </div>
  ))}
</div>

    
)

}

export default AllCourses



