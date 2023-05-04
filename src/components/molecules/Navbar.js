import React from "react";
import Image from "../atom/Image";
import logo from "../../images/SIBM 0005.png";
import smallicon from '../../images/Frame 427318704.png'
import closeicon from '../../images/icon.png'
import TextLinks from "../atom/TextLinks";
import "boxicons";
import Button from "../atom/Button";
import { useRef } from "react";
import { useState } from "react";

const Navbar = () => {
  const dp = useRef();
  const more = useRef();

  const showCourseDropdown=()=>{
    dp.current.style.display="block"
  }

  const hideCourseDropdown =()=>{
    dp.current.style.display="none"
  }
  const showMore=()=>{
    more.current.style.display="block"
  }
  const hideMore=()=>{
    more.current.style.display="none"
  }

  const [open, setOpen] = useState(true);
  const handleOpen =()=>{
    setOpen(!open)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 px-lg-5 py-4 bg-white">
        <div className="navlogo">
          <Image src={logo} alt="sage" className="w-100" />
        </div>
      
        <div
          className=" border-0 d-flex d-lg-none justify-content-end"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleOpen}
        >
          {open ?<Image src={smallicon} className="w-50"/> :<Image src={closeicon} className="w-50"/>}
          {/* <span className="navbar-toggler-icon"></span> */}
        </div>
        <div className="collapse navbar-collapse list-container" id="navbarNav">
          <div className="navbar-nav navlist d-flex justify-content-center gap-4">
            <TextLinks to="/" className="nav-link" children="Home" />
            <TextLinks to="/minimba" className="nav-link" children="Sage Mini MBA" />
            <div className="d-flex align-items-center position-relative" onMouseOver={showCourseDropdown} onMouseOut={hideCourseDropdown}>
              <TextLinks children="Courses" className="nav-link" />
              <box-icon name="chevron-down"></box-icon>
              <div className="courses-dropdown position-absolute" ref={dp}>
                <TextLinks to="/courses" className="dpbigtext" children="Certificate Courses" />
                <div className="row d-none d-lg-flex">
                  <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                    <ul className="">
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Marketing"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Product Management"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Operations Management"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Agile Project Management"
                          to="#"
                        />
                      </li>
                      <li className="">
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Business Analysis"
                          to="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 p-0 ">
                    <ul className="">
                      <li className="">
                        <TextLinks
                          className="courses-dropdown-links"
                          children="International Business"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Innovation & Design Thinking"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Accounting & Finance"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Team Leadership"
                          to="#"
                        />
                      </li>
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Growth Hacking"
                          to="#"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <TextLinks to="/aboutus" className="nav-link" children="About Sage" />
            <div className="d-flex align-items-center" onMouseOver={showMore} onMouseOut={hideMore}>
              <TextLinks children="More" className="nav-link" />
              <box-icon name="chevron-down"></box-icon>
              <div className="more-dropdown position-absolute" ref={more}>
                      <div className="py-1">
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Verify Certificate"
                          to="/verify"
                        />
                      </div>
                      <div className="py-1">
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Our Partners"
                          to="/partners"
                        />
                      </div>
                      <div className="py-1">
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Contact Us"
                          to="#"
                        />
                      </div>
                      </div>
            </div>
          </div>
          <div className="navbtn-container d-flex gap-2 my-2 my-lg-0">
            <Button children="Login" className="btn px-4 logBtn " />
            <Button children="Sign up" className="btn px-4 signBtn " />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
