import React from "react";
import "./participate.css";
import { Box } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import participateimg from "../../../../assets/Images/participateimg.png";
import parimg from "../../../../assets/Images/parimg.png";
import Play from "../../../../assets/Icons/play.svg";

const Participate = () => {
  const { language, data } = useLanguage();
  if (!data) return <div> data is loading..... </div>;

  // Dynamically set the font based on the language
  const fontClass = language === "persian" ? "rubik" : "";

  return (
    <section className="participate-container row">
      <Box className="participate-heading center">
        <h2 className={`inter ${fontClass}`}>How to Participate in This Course</h2>
      </Box>
      <Box className="participate-cards row">
        <div className="participate-card  row">
          <div className="participate-card-title row">
            <h2 className={`card-title-number purple barlow ${fontClass}`}>01</h2>
            <span className="p-card-heading">
              <h2 className={`card-title-name purple ${fontClass}`}>
                Course Registration
              </h2>
            </span>
          </div>
          <p className={fontClass}>
            Once the registration deadline passes, you’ll be placed in an
            exclusive group of like-minded participants known as the "1% Group."
            This group will serve as your community throughout the course. You
            will be informed about all upcoming details within this group.
          </p>
        </div>
        <div className="participate-card">
          <img className="participate-img" src={participateimg} alt="" />
        </div>

        <div className="participate-card  row">
          <div className="participate-card-title row">
            <h2 className={`card-title-number purple barlow ${fontClass}`}>02</h2>
            <span className="p-card-heading">
              <h2 className={`card-title-name purple ${fontClass}`}>
                Live Classes with Dr. Modares
              </h2>
            </span>
          </div>
          <p className={fontClass}>
            Classes will be held live and online with the guidance of Dr.
            Modares. You can access them through either a laptop or mobile
            phone. There will be 31 sessions over 10 weeks and 1 day, with
            classes 5 days a week. It’s essential to have a stable internet
            connection for at least half the course duration to ensure smooth
            access.
          </p>
        </div>
        <div className="participate-card row">
          <div className="participate-card-title row">
            <h2 className={`card-title-number purple barlow ${fontClass}`}>03</h2>
            <span className="p-card-heading">
              <h2 className={`card-title-name purple ${fontClass}`}>Requirements</h2>{" "}
            </span>
          </div>
          <p className={fontClass}>
            To attend, no prior knowledge or expertise is required. However,
            having the following can be beneficial:
          </p>
          <ul className="participate-li">
            <li className={`inter ${fontClass}`}>
              English language skills (though it’s not mandatory as the course
              will mostly be in Persian)
            </li>
            <li className={`inter ${fontClass}`}>Entrepreneurial mindset</li>
            <li className={`inter ${fontClass}`}>
              Basic understanding of the digital age, economics, and finance
            </li>
            <li className={`inter ${fontClass}`}>
              Familiarity with basic computer programs
            </li>
            <li className={`inter ${fontClass}`}>
              Strong analytical and creative thinking
            </li>
            <li className={`inter ${fontClass}`}>
              Commitment, perseverance, and dedication to learning
            </li>
          </ul>
        </div>
      </Box>
      <div className="laptopimage-container">
        <span className="par-play-wrapper">
          <img src={Play} className="par-icon" alt="icon" />
        </span>

        <img src={parimg} className="par-img" />
      </div>
    </section>
  );
};

export default Participate;
