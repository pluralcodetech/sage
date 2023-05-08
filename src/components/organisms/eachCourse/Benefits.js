import React from "react";
import Image from "../../atom/Image";
import benefitimg from "../../../images/Group 114.png";

const Benefits = () => {
  return (
    <div className="px-4 p-lg-5 py-2 benefit">
      <h2 className="text-black text-center pt-5 pb-2">Courses Benefits</h2>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 bencol">
          <Image src={benefitimg} className="w-100" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 bencol">
          <h1 className="">Course Benefits</h1>
          <ul className="ben-list">
            <li>Internationally valid Certificate.</li>
            <li>Interview prep. material.</li>
            <li>Lifetime access to course material.</li>
            <li>Access to Sage student community.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
