import React from "react";
import Image from "../atom/Image";
import logo from "../../images/SIBM 0003.png";
import inst from "../../images/bi_instagram.png";
import face from "../../images/Group.png";
import twit from "../../images/Group (1).png";
import link from "../../images/Group (2).png";
import tel from "../../images/phone-call 1.png";
import inout from "../../images/Instagram Outline.png";
import email from "../../images/envelope 2.png";
import faceout from "../../images/Facebook Outline.png";
import twitout from "../../images/Twitter Outline.png";
import TextLinks from "../atom/TextLinks";
import Text from "../atom/Text";

const Footer = () => {
  return (
    <>
      <div className="training p-4 p-lg-5 pb-2 w-100 d-flex flex-column flex-lg-row gap-5 justify-content-between">
        <div className="w-50 d-flex flex-column justify-content-between">
          <div>
            <div className="footlogo">
              <Image src={logo} className="w-100" />
            </div>
            <p className="pt-4 py-2 foot-first-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
            </p>
            <div className="d-flex gap-3">
              <TextLinks>
                <Image src={inst} />
              </TextLinks>
              <TextLinks>
                <Image src={face} />
              </TextLinks>
              <TextLinks>
                <Image src={twit} />
              </TextLinks>
              <TextLinks>
                <Image src={link} />
              </TextLinks>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex flex-wrap foottwo flex-row gap-5">
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Top Courses</h5>

            <TextLinks to="#">Operations Management</TextLinks>
            <TextLinks to="#">Business Analytics</TextLinks>
            <TextLinks to="#">Leadership</TextLinks>
            <TextLinks to="#">Digital Marketing</TextLinks>
            <TextLinks to="#">HR Management</TextLinks>
            <TextLinks to="#">Agile Project Management</TextLinks>
            <TextLinks to="#">Negotiation</TextLinks>
            <TextLinks to="#">Sales & Sales Management</TextLinks>
          </div>
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Platforms</h5>

            <TextLinks to="#">SAGE in the news</TextLinks>
            <TextLinks to="#">SAGE Mini MBA</TextLinks>
            <TextLinks to="#">Real-World Case Studies</TextLinks>
          </div>
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Our training</h5>
            <TextLinks to="#">School of Data</TextLinks>
            <TextLinks to="#">School of Product</TextLinks>
            <TextLinks to="#">School of Engineering</TextLinks>
          </div>
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Company</h5>
            <TextLinks to="#">Mini MBA</TextLinks>
            <TextLinks to="#">Certificate Courses</TextLinks>
            <TextLinks to="#">Sage Institute</TextLinks>
          </div>
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Resources</h5>

            <TextLinks to="#">FAQs</TextLinks>
            <TextLinks to="#">Testimonials</TextLinks>
          </div>
          <div className="footw d-flex flex-column gap-2">
            <h5 className="">Policies</h5>
            <TextLinks to="#">Terms and Condition</TextLinks>
            <TextLinks to="#">Student Loan Policy</TextLinks>
            <TextLinks to="#">Refunds Policy</TextLinks>
            <TextLinks to="#">Privacy Policy</TextLinks>
          </div>
          <div className="footc d-flex flex-column gap-2">
            <h5 className="">Contact</h5>
            <div className="d-flex gap-3 align-items-center">
              <Image src={tel} />
              <TextLinks to="#">+(234) 123-456-7890.</TextLinks>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <Image src={tel} />
              <TextLinks to="#">+(234) 123-456-7890.</TextLinks>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <Image src={twitout} />
              <TextLinks to="#">sageinstitutehq</TextLinks>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <Image src={inout} />
              <TextLinks to="#">sageinstitutehq</TextLinks>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <Image src={faceout} />
              <TextLinks to="#">sageinstitutehq</TextLinks>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <Image src={email} />
              <TextLinks to="#">support@sageinstitutehq.com</TextLinks>
            </div>
          </div>
        </div>
      </div>
      <Text
        className="copyr training px-4 mb-0 pb-4 px-lg-5 pt-4 pt-lg-0 text-center text-lg-start"
        children="Copyright 2023 Sage Institute of Business and Management"
      />
    </>
  );
};

export default Footer;
