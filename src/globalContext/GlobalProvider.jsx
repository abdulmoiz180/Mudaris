import React, { useState } from "react";
import { GlobalContext } from "./GobalContext";
import { tabsEnglish } from "../Constants/CourseTabs";
import { tabsPersian } from "../Constants/CourseTabsPersian";

const GlobalProvider = (props) => {
  const EnglishTab = tabsEnglish;
  const PersianTab = tabsPersian;

  // State to track current language tab
  const [courseTab, setCourseTab] = useState(EnglishTab);

  // Function to toggle between English and Persian
  const toggleLanguage = () => {
    setCourseTab((prevTab) =>
      prevTab === EnglishTab ? PersianTab : EnglishTab
    );
  };

  return (
    <GlobalContext.Provider value={{ courseTab, toggleLanguage }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
