import React, { useState } from "react";
import { GlobalContext } from "./GobalContext";
import { tabsEnglish } from "../Constants/CourseTabs";
import { tabsPersian } from "../Constants/CourseTabsPersian";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";

const GlobalProvider = (props) => {
  const { i18n } = useTranslation();

  const EnglishTab = tabsEnglish;
  const PersianTab = tabsPersian;
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: tabsEnglish,
      },
      persian: {
        global: tabsPersian,
      },
    },
  });
  // const [courseTab, setCourseTab] = useState(EnglishTab);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };
  // const toggleLanguage = () => {
  //   setCourseTab((prevTab) =>
  //     prevTab === EnglishTab ? PersianTab : EnglishTab
  //   );
  // };

  return (
    <GlobalContext.Provider value={{ toggleLanguage }}>
      <I18nextProvider i18n={i18next}>{props.children}</I18nextProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
