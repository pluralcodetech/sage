import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import Search from '../../molecules/Search'
import verifyimg from "../../../images/verifyimg.png"

const HeaderV = () => {
  return (
    <div className='row dark-color p-4 p-lg-5 gap-3 justify-content-between align-items-center'>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow' data-aos="zoom-in-up" data-aos-duration="2000">
        <h2 className='verifytext'>Verify <span>Our Student</span> Credentials</h2>
        <Text className="verifytext2 py-2 py-xxl-0" children="Verify certificates issued by Sage, kindly enter the certificate number below to validate its authenticity." />
        <div className="col-sm-12 col-md-12 col-lg-8 col-xxl-6 p-0">
          <Search
            inputtype="text"
            searchplaceholder="Enter certificate number here"
            inputclass="col rounded-start srchinp inpverify form-control"
            className="row "
          />
        </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 verifyrow verifyimg' data-aos="zoom-in-down" data-aos-duration="2000">
        <Image className="w-100" src={verifyimg}/>
      </div>
    </div>
  )
}

export default HeaderV
