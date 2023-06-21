import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../atom/Image";
import quote1 from "../../images/openqt.png";
import quote2 from "../../images/closeqt.png";
import sayimg from "../../images/Group 4.png";
import sayimg2 from "../../images/Group 112.png";
import sayimg3 from "../../images/Group 20646.png";

const list = [
  {
    id: "01",
    name: "James",
    role: "Risk Management",
    img: sayimg,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque dicta, nihil nobis numquam accusamus exercitationem repellendus minima excepturi impedit.",
  },
  {
    id: "02",
    name: "James",
    role: "Risk Management",
    img: sayimg2,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque dicta, nihil nobis numquam accusamus exercitationem repellendus minima excepturi impedit.",
  },
  {
    id: "03",
    name: "James",
    role: "Risk Management",
    img: sayimg3,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque dicta, nihil nobis numquam accusamus exercitationem repellendus minima excepturi impedit.",
  },
];

const Carousell = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className=""
      // customButtonGroup={<ButtonGroup/>}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      // renderArrowsWhenDisabled={false}
      // renderButtonGroupOutside={true}
      // renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      rewind
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
      width="100%"
    >
      {list.map((eachlist) => {
        return (
          <>
            <div className="row ms-4 gap-5 gap-lg-0" key={eachlist.id}>
              <div className="saylogo p-0 col-sm-12 col-md-12 col-lg-6 ">
                <Image src={eachlist.img} alt="" className="saylogoimg" />
              </div>
              <div className="say2 col-sm-12 col-md-12 col-lg-6 p-0">
                <h2 className="fs-1 pb-4 std say saytext-box">
                  What <span className="std2">Our Students</span> Are Saying
                </h2>
                <div className="say-text">
                  <Image src={quote1} alt="" className="quote" />
                  <span id="stdname">
                    {" "}
                    {eachlist.name} |{" "}
                    <span className="stdtiny">{eachlist.role}</span>
                  </span>
                </div>
                <div className="mt-2 mb-4 mb-lg-0 mt-lg-3 ps-4 ms-1 say-comment">
                  <span className="">{eachlist.comment} </span>
                  <Image src={quote2} alt="" className="quote" />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Carousel>
  );
};

export default Carousell;
