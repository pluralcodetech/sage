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
      <HeaderEchC childreneach="Operations Management"/>
      <AboutC />
      <Benefits/>
      <Video />
      <Learn />
      <div className="px-4 px-lg-5 py-2">
        <Box boxtitle="Operations Management"/>
      </div>
      <Say />
      <CaseStudy newCase="#fff" pbCase="4rem"/>
      <Footer />
    </div>
  );
};

export default EachCourse;
