import * as React from "react";
import Router from "./router/Router";
import GlobalProvider from "./globalContext/GlobalProvider";

export default function App() {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
}
