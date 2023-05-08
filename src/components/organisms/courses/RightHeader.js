import React from "react";
import Search from "../../molecules/Search";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import star from "../../../images/star.png";
import course from "../../../images/course.png";
import clock from "../../../images/clock.png";
import system from "../../../images/system.png";
import Image from "../../atom/Image";
import coursea from "../../../images/coursea.png";
import courseb from "../../../images/courseb.png";
import coursec from "../../../images/coursec.png";
import coursed from "../../../images/coursed.png";
import coursee from "../../../images/coursee.png";
import coursef from "../../../images/coursef.png";
import courseg from "../../../images/courseg.png";
import courseh from "../../../images/courseh.png";
import coursei from "../../../images/coursei.png";
import Pagination from "../../molecules/Pagination";

const RightHeader = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0">
          <h5>24,659 Available Courses</h5>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0">
          <Search
            inputtype="text"
            searchplaceholder="What do you want to learn"
            inputclass="col rounded-start srchinp form-control"
            className="row"
          />
        </div>
      </div>
      <div className="row gap-4 pt-5 pb-4 justify-content-end">
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={coursea} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
              </div>
            </div>
          </div>
          <TextLinks to="/eachcourse" children="View Course" className="view"/>
        </div>
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={courseb} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
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
            <Image src={coursec} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
      </div>
      <div className="row gap-4 pb-4 justify-content-end">
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={coursed} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
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
            <Image src={coursee} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
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
            <Image src={coursef} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
      </div>
      <div className="row gap-4 pb-4 justify-content-end">
        <div
          className="cert-box-course p-4 col-sm-12 col-md-12 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="training-logo">
            <Image src={courseg} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
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
            <Image src={courseh} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
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
            <Image src={coursei} className="training-logo" />
          </div>
          <div className="pt-3 certb">
            <h5>Operations Management</h5>
          </div>
          <div>
            <div>
              <Image src={star} alt="" />
            </div>
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-center  iconw ">
                  <Image src={course} alt="" className="w-50" />
                </div>
                <Text
                  className="moduletext m-0"
                  children="Courses certificate"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw" >
                  <Image src={clock} alt="" className="w-50"/>
                </div>
                <Text
                  className="moduletext m-0"
                  children="3hours (self-paced)"
                />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center iconw">
                  <Image src={system} alt="" className="icons2" />
                </div>
                <Text className="moduletext m-0" children="100% online" />
              </div>
            </div>
          </div>
          <TextLinks children="View Course" className="view"/>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end">
        <Pagination/>
      </div>
    </>
  );
};

export default RightHeader;
