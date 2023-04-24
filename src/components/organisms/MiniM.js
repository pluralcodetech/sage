import React from "react";
import HeaderM from "./minimba/HeaderM";
import Who from "./minimba/Who";
import Videomba from "./minimba/Videomba";
import Whymba from "./minimba/Whymba";
import MbaModules from "./minimba/MbaModules";
import CaseStudy from "../molecules/CaseStudy";
import Faq from "../molecules/Faq";
import Footer from "../molecules/Footer";
import Say from "../molecules/Say";

const MiniM = () => {
  return (
    <div>
      <div className="w-100 px-4 px-lg-5 py-3 box">
        <HeaderM />
      </div>
      <Who />
      <Videomba />
      <Whymba />
      <div className="w-100 px-4 px-lg-5 py-3 box">
        <MbaModules />
      </div>
      <Say/>
      <div className="w-100 px-4 px-lg-5 py-3 box">{/* <MBA /> */}</div>
      <CaseStudy />
      <Faq />
      <Footer />
    </div>
  );
};

export default MiniM;
