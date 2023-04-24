import React from "react";
import Carousell from "./Carousell";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Say = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const anima = useAnimation();
  
  useEffect(() => {
    if (inView) {
      anima.start({
        opacity: 1,
        x:0,
        y:0,
        transition: { duration: 2 },
      });
    }
    if(!inView){
      anima.start({opacity:0,x: 20,y:-50})
    }
  }, [inView])
  return (
    <div className="p-4 p-lg-5 my-4 mag">
      <motion.div ref ={ref} animate={anima}className="w-100">
        <div className="py-0 py-xxl-5">
          {/* <h2 className="fs-1 pb-4 std say">
            What <span className="std2">Our Students</span> Are Saying
          </h2> */}
          <Carousell />
        </div>
      </motion.div>
    </div>
  );
};

export default Say;
