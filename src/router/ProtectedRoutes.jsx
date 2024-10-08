import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { checkAutoLogin } from "@features/auth/authThunk";

const ProtectedRoutes = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await dispatch(checkAutoLogin()); // Await the dispatch if it's asynchronous
      } catch (error) {
        console.error("Error checking token:", error);
      } finally {
        setIsCheckingAuth(false); // Mark auth check as complete
      }
    };

    checkToken(); // Run the async function
  }, [dispatch]);

  console.log("Token in ProtectedRoute:", token);

  // While auth check is happening, render a loader or nothing
  if (isCheckingAuth) {
    return <div>Loading...</div>; // or any loading indicator
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
