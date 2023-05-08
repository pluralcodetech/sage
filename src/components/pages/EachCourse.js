import React from "react";
import HeaderEchC from "../organisms/eachCourse/HeaderEchC";
import AboutC from "../organisms/eachCourse/AboutC";
import Video from "../molecules/Video";
import Say from "../molecules/Say";
import CaseStudy from "../molecules/CaseStudy";
import Footer from "../molecules/Footer";
import Learn from "../organisms/eachCourse/Learn";
import Box from "../organisms/eachCourse/Box";
import Benefits from "../organisms/eachCourse/Benefits"

const EachCourse = (props) => {
  return (
    <div>
      <HeaderEchC />
      <AboutC />
      <Benefits/>
      <Video />
      <Learn />
      <div className="px-4 px-lg-5 py-2">
        <Box />
      </div>
      <Say />
      <CaseStudy />
      <Footer />
    </div>
  );
};

export default EachCourse;
