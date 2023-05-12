import React, { useState, useRef } from "react";
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
import Button from "../../atom/Button";
import searchi from "../../../images/searchi.png"
import filterlist from "../../../images/viewfilter.png"
import Filter from "./Filter";

const RightHeader = () => {
  const [search, setSearch] = useState(false)
  const [list, setList] = useState(false)

  const searchbar = useRef()

  const handleSearch=()=>{
    setSearch(!search)
  }
  const handleList=()=>{
    setList(!list)
  }
  return (
    <>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 d-flex align-items-center justify-content-between">
          <div>

          <h5>24,659 Available Courses</h5>
          </div>
          <div className="filicon d-lg-none">
            <Button className="btn" onClick={handleSearch} children={<Image className="w-75" src={searchi}/>}/>
            <Button className="btn" onClick={handleList} children={<Image className="w-75" src={filterlist}/>}/>
          </div>
        </div>
        {search &&<div className="col-sm-12 col-md-12 col-lg-6 p-0 searchright" ref={searchbar}>
          <Search
            inputtype="text"
            searchplaceholder="What do you want to learn"
            inputclass="col rounded-start srchinp form-control"
            className="row"
          />
        </div>}
      </div>
      {list && <div className='pt-3 secondfil' >
      
      <h5 className='text-center pb-4'>Filter by</h5>
      <div className='py-3'>
        <Filter h5="Subject" p1="Operation Management" p2="Operation Management" p3="Operation Management" p4="Operation Management" p5="Operation Management" />
        <div className='text-center see-course'>
        <TextLinks to="#" children="See more" className="txt" />
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Skills" p1="Management" p2="Analytics" p3="Marketing" p4="Leadership" p5="Operation" />
        <div className='text-center see-course'>
        <TextLinks to="#" children="See more" className="txt" />
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Level" p1="Beginner" p2="Intermediate" p3="Advanced" p4="Mixed" fifth='d-none' />
        <div className='text-center see-course'>
        <TextLinks to="#" children="See more" className="txt" />
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Duration" p1="Less than 2 hours" p2="1-4 weeks" p3="1-3 months" p4="3-6 months" fifth='d-none'/>
        <div className='text-center see-course'>
        <TextLinks to="#" children="See more" className="txt" />
        </div>
      </div>
    </div>
}
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
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
          <TextLinks to="/operations_management" children="View Course" className="view"/>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-lg-end">
        <Pagination/>
      </div>
    </>
  );
};

export default RightHeader;
