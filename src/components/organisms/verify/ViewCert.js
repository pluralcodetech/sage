import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import verimg from "../../../images/Group 20383.png";
import sibm from "../../../images/SIBM 6.png";
import sign from "../../../images/IMG_0617.png";
import crest from "../../../images/crest.png";

const ViewCert = () => {
  return (
    <div className="bg-white p-3 pb-5 p-lg-5">
      <Text className="viewc-head text-center py-5" children="View Certificate" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 p-0 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="verimg " src={verimg} />
          </div>
          <Text
            className="stdver"
            children="Student's verification was successful"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8 p-3 p-lg-5 vercert-body">
          <Image className="vercert-img" src={sibm} />
          <div className="text-center">
            <Text className="pt-5 mt-lg-5 fs-3 text-black" children="John Do Smith" />
            <Text
              className="colord vert1 pt-3"
              children="Has Successfully completed the"
            />
            <Text
              className="colord pb-3 "
              children="SAGE INSTITUTE OF BUSINESS & MANAGMENT Program."
            />
            <Text className="vercourse" children="OPERATION MANAGEMENT" />
            <Text className="colord vert2 pt-3 pb-5" children="This certificate program introduces quantitative methods used to manage operations and make better management decisions." />
            </div>
            <div className="d-flex justify-content-between py-5">
                <div className="">

            <Text className="" children="From 24th of March to 17 to May, 2023" />
            <Image className="sign" src={sign}/>
            <Text className="fs-5 my-0 verth" children="Head of Academy" />
            <Text className="text-black" children="Cyril Okeleke" />
                </div>
                <div className=" ">
                    <Image className="crest" src={crest}/>
                </div>
            </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default ViewCert;
