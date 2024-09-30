import React, { useEffect } from "react";
import Router from "./router/Router";
import GlobalProvider from "./globalContext/GlobalProvider";
import { useDispatch } from "react-redux";
import { checkAutoLogin } from "./features/auth/authThunk";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAutoLogin());
  }, [dispatch]);
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}
