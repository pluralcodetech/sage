import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
// import Search from '../../molecules/Search'
import verifyimg from "../../../images/Group 20649.png"

const HeaderP = () => {
  return (
    <div className='row dark-color p-4 p-lg-5 gap-3 justify-content-between align-items-center'>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow' data-aos="zoom-in-up" data-aos-duration="2000">
        <h2 className='verifytext'>Meet <span>Our Partners</span> For Good</h2>
        <Text className="verifytext2 py-2 py-xxl-0" children="Our distinguished partners make it possible for us to provide world-class business education across the globe." />
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow verifyimg' data-aos="zoom-in-down" data-aos-duration="2000">
        <Image className="w-100" src={verifyimg}/>
      </div>
    </div>
  )
}

export default HeaderP
