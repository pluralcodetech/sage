import React from "react";
import HeaderC from "../organisms/courses/HeaderC"
import Say from "../molecules/Say";
import CaseStudy from "../molecules/CaseStudy";
import Faq from "../molecules/Faq";
import Footer from "../molecules/Footer";

const Courses = (props) => {
  return (
    <>
      <HeaderC />
      <Say/>
      <CaseStudy/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default Courses;
