import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import flex from "../../images/autorenew.png";
import fast from "../../images/alarm.png";
import online from "../../images/laptop_mac.png";
import headerpic from "../../images/imageone.png";
import Button from "../atom/Button";
import TextLinks from "../atom/TextLinks";


const Header = () => {
  return (
    <div className="header row py-lg-5  align-items-center">
      <div
        className="first-part w-100 col"
        data-aos="fade-up-right" data-aos-duration="2000"
      >
        <h1  className="header-maintext">
          Upskill For <span className="global">Global</span><br/> Growth
        </h1>
        <Text
          className="header-text mt-2"
          children="Learn cutting-edge Business, Management and Corporate skills with real world case studies and earn globally recognized certificates"
        />
        <div className="header-logo">
          <div className="d-flex gap-2">
            <div>
              <Image src={flex} alt="" />
            </div>
            <Text className="fst-italic" children="Flexible." />
          </div>
          <div className="d-flex gap-2">
            <div>
              <Image src={fast} alt="" />
            </div>
            <Text className="fst-italic" children="Fast." />
          </div>
          <div className="d-flex gap-2">
            <div>
              <Image src={online} alt="" />
            </div>
            <Text className="fst-italic" children="100% Online" />
          </div>
        </div>
        <TextLinks
          to="/minimba"
          children={
            <Button
              className="btn header-btn py-2 mt-2"
              children="Get Started"
            />
          }
        />
      </div>
      <div className="second-part w-100 col justify-content-center"
      data-aos="fade-up-left" data-aos-duration="2000">
        <Image
          src={headerpic}
          alt="header-logo"
          className="second-img"
        />
      </div>
    </div>
  );
};

export default Header;
