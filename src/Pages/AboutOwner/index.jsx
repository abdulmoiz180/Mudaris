import React from "react";
import Participate from "./components/Participate";
import FAQ from "../Home/components/Accordion";
import GetStart from "../Home/components/GetStarted";
import Classes from "./components/Classes";

export const AboutOwner = () => {
  return (
    <>
      <section className="home-page column primary-bg">
        <Participate/>
        <Classes/>
        {/* <FAQ/>
        <GetStart/> */}
      </section>
    </>
  );
};
