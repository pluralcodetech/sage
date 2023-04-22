import React from "react";
import Button from "../atom/Button";
import Text from "../atom/Text";
import Image from "../atom/Image";
import sagemini from "../../images/Group 17.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const MBA = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y:0,
        transition: { duration: 2 },
      });
    }
    if(!inView){
      animation.start({opacity:0,y: 50})
    }
  }, [inView]);
  return (
    <div>
      <h2 className="text-center my-5 text-black">Sage Mini MBA</h2>
      <motion.div ref={ref} animate={animation} className="w-100 d-flex flex-column flex-lg-row gap-5 align-items-center">
        <div className="w-100">
          <h2 className="fs-1 std">Stand Out With</h2>
          <h2 className="fs-1 std2">Sage Mini MBA</h2>
          <Text className="py-3 mbacol" children="Sage Mini MBA is one the most advanced program of its kind globally. The Mini MBA focuses gives you the same academic value of a full-time MBA in a streamlined and self-paced environment and for a fraction of the cost. Sage Mini MBA is backed internationally and adheres to global standards for advanced business studies."/>
          <Button className="btn header-btn" children="Get Started"/>
        </div>
        <div className="w-100 d-flex justify-content-end">
          <Image className="mbalogo" src={sagemini} />
        </div>
      </motion.div>
    </div>
  );
};

export default MBA;
