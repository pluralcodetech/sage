import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import aboutimg from "../../../images/Group 20648.png"

const HeaderA = () => {
  return (
    <div className='row dark-color p-4 p-lg-5 gap-3 justify-content-between align-items-center'>
    <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow' data-aos="zoom-in-up" data-aos-duration="2000">
      <h2 className='verifytext'>About <span>SAGE Institute Of </span>Business & MGT</h2>
      <Text className="abouttext py-2 py-xxl-0" children="Sage Institute is an internationally accredited School of Business & Management. We believe that business skills should be accessible to everyone globally and regardless of income levels, this is the first step in creating entrepreneurs and corporate professionals that make a difference." />
    </div>
    <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow verifyimg' data-aos="zoom-in-down" data-aos-duration="2000">
      <Image className="w-100" src={aboutimg}/>
    </div>
  </div>
  )
}

export default HeaderA
