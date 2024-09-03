import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
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
