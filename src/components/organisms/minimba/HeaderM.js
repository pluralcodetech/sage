import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import book from "../../../images/book.png";
import time from "../../../images/Vector.png";
import level from "../../../images/Vector (1).png";
import price from "../../../images/Vector (2).png";
import access from "../../../images/Vector (3).png";
import headerpic from "../../../images/Group 20646.png";
import Button from "../../atom/Button";


const HeaderM = () => {
  return (
    <div className="header py-lg-5 row align-items-end">
      <div data-aos="fade-up-right" data-aos-duration="2000"
        className="first-part w-100 col"
      >
        <h1 className="header-maintext">
          Stand Out With Sage <br/><span className="global">Mini MBA</span>
        </h1>
        <Text
          className="header-text mt-2"
          children="Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates"
        />
        <div className="header-logomba">
          <div className="d-flex gap-1">
            <div>
              <Image src={book} alt="" />
            </div>
            <Text
              className="fst-italic"
              children="Number of required modules:"
            />
            <Text className="fst-italic header-logomba-two" children="10" />
          </div>
          <div className="d-flex gap-1">
            <div>
              <Image src={time} alt="" />
            </div>
            <Text className="fst-italic" children="Duration:" />
            <Text
              className="fst-italic header-logomba-two"
              children="30+ hours."
            />
          </div>
          <div className="d-flex gap-1">
            <div>
              <Image src={level} alt="" />
            </div>
            <Text className="fst-italic" children="Level:" />
            <Text
              className="fst-italic header-logomba-two"
              children="Intermediate"
            />
          </div>
          <div className="d-flex gap-1">
            <div>
              <Image src={price} alt="" />
            </div>
            <Text className="fst-italic" children="Price:" />
            <Text
              className="fst-italic header-logomba-two"
              children="$149.99"
            />
          </div>
          <div className="d-flex gap-1">
            <div className="">
              <Image src={access} alt="" />
            </div>
            <Text className="fst-italic" children="Access:" />
            <Text
              className="fst-italic header-logomba-two"
              children="Unlocks automatically upon completion of required modules"
            />
          </div>
        </div>
        <Button className="btn header-btn py-2 mt-2" children="Enroll Now" />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000"
        className="second-part w-100 py-5 py-lg-0 col d-inline-flex justify-content-center"
      >
        <Image src={headerpic} alt="header-logo" className="second-img imgg" />
      </div>
    </div>
  );
};

export default HeaderM;
