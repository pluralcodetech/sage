import React from "react";
import Image from "../../atom/Image";
import Text from "../../atom/Text";
import partimg from "../../../images/Group 20647.png";

const Accredit = () => {
  return (
    <>
      <div className="accredit-container bg-white">
        <h2 className="text-center py-5" data-aos="zoom-in-up" data-aos-duration="2000">Our Partners And Accreditors</h2>
        <div className="row align-items-center rounded-5 px-2 py-4 px-lg-4 gap-3 gap-lg-0 accredit" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <Image className="w-100" src={partimg} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-9 ">
            <h2 className="red">Pluralcode Academy</h2>
            <Text
              className="accredittext"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing."
            />
          </div>
        </div>
        <div className="row align-items-center rounded-5 px-2 py-4 px-lg-4 accredit flex-lg-row-reverse gap-3 gap-lg-0" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Image className="w-100" src={partimg} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-9 d-flex flex-column align-items-lg-end">
            <h2 className="red">Pluralcode Academy</h2>
            <Text
              className="accredittext text-lg-end"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing."
            />
          </div>
        </div>
        <div className="row align-items-center rounded-5 px-2 py-4 px-lg-4 gap-3 gap-lg-0 accredit" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <Image className="w-100" src={partimg} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-9 ">
            <h2 className="red">Pluralcode Academy</h2>
            <Text
              className="accredittext"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing."
            />
          </div>
        </div>
        <div className="row align-items-center rounded-5 px-2 py-4 px-lg-4 accredit flex-lg-row-reverse gap-3 gap-lg-0" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Image className="w-100" src={partimg} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-9 d-flex flex-column align-items-lg-end">
            <h2 className="red">Pluralcode Academy</h2>
            <Text
              className="accredittext text-lg-end"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accredit;
