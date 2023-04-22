import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import TextLinks from "../atom/TextLinks";
import Button from "../atom/Button";
import viewA from "../../images/certa.png";
import viewB from "../../images/certb.png";
import viewC from "../../images/certc.png";
import viewD from "../../images/certd.png";
import viewE from "../../images/certe.png";
import viewF from "../../images/certf.png";
import viewG from "../../images/certg.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Certification = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 0,
        y:0,
        transition: { duration: 2 },
      });
    }
    if(!inView){
      animation.start({opacity:1,y: 50})
    }
  }, [inView]);
  return (
    <div >
      <h2 className="text-center py-4 py-lg-5 text-black">
        Certification Courses
      </h2>
      <div  className="d-flex flex-wrap gap-3 justify-content-center">
        <motion.div  className="cert-box p-4" ref={ref} animate={animation}>
          <div className="training-logo">
            <Image src={viewA} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Marketing</h5>
            <Text
              children="Master the principles of 360 marketing for business growth."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </motion.div>
        <motion.div  className="cert-box p-4">
          <div ref={ref} animate={animation} className="training-logo">
            <Image src={viewB} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Operations Management </h5>
            <Text
              children="Become a business operator and master high level management skills."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </motion.div>
        <motion.div className="cert-box p-4">
          <div className="training-logo" ref={ref} animate={animation}>
            <Image src={viewC} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Product Management </h5>
            <Text
              children="Learn Product Management, a highly demanded corporate tech skill."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </motion.div>
        <motion.div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewD} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Agile Project Management</h5>
            <Text
              children="Master Agile methodologies for efficiently managing corporate projects."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </motion.div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewE} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Business Analysis</h5>
            <Text
              children="Master and deploy Data Analytics skills into business for predictive analysis."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewF} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>International Business</h5>
            <Text
              children="Understand international laws, practices and skills to compete globally."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewG} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Innovation & Design Thinking</h5>
            <Text
              children="Learn how the most successful startups build project that gets users hooked."
              className="training-text cert-text "
            />
            <TextLinks
              to="#"
              children="View Course"
              className="view cert-text"
            />
          </div>
        </div>
      </div>
      <div className="viewbtn m-auto py-4">
        <Button
          className="w-100 d-flex justify-content-center btn header-btn"
          children="View all courses"
        />
      </div>
    </div>
  );
};

export default Certification;
