import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Home from "../Pages/Home";
import Footer from "../layout/Footer";
import ResponsiveAppBar from "../layout/NavBar/Index";
import Profile from "../Pages/Profile";
import { GlobalContext } from "../globalContext/GobalContext";
import NotFound404 from "../Pages/NotFound";
import { Dashboard } from "../Pages/DashBoard";
import { useLocation } from "react-router-dom";
import { AddCourse } from "../Pages/DashBoard/components/courses/addCourse/index";
import DashboardLayoutSlots from "../Pages/DashBoard/components/SideBar/index";
import AboutCourses from '../Pages/DashBoard/components/courses/aboutCourses/index';
import AllCourses from '../Pages/DashBoard/components/courses/allCourses/index';
const Router = () => { 
  const { token } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbarAndFooter element={<Home />} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/dashboard/*" element={<DashboardWithLayout />} />
        {token ? (
          <>
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<WithNavbarAndFooter element={<Home />} />} />
        )}
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
    { element }
  );
};

const DashboardWithLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <DashboardLayoutSlots />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Courses/AddCoAboutCourseurse" element={<AddCourse />} />
          <Route path="Courses/" element={<AboutCourses />} />
          <Route path="Courses/AllCourses" element={<AllCourses/>}/>
        </Routes>
      </div>
    </div>
  );
};
