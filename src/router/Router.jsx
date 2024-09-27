import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import Home from "../Pages/Home";
import Footer from "../layout/Footer";
import ResponsiveAppBar from "../layout/NavBar/Index";
import Profile from "../Pages/Profile";
import { GlobalContext } from "../globalContext/GobalContext";
import NotFound404 from "../Pages/NotFound";
import { Dashboard } from "../Pages/DashBoard";
const Router = () => {
  const { token } = useContext(GlobalContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithNavbarAndFooter element={<Home />} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
        {token ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route
            path="/"
            element={<WithNavbarAndFooter element={<Home />} />}
          />
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
    element
  );
};

const ProfileNavbar = ({ element }) => {
  const location = useLocation();
  const UserRenderNavbar =
    location.pathname !== "/signin" || "/signup" || "/forgotpassword" || "/";
  return UserRenderNavbar ? <>{element}</> : element;
};
