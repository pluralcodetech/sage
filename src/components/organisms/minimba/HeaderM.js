import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import book from "../../../images/book.png";
import time from "../../../images/Vector.png";
import level from "../../../images/Vector (1).png";
import price from "../../../images/Vector (2).png";
import access from "../../../images/Vector (3).png";
// import headerpic from "../../../images/Group 20646.png";
import Button from "../../atom/Button";


const HeaderM = () => {
  return (
    <div className="header py-lg-5 row align-items-end">
      <div data-aos="fade-up-right" data-aos-duration="2000"
        className="first-part w-100 col p-0"
      >
        <h1 className="header-maintext header2">
          Stand Out With Sage <span className="global">Mini MBA</span>
        </h1>
        <Text
          className="header-text mt-2"
          children="Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates"
        />
        <div className="header-logomba">
          <div className="d-flex">
            <div>
              <Image src={book} alt="" className="w-75"/>
            </div>
            <Text
              className="fst-italic pt-1"
              children="Number of required modules:"
            />
            <Text className="fst-italic header-logomba-two" children="10" />
          </div>
          <div className="d-flex ">
            <div>
              <Image src={time} alt="" className="w-75" />
            </div>
            <Text className="fst-italic pt-1" children="Duration:" />
            <Text
              className="fst-italic header-logomba-two"
              children="30+ hours."
            />
          </div>
          <div className="d-flex">
            <div>
              <Image src={level} alt="" className="w-75"/>
            </div>
            <Text className="fst-italic pt-1" children="Level:" />
            <Text
              className="fst-italic header-logomba-two"
              children="Intermediate"
            />
          </div>
          <div className="d-flex ">
            <div>
              <Image src={price} alt="" className="w-75" />
            </div>
            <Text className="fst-italic pt-1" children="Price:" />
            <Text
              className="fst-italic header-logomba-two"
              children="$149.99"
            />
          </div>
          <div className="d-flex">
            <div className="">
              <Image src={access} alt="" className="w-75" />
            </div>
            <Text className="fst-italic pt-1" children="Access:" />
            <Text
              className="fst-italic header-logomba-two"
              children="Unlocks automatically upon completion of required modules"
            />
          </div>
        </div>
        <div className="pb-lg-5 ">

        <Button className="btn header-btn py-2 mt-2" children="Enroll Now" />
        </div>
      </div>
      <div 
        className="second-part w-100 py-5 py-lg-0 p-0 col d-inline-flex justify-content-center"
      >
        {/* <Image src={headerpic} alt="header-logo" className="second-img imgg" /> */}
      </div>
    </div>
  );
};

export default HeaderM;
