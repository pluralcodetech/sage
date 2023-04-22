import React from "react";
import Image from "../atom/Image";
import logo from "../../images/SIBM 0005.png";
import TextLinks from "../atom/TextLinks";
import "boxicons";
import Button from "../atom/Button";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-4 px-lg-5 py-4">
        <div className="navlogo">
          <Image src={logo} alt="sage" className="w-100"/>
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
            <div className="d-flex align-items-center">
              <TextLinks to="/test" children="Courses" className="nav-link" />
              <box-icon name="chevron-down"></box-icon>
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

      {/* <div className="px-5 py-4 nav-container d-flex items-center">
        <div className="navlogo">
          <Image src={logo} alt="sage" />
        </div>
        <div className="list-container">
          <div className="navlist d-flex justify-content-center gap-4">
            <TextLinks to="#" children="Home" />
            <div className="d-flex items-center">
              <TextLinks to="#" children="Courses" />
              <box-icon name="chevron-down"></box-icon>
            </div>
            <TextLinks to="#" children="About Sage" />
            <div className="d-flex items-center">
              <TextLinks to="#" children="More" />
              <box-icon name="chevron-down"></box-icon>
            </div>
          </div>
          <div className="navbtn-container">
            <Button children="Login" className="btn px-4 logBtn m-2" />
            <Button children="Sign up" className="btn px-4 signBtn m-2" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
