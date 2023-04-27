import React from "react";
import Search from "../molecules/Search";
// import HeaderC from '../organisms/courses/HeaderC'
import LeftHeader from "../organisms/courses/LeftHeader";

const Courses = () => {
  return (
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
      {/* <HeaderC /> */}
      <LeftHeader/>
    </div>
  );
};

export default Courses;
