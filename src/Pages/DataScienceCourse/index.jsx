import React from "react";
import { DataScience } from "./components/DataScienceCourse";
import FAQ from "../Home/components/Accordion";
import GetStart from "../Home/components/GetStarted";

export const DataSciCourse = () => {
  return (
    <>
      <section className="home-page column primary-bg">
        <DataScience />
        <FAQ/>
        <GetStart/>
      </section>
    </>
  );
};
