import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { checkAutoLogin } from "@features/auth/authThunk";
import Home from "../Pages/Home";
import Footer from "../layout/Footer";
import ResponsiveAppBar from "../layout/NavBar/Index";
import Profile from "../Pages/Profile";
import NotFound404 from "../Pages/NotFound";
import { Dashboard } from "../Pages/DashBoard";
import { useLocation } from "react-router-dom";
import { AddCourse } from "../Pages/DashBoard/components/courses/addCourse/index";
import DashboardLayoutSlots from "../Pages/DashBoard/components/SideBar/index";
import AboutCourses from "../Pages/DashBoard/components/courses/aboutCourses/index";
import AllCourses from "../Pages/DashBoard/components/courses/allCourses/index";
import Livestream from "../Pages/DashBoard/components/courses/liveStreaming/index";
import ProtectedRoutes from "./ProtectedRoutes";
import { useDispatch } from "react-redux";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check token from cookies and update Redux state
    dispatch(checkAutoLogin());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Mudaris"
          element={<WithNavbarAndFooter element={<Home />} />}
        />
        <Route path="*" element={<NotFound404 />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard/*" element={<DashboardWithLayout />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const WithNavbarAndFooter = ({ element }) => {
  const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== "/profile";
  return shouldRenderNavbarAndFooter ? (
    <>
      <ResponsiveAppBar />
      {element}
      <Footer />
    </>
  ) : (
    element
  );
};
const DashboardWithLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashboardLayoutSlots />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Courses/AddCourse" element={<AddCourse />} />
          <Route
            path="Courses/AboutCourse/:courseId"
            element={<AboutCourses />} // Fixed duplicate import issue
          />
          <Route path="Courses/AllCourses" element={<AllCourses />} />
          <Route path="Courses/Livestream" element={<Livestream />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};
