import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { checkAutoLogin } from "@features/auth/authThunk";
import Home from "../Pages/Home";
import Footer from "../layout/Footer";
import ResponsiveAppBar from "../layout/NavBar/Index";
import NotFound404 from "../Pages/NotFound";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// Wrapper for Navbar and Footer
const WithNavbarAndFooter = ({ element }) => {
  const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== "/profile"; // Adjust the path
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

// Dashboard layout including sidebar and nested routes
// const DashboardWithLayout = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <DashboardLayoutSlots />
//       <div style={{ flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="Courses/AddCourse" element={<AddCourse />} />
//           <Route
//             path="Courses/AboutCourse/:courseId"
//             element={<AboutCourses />}
//           />
//           <Route path="Courses/AllCourses" element={<AllCourses />} />
//           <Route
//             path="Courses/Coursecontent/:courseId"
//             element={<CourseContent />}
//           />
//           <Route path="Courses/Livestream" element={<Livestream />} />

//           {/* Catch-all for dashboard */}
//           <Route path="*" element={<Navigate to="/dashboard" replace />} />
//         </Routes>
//       </div>
//     </div>
//   );
//};
//<Route path="/dashboard/*" element={<DashboardWithLayout />} />
//
//        <Route path="/profile" element={<Profile />} />
