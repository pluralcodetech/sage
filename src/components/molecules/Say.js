import React from "react";
import Carousell from "./Carousell";

const Say = () => {

 
  return (
    <div className="p-4 p-lg-5 my-4 mag">
      <div className="w-100" data-aos="fade-up" data-aos-duration="2000">
        <div className="py-0 py-xxl-5">
          {/* <h2 className="fs-1 pb-4 std say">
            What <span className="std2">Our Students</span> Are Saying
          </h2> */}
          <Carousell />
        </div>
      </div>
    </div>
  );
};

export default Say;
