import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./GobalContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// Correct paths to JSON files after moving to public directory
const englishJson = "../../public/Constants/Seedenglish.json";
const persianJson = "../../public/Constants/Seedpersian.json";

export const useLanguage = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const [data, setData] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState();
  // for auth
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);
      setToken(parsedToken.token);
      setUserId(parsedToken.userId);
    }
  }, []);

  useEffect(() => {
    if (token && userId) {
      sessionStorage.setItem("token", JSON.stringify({ token, userId }));
    }
  }, [token, userId]);
  const signUpUser = async (email, password) => {
    try {
      let userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      if (user) {
        setToken(user.accessToken);
        setUserId(user.uid);
      } else {
        console.log("Error encountered");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const signInUser = async (email, password) => {
    try {
      let userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      if (user) {
        setToken(user.accessToken);
        setUserId(user.uid);
      } else {
        console.log("Error encountered");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  console.log("uid", userId);

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
        token,
        setToken,
        signInUser,
        signUpUser,
        userId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
