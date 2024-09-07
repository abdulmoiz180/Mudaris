import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import ResponsiveAppBar from "../components/NavBar";
import Footer from "../components/Footer";
const Router = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
