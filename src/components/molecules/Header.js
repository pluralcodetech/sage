import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import flex from "../../images/autorenew.png";
import fast from "../../images/alarm.png";
import online from "../../images/laptop_mac.png";
import headerpic from "../../images/imageone.png";
import Button from "../atom/Button";
import TextLinks from "../atom/TextLinks";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header d-flex py-lg-5 flex-sm-column flex-md-column flex-lg-row items-center align-items-center">
      <motion.div
        className="first-part w-100"
        initial={{ x: "-7vw",y:50 }}
        animate={{ x: 0, y:0 }}
        transition={{ duration: 2 }}
      >
        <h1  className="header-maintext">
          Upskill For <span className="global">Global</span> Growth
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
      </motion.div>
      <motion.div className="second-part w-100 d-flex justify-content-center"
      initial={{ x: "7vw",y:50 }}
      animate={{ x: 0, y:0 }}
      transition={{ duration: 2 }}>
        <Image
          src={headerpic}
          alt="header-logo"
          className="second-img"
        />
      </motion.div>
    </div>
  );
};

export default Header;
