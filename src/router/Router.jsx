import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Footer from "../layout/Footer";
import ResponsiveAppBar from "../layout/NavBar/Index";
const Router = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
