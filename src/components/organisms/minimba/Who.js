import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import pic from '../../../images/Group 24.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Who = () => {
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
    <div className='training p-4 p-lg-5'>
      <h2 className='text-black text-center'>Who is the Mini-MBA designed for?</h2>
      <motion.div ref={ref} animate={animation} className='w-100 py-5 d-flex flex-column flex-lg-row gap-4 justify-content-between'>
        <div className='who-box d-flex flex-column justify-content-center align-items-center'>
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Small Business Owners" />
            <Text className="who-text px-4" children="You are a small business owner looking to learn the skills needed to run and grow your enterprise." />
        </div>

        <div className='who-box d-flex flex-column justify-content-center align-items-center'>
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Managers" />
            <Text className="who-text px-4" children="You manage one or more departments within a company and you are looking to sharpen your team." />
        </div>

        <div className='who-box d-flex flex-column justify-content-center align-items-center'>
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Freelancers / Solopreneurs" />
            <Text className="who-text px-4" children="You like the freedom of working for yourself and you need the skills to grow and manage your income." />
        </div>

        <div className='who-box d-flex flex-column justify-content-center align-items-center'>
            <div>

            <Image className="" src={pic}/>
            </div>
            <Text className="" children="Corporate Leaders" />
            <Text className="who-text px-4" children="You are the head of finance, tech, human resource, operations etc and you need to up-skill rapidly." />
        </div>

      </motion.div>
    </div>
  )
}

export default Who
