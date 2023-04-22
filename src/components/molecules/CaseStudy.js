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
  }, [inView]);
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
  }, [inView])
  return (
    <div className="training p-4 p-lg-5">
      <h2 className="text-center text-black">Real-World Case Studies</h2>
      <Text
        className="case-text m-auto text-justify text-lg-center"
        children="Success leaves clues, and so our courses allow you to learn from the most successful companies, their highs and lows and apply those lessons to the subject matter and to your own profession or business."
      />
      <div className="case-mainlogo m-auto mt-5 py-5 d-flex flex-column align-items-center justify-content-center gap-5">
        <motion.div ref={ref} animate={animation} className="w-100 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap gap-4 gap-lg-2">
          <div className="case-logo">
            <Image src={microsoft} alt="microsoft" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={google} alt="google" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={tiktok} alt="tiktok" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={apple} alt="apple" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={toyota} alt="toyota" className="w-100" />
          </div>
        </motion.div>
        <motion.div ref={ref} animate={anima}  className="w-100 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap gap-4 ">
          <div className="case-logo">
            <Image src={jp} alt="jpmorganchase" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={nike} alt="nike" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={paypal} alt="paypal" className="w-100" />
          </div>
        </motion.div>
        <motion.div ref={ref} animate={animation} className="w-100 mt-lg-4 d-flex align-items-center justify-content-center ">
          <div className="case-logo">
            <Image src={motorola} alt="motorola" className="w-100" />
          </div>
          <div className="case-logo">
            <Image src={flutter} alt="flutterwave" className="w-100" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
