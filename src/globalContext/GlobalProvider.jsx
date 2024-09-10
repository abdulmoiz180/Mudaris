import React, { useState, useContext } from "react";
import { GlobalContext } from "./GobalContext";
import { importArray_eng, importArray_per } from "./importArray";

export const useLanguage = () => useContext(GlobalContext);
const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("persian");
  const data = language === "persian" ? importArray_eng : importArray_per;

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "english" ? "persian" : "english"));
  };

  return (
    <GlobalContext.Provider value={{ toggleLanguage, data, language }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
