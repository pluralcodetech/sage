import React from "react";
import Image from "../atom/Image";
import logo from "../../images/SIBM 0005.png";
import Text from "../atom/Text";
import TextLinks from "../atom/TextLinks";
import "boxicons";
import Button from "../atom/Button";
import { useRef } from "react";

const Navbar = () => {
  const dp = useRef();

  const showCourseDropdown=()=>{
    dp.current.style.display="block"
  }

  const hideCourseDropdown =()=>{
    dp.current.style.display="none"
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 px-lg-5 py-4">
        <div className="navlogo">
          <Image src={logo} alt="sage" className="w-100" />
        </div>
        <button
          className="navbar-toggler red"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse list-container" id="navbarNav">
          <div className="navbar-nav navlist d-flex justify-content-center gap-4">
            <TextLinks to="/" className="nav-link" children="Home" />
            <div className="d-flex align-items-center position-relative" onMouseOver={showCourseDropdown} onMouseOut={hideCourseDropdown}>
              <TextLinks to="/test" children="Courses" className="nav-link" />
              <box-icon name="chevron-down"></box-icon>
              <div className="courses-dropdown position-absolute" ref={dp}>
                <Text className="courses-dropdown-bigtext" children="Certificate Courses" />
                <div className="row">
                  <div className="col">
                    <ul>
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
                      <li>
                        <TextLinks
                          className="courses-dropdown-links"
                          children="Business Analysis"
                          to="#"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>
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
            <TextLinks to="#" className="nav-link" children="About Sage" />
            <div className="d-flex align-items-center">
              <TextLinks to="#" children="More" className="nav-link" />
              <box-icon name="chevron-down"></box-icon>
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
