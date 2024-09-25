import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Footer from "../components/Footer";
import ResponsiveAppBar from "../components/NavBar/Index";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
