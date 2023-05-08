import React from "react";
import Image from "../atom/Image";
import firstImg from "../../images/Frame 49.png";
import secondImg from "../../images/Frame 49 (1).png";
import thirdImg from "../../images/Group 20650.png";
import Text from "../atom/Text";
import arrow from "../../images/arrow.png";
import TextLinks from "../atom/TextLinks";

const Training = () => {
  return (
    <div className="training px-4 py-4 p-lg-5">
      <h2 className="text-center pb-5 text-black" data-aos="zoom-in-up" data-aos-duration="2000">Our Training</h2>

      <div className="row gap-3 justify-content-center">
        <div className="training-box col-sm-12 col-md-12 col-lg-4 d-flex flex-column p-0 justify-content-between" data-aos="fade-up" data-aos-duration="2000">
          <div className="training-logo">
            <Image src={firstImg} alt="" className="training-logo" />
          </div>
          <div className="p-4 pb-0">
    
              <h5>Mini MBA</h5>
              <Text
                children="Stand out boldly with the Sage Mini-MBA"
                className="training-text"
              />
           
          </div>
            <div className="w-100 pb-3 d-flex justify-content-end">
              <TextLinks to="/minimba" children={<Image src={arrow} className="w-50" />} />
            </div>
        </div>

        <div className="training-box col-sm-12 col-md-12 col-lg-4 p-0 d-flex flex-column  justify-content-between" data-aos="fade-up" data-aos-duration="2000">
          <div className="training-logo">
            <Image src={secondImg} alt="" className="training-logo" />
          </div>
          <div className="p-4 pb-0">
            <h5>Certificate Courses</h5>
            <Text
              children="Learn business & management courses, 100% online in a few hours"
              className="training-text"
            />
          </div>
            <div className="w-100 pb-3 d-flex justify-content-end">
              <TextLinks to="/courses" children={<Image src={arrow} className="w-50" />} />
            </div>
        </div>

        <div className="training-box col-sm-12 col-md-12 col-lg-4 p-0 d-flex flex-column  justify-content-between" data-aos="fade-up" data-aos-duration="2000">
          <div className="training-logo">
            <Image src={thirdImg} alt="" className="training-logo" />
          </div>
          <div className="p-4 pb-0">
            <h5>Sage Institute</h5>
            <Text
              children="Discover SAGE. Our partners, history, accreditation & culture."
              className="training-text"
            />
          </div>
            <div className="w-100 pb-3 d-flex justify-content-end">
              <TextLinks to="/aboutus" children={<Image src={arrow} className="w-50" />} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
