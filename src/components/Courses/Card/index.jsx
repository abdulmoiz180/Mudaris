// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import videoIcon from "../../../assets/Icons/videoIcon.png";
// import heartIcon from "../../../assets/Icons/heartIcon.png";
// import clockIcon from "../../../assets/Icons/clockIcon.png";
// import certificateIcon from "../../../assets/Icons/certificateIcon.png";

// import "./courseCard.css";
// const Cards = (props) => {
//   const {
//     courseTitle,
//     courseRating,
//     courseReviews,
//     OriginalPrice,
//     DiscountedPrice,
//     courseTag,
//     courseDiscount,
//     videos,
//     duration,
//     profileImage,
//     rateStar = [],
//   } = props;

//   return (
//     <Card sx={{ maxWidth: 345 }} className="courses-card column">
//       <CardMedia
//         component="img"
//         height="150"
//         image={profileImage}
//         className="course-card-img"
//         alt="images"
//       />
//       <CardContent>
//         <Typography
//           gutterBottom
//           variant="h5"
//           component="div"
//           className="course-card-title clr-white"
//         >
//           {courseTitle}
//         </Typography>
//         <div className="course-review-container flex flex-center gap-5 space-between">
//           <div className="flex flex-center gap-5 mt-10">
//             <span className="flex">
//               {rateStar.map((star, index) => (
//                 <img key={index} src={star} alt="star rating" />
//               ))}
//             </span>
//             <Typography variant="body1" className="dark-gray">
//               ({courseReviews})
//             </Typography>
//           </div>

//           <Typography variant="body1" className="clr-white">
//             {courseRating}
//           </Typography>
//         </div>
//         <div className="flex flex-center gap-5 mt-10">
//           <Typography variant="body1" className="clr-white">
//             {OriginalPrice}
//           </Typography>
//           <Typography variant="body1" className="dark-gray line-through">
//             {DiscountedPrice}
//           </Typography>
//         </div>
//         <div className=" course-icon-container mt-10">
//           <div className="flex gap-5">
//             <span className="flex flex-center gap-5">
//               <img src={videoIcon} alt="" />
//               <p className="dark-gray">{videos}</p>
//             </span>
//             <span className="flex flex-center gap-5">
//               <img src={clockIcon} alt="" />
//               <p className="dark-gray">{duration}</p>
//             </span>
//             <span className="flex flex-center gap-5">
//               <img src={certificateIcon} alt="" />
//             </span>
//           </div>

//           <span className="flex flex-center gap-5">
//             <img src={heartIcon} alt="" />
//           </span>
//         </div>
//         <div className="flex flex-center gap-5 mt-10">
//           {courseTag && <img src={courseTag} alt="" className="label-img" />}
//           <span className="clr-white discount-tag inter">{courseDiscount}</span>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Cards;
