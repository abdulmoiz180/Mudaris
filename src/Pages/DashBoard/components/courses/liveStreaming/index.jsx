import React from 'react';
import './livestream.css';
import LandingPageVideo from "../../assets/videos/LandingPageVideo.mp4"

const livestreaminfo = [
{
title:"Lecture 1 - Introduction to Computer Science",
desc:"Computer Science"    
}
];


const Livestream = () => {
  return (
    <div className="livestream-container row">
           <div className="livestream-video-container">
        <video className='ls-vid'autoPlay muted>
          <source src={ LandingPageVideo} type="video/mp4" />
        </video>
      </div>


     
       {livestreaminfo.map((item, index)=>(
         <div className="livestream-info row" key={index}>
         <h2>{item.title}</h2>
         <p>{item.desc}</p>
        </div>
       ))}
      
    </div>
  );
};

export default Livestream;