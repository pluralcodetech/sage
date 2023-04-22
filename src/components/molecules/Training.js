import React from "react";
import Image from "../atom/Image";
import firstImg from "../../images/Frame 49.png";
import secondImg from "../../images/Frame 49 (1).png";
import thirdImg from "../../images/Frame 49 (2).png";
import Text from "../atom/Text";
import arrow from "../../images/arrow.png";
import TextLinks from "../atom/TextLinks";

const Training = () => {
  return (
    <div className="training px-4 py-4 p-lg-5">
      <h2 className="text-center pb-5 text-black">Our Training</h2>

      <div className="w-100 d-flex flex-column flex-lg-row justify-content-between gap-4">
        <div className="training-box">
          <div className="training-logo">
            <Image src={firstImg} alt="" className="training-logo" />
          </div>
          <div className="p-4">
    
              <h5>Mini MBA</h5>
              <Text
                children="Stand out boldly with the Sage Mini-MBA"
                className="training-text"
              />
           
            <div className="w-100 d-flex justify-content-end pt-4">
              <TextLinks to="#" children={<Image src={arrow} />} />
            </div>
          </div>
        </div>

        <div className="training-box">
          <div className="training-logo">
            <Image src={secondImg} alt="" className="training-logo" />
          </div>
          <div className="p-4">
            <h5>Certificate Courses</h5>
            <Text
              children="Learn business & management courses, 100% online in a few hours"
              className="training-text"
            />
            <div className="w-100 d-flex justify-content-end">
              <TextLinks to="#" children={<Image src={arrow} />} />
            </div>
          </div>
        </div>

        <div className="training-box">
          <div className="training-logo">
            <Image src={thirdImg} alt="" className="training-logo" />
          </div>
          <div className="p-4">
            <h5>Sage Institute</h5>
            <Text
              children="Discover SAGE. Our partners, history, accreditation & culture."
              className="training-text"
            />
            <div className="w-100 d-flex justify-content-end">
              <TextLinks to="#" children={<Image src={arrow} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
