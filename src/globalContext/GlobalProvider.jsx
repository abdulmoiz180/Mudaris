import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./GobalContext";

// Correct paths to JSON files after moving to public directory
const englishJson = "../../public/Constants/Seedenglish.json";
const persianJson = "../../public/Constants/Seedpersian.json";

export const useLanguage = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  // this is for nav bar...
  const handleClickOpen = () => {
    setOpen(true);
    console.log("clicked");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "english" ? "persian" : "english"));
  };

  useEffect(() => {
    const loadJsonData = async () => {
      try {
        const response = await fetch(
          language === "english" ? englishJson : persianJson
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setData(null); // Optional: handle empty state
      }
    };

    loadJsonData();
  }, [language]);

  return (
    <GlobalContext.Provider
      value={{
        toggleLanguage,
        data,
        language,
        handleClickOpen,
        handleClose,
        open,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
