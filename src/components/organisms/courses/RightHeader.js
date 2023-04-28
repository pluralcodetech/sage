import React from "react";
import Search from "../../molecules/Search";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import star from "../../../images/star.png";
import course from "../../../images/course.png";
import clock from "../../../images/clock.png";
import system from "../../../images/system.png";
import Image from "../../atom/Image";
import viewA from "../../../images/certa.png";

const RightHeader = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col">
          <h5>24,659 Available Courses</h5>
        </div>
        <div className="col">
          <Search
            inputtype="text"
            searchplaceholder="What do you want to learn"
            inputclass="col rounded-start form-control "
            className="row"
          />
        </div>
      </div>
      <div className="row gap-4 py-5">
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={viewA} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Marketing</h5>
            <Text
              children="Master the principles of 360 marketing for business growth."
              className="training-text cert-text mb-1"
            />
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex gap-1">
                <div className="">
                  <Image src={course} alt="" className="w-100" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text
                    className="moduletext m-0"
                    children="3hours (self-paced)"
                  />
                </div>
                <Text children="$20.99" className="moduletext m-0 no-price" />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
                <Text children="Free" className="m-0" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={viewA} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Marketing</h5>
            <Text
              children="Master the principles of 360 marketing for business growth."
              className="training-text cert-text mb-1"
            />
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex gap-1">
                <div className="">
                  <Image src={course} alt="" className="w-100" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text
                    className="moduletext m-0"
                    children="3hours (self-paced)"
                  />
                </div>
                <Text children="$20.99" className="moduletext m-0 no-price" />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
                <Text children="Free" className="m-0" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={viewA} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Marketing</h5>
            <Text
              children="marketing for business growth."
              className="training-text cert-text mb-1"
            />
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex gap-1">
                <div className="">
                  <Image src={course} alt="" className="w-100" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text
                    className="moduletext m-0"
                    children="3hours (self-paced)"
                  />
                </div>
                <Text children="$20.99" className="moduletext m-0 no-price" />
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
                <Text children="Free" className="m-0" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
      </div>
    </>
  );
};

export default RightHeader;
