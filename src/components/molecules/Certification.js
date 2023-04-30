import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import TextLinks from "../atom/TextLinks";
import Button from "../atom/Button";
import viewA from "../../images/certa.png";
import viewB from "../../images/certb.png";
import viewC from "../../images/certc.png";
import viewD from "../../images/certd.png";
import viewE from "../../images/certe.png";
import viewF from "../../images/certf.png";
import viewG from "../../images/certg.png";
import { Element } from "react-scroll";

const Certification = () => {
  return (
    <>
      <Element id="courses" name="courses">
        <div className="cert">
          <h2
            className="text-center py-4 py-lg-5 text-black"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            Certification Courses
          </h2>
          <div className="row gap-3 justify-content-center">
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewA} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Marketing</h5>
                <Text
                  children="Master the principles of 360 marketing for business growth."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="eachcourse"
                children="View Course"
                className="view cert-text"
              />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewB} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Operations Management </h5>
                <Text
                  children="Become a business operator and master high level management skills."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="eachcourse"
                children="View Course"
                className="view cert-text"
              />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewC} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Product Management </h5>
                <Text
                  children="Learn Product Management, a highly demanded corporate tech skill."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="#"
                children="View Course"
                className="view cert-text"
              />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewD} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Agile Project Management</h5>
                <Text
                  children="Master Agile methodologies for efficiently managing corporate projects."
                  className="training-text cert-text"
                />
              </div>
              <TextLinks
                to="#"
                children="View Course"
                className="view cert-text"
              />
            </div>
          </div>
          <div className="row justify-content-center gap-3 pt-4 pt-xxl-5">
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewE} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Business Analysis</h5>
                <Text
                  children="Master and deploy Data Analytics skills into business for predictive analysis."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="#"
                children="View Course"
                className="view cert-text"
              />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-3 cert-box p-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewF} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>International Business</h5>
                <Text
                  children="Understand international laws, practices and skills to compete globally."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="#"
                children="View Course"
                className="view cert-text"
              />
            </div>
            <div
              className="cert-box p-4 col-sm-12 col-md-12 col-lg-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="training-logo">
                <Image src={viewG} className="training-logo" />
              </div>
              <div className="pt-3 certb">
                <h5>Innovation & Design Thinking</h5>
                <Text
                  children="Learn how the most successful startups build project that gets users hooked."
                  className="training-text cert-text "
                />
              </div>
              <TextLinks
                to="#"
                children="View Course"
                className="view cert-text"
              />
            </div>
          </div>
          <div className="viewbtn m-auto py-4 py-xxl-5">
            <Button
              className="w-100 d-flex justify-content-center btn cert-btn"
              children="View all courses"
            />
          </div>
        </div>
      </Element>
    </>
  );
};

export default Certification;
