import React from "react";
import Button from "../atom/Button";
import Text from "../atom/Text";
import Image from "../atom/Image";
import sagemini from "../../images/hands.png";

const MBA = () => {
 ;
  return (
    <div className="cert">
      <h2 className="text-center my-3 my-lg-5 text-black" data-aos="zoom-in-up" data-aos-duration="2000">Sage Mini MBA</h2>
      <div  className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="fade-right" data-aos-duration="2000">
          <h2 className="fs-1 std size">Stand Out With</h2>
          <h2 className="fs-1 std2 size">Sage Mini MBA</h2>
          <Text className="py-3 mbacol" children="Sage Mini MBA is one the most advanced program of its kind globally. The Mini MBA focuses gives you the same academic value of a full-time MBA in a streamlined and self-paced environment and for a fraction of the cost. Sage Mini MBA is backed internationally and adheres to global standards for advanced business studies."/>
          <Button className="btn header-btn" children="Get Started"/>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="fade-up" data-aos-duration="2000">
          <Image className="mbalogo" src={sagemini} />
        </div>
      </div>
    </div>
  );
};

export default MBA;
