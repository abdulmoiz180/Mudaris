// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedRoutes = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);
//   console.log("Token:", token); // Check if token is being retrieved
//   if (!token || token === "") {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoutes;
