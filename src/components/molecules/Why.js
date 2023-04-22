import React from "react";
import Image from "../atom/Image";
import firstwhy from "../../images/image 7.png";
import secondwhy from "../../images/image 7 (1).png";
import Text from "../atom/Text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Why = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
      animation.start({opacity:0, y:50})
    }
  }, [inView])
  return (
    <div className="training p-4 p-lg-5">
      <h2 className="text-center pb-5 text-black">Why SAGE?</h2>
      <motion.div ref={ref} animate={animation} >
        <div className="w-100 d-flex flex-column-reverse flex-lg-row gap-4 my-3">
          <div className="why-logo">
            <Image src={firstwhy} className="why-logo-img" />
          </div>
          <div className="w-100 why-second p-4 d-flex flex-column justify-content-center">
            <h2>100% Flexible</h2>
            <Text
              className="why-text pt-3"
              children="Whether you are a student, an employee working for a corporation, a freelancer or a business owner, you have to learn and keep growing. Which is why all our business skills are broken down into short, bite-sized courses that can be mastered at your own pace, and in a matter of hours. We have streamlined these courses to remove bogus theories and focus exclusively on business use cases, practical examples and lessons directly to the core of any business skill you want to master."
            />
          </div>
        </div>
        <div className="w-100 d-flex gap-4 my-4 flex-lg-row-reverse flex-column">
          <div className="why-logo px-4 py-4 py-lg-0 d-flex flex-column justify-content-center">
            <h2>Learn Skills Fast</h2>
            <Text className="why-text pt-3" children="Speed is woven into our DNA, and that manifests in the courses you learn with Sage. Whether you have an interview to prepare for, or you need to learn a skill quickly for a client project or you want to compete in the workplace or ascend to a promotion, our courses are tailored to help you achieve that in record time."/>
          </div>
          <div className="w-100 why-second why-color2 px-4 d-flex flex-column justify-content-center">
            <h2>Globally Accredited</h2>
            <Text
              className="why-text pt-3"
              children="Sage Institute is globally accredited in Africa, US & Canada by various reputable institutions, we are also backed by various reputable educational institutions including but not limited to Pluralcode Academy and Skill Development Council of Canada. All our courses have a track record of success stories from alumni and current students who have seen massive career growth."
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column-reverse flex-lg-row gap-4">
          <div className="why-logo why-color3 p-4 d-flex flex-column justify-content-center">
            <h2>Career Benefits</h2>
            <Text
              className="why-text pt-3"
              children="Sage courses go beyond just learning hard skills. Learners have access to massive career benefits including soft skills training, a globally verifiable certificate, interview prep lessons & career advisory modules that are designed to let you stand out no matter what your chosen field is."
            />
          </div>
          <div className="w-100 why-second">
            <Image src={secondwhy} className="why-logo-img" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
