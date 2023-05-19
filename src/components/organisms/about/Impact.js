import React from "react";
import Image from "../../atom/Image";
import impactimg from "../../../images/Rectangle 11.png";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import Button from "../../atom/Button";

const Impact = () => {
  return (
    <div className="impact ver">
      <div className="row align-items-center position-relative gap-4">
        <div className="col-sm-12 col-md-12 col-lg-6 impactimg p-0">
          <Image className="" src={impactimg} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 bg-white rounded-3 impact-box">
          <h2 className="impacttext">Our Impact</h2>
          <Text
            className="impacttext2"
            children="over the years, we have partnered with several organizations to create massive impact and drive corporate education to thousands of under-privileged persons worldwide. Find out more about out partners by clicking the button below."
          />
          <TextLinks
            className=""
            children={
              <Button className="impact-btn btn cert-btn" children="Our Partners" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
