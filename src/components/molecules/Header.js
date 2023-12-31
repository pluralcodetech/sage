import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import flex from "../../images/autorenew.png";
import fast from "../../images/alarm.png";
import online from "../../images/laptop_mac.png";
// import headerpic from "../../images/Group 17.png";
import Button from "../atom/Button";
// import {Link} from "react-scroll";
import TextLinks from "../atom/TextLinks";

const Header = () => {
  return (
    <div className="header row py-4 py-lg-5 align-items-center">
      <div
        className="first-part col p-0 pb-lg-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="header-maintext py-lg-3">
          Upskill For <span className="global">Global </span>Growth.
        </h1>
        <Text
          className="header-text mt-2"
          children="Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates"
        />
        <div className="header-logo py-1">
          <div className="d-flex ">
            <div className="icons-box ">
              <Image src={flex} alt="" className="icons" />
            </div>
            <Text className="fst-italic" children="Flexible." />
          </div>
          <div className="d-flex">
            <div className="icons-box">
              <Image src={fast} alt="" className="icons" />
            </div>
            <Text className="fst-italic" children="Fast." />
          </div>
          <div className="d-flex">
            <div className="icons-box2">
              <Image src={online} alt="" className="icons2 pt-1" />
            </div>
            <Text className="fst-italic" children="100% Online" />
          </div>
        </div>
        <div className="">

        {/* <Link to="minimba" smooth={true}> */}
          <TextLinks to="/minimba" children={<Button className="btn header-btn py-2 mt-2" children="Sage Mini Mba" />} />
        {/* </Link> */}
        </div>
        <div className="py-3 ">

        {/* <Link to="courses" smooth={true}> */}
          <TextLinks to="/courses" children={<Button className="btn header-btn2 py-2 mt-2" children="Certificate Courses" />} />
        {/* </Link> */}
        </div>
      </div>
      <div
        className="second-part p-0 col justify-content-center"
        
      >
        {/* <Image src={headerpic} alt="header-logo" className="second-img" /> */}
      </div>
    </div>
  );
};

export default Header;
