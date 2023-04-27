import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import microsoft from "../../images/microsoft.png";
import google from "../../images/google.png";
import tiktok from "../../images/tiktok.png";
import apple from "../../images/apple.png";
import toyota from "../../images/toyota.png";
import jp from "../../images/jp.png";
import nike from "../../images/nike.png";
import paypal from "../../images/paypal.png";
import motorola from "../../images/motorola.png";
import flutter from "../../images/flutter.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const CaseStudy = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });
  const anima = useAnimation();
  const animation = useAnimation();
  useEffect(() => {

    if (inView) {
      animation.start({
        opacity: 1,
        x:0,
        transition: { duration: 2 },
      });
    }
    if(!inView){
      animation.start({opacity:0.5,x: -20})
    }
  }, [inView, animation]);
  useEffect(() => {
    if (inView) {
      anima.start({
        opacity: 1,
        x:0,
        transition: { duration: 2 },
      });
    }
    if(!inView){
      anima.start({opacity:0.5,x: 20})
    }
  }, [inView,anima])
  return (
    <div className="training p-4 p-lg-5">
      <h2 className="text-center text-black" data-aos="zoom-in-up" data-aos-duration="2000">Real-World Case Studies</h2>
      <Text
        className="case-text m-auto text-justify text-lg-center"
        data-aos="zoom-in-up" data-aos-duration="2000"
        children="Success leaves clues, and so our courses allow you to learn from the most successful companies, their highs and lows and apply those lessons to the subject matter and to your own profession or business."
      />
      <div className="case-mainlogo">
        <motion.div ref={ref} animate={animation} className="w-100 row justify-content-center pt-4 gap-3 align-items-center">
          <div className="case-logo col-sm-2">
            <Image src={microsoft} alt="microsoft" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={google} alt="google" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={tiktok} alt="tiktok" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={apple} alt="apple" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={toyota} alt="toyota" className="w-100" />
          </div>
        
          <div className="case-logo col-sm-2">
            <Image src={jp} alt="jpmorganchase" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={nike} alt="nike" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={paypal} alt="paypal" className="w-100" />
          </div>
        
          <div className="case-logo col-sm-2">
            <Image src={motorola} alt="motorola" className="w-100" />
          </div>
          <div className="case-logo col-sm-2">
            <Image src={flutter} alt="flutterwave" className="w-100" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
