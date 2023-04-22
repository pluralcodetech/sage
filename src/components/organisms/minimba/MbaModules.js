import React from "react";
import Text from "../../atom/Text";
import Image from "../../atom/Image";
import viewA from "../../../images/certa.png";
import viewB from "../../../images/certb.png";
import viewC from "../../../images/certc.png";
import viewD from "../../../images/certd.png";
import viewE from "../../../images/certe.png";
import viewF from "../../../images/certf.png";
import viewG from "../../../images/certg.png";
import star from "../../../images/star.png";
import course from "../../../images/course.png";
import clock from "../../../images/clock.png";
import system from "../../../images/system.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const MbaModules = () => {
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
      animation.start({opacity:0,y: 100})
    }
  }, [inView]);
  return (
    <div>
      <h2 className="text-center py-4 py-lg-5 text-black">
        Mini MBA Modules
      </h2>
      <motion.div ref={ref} animate={animation} className="d-flex flex-wrap gap-3 justify-content-center">
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewA} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Marketing</h5>
            <Text
              children="Master the principles of 360 marketing for business growth."
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewB} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Operations Management </h5>
            <Text
              children="Become a business operator and master high level management skills."
              className="training-text cert-text mb-1 "
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewE} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Business Analysis</h5>
            <Text
              children="Master and deploy Data Analytics skills into business for predictive analysis."
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
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
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewC} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Product Management </h5>
            <Text
              children="Learn Product Management, a highly demanded corporate tech skill."
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cert-box p-4">
          <div className="training-logo">
            <Image src={viewD} className="training-logo" />
          </div>
          <div className="pt-3">
            <h5>Agile Project Management</h5>
            <Text
              children="Master Agile methodologies for efficiently managing corporate projects."
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
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
              className="training-text cert-text mb-1"
            />
            <div>
              <div >
                <Image src={star} alt="" />
              </div>
              <div>
                <div className="d-flex gap-1">
                  <div className="">
                    <Image src={course} alt="" className="w-100" />
                  </div>
                  <Text className="moduletext m-0" children="Courses certificate" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={clock} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="3hours (self-paced)" />
                </div>
                <div className="d-flex gap-1">
                  <div>
                    <Image src={system} alt="" />
                  </div>
                  <Text className="moduletext m-0" children="100% online" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MbaModules;
