import React from 'react'
import Text from '../../atom/Text'
import  Button  from '../../atom/Button'
import Image from '../../atom/Image'
import likewhite from '../../../images/likewhite.png'
import starwhite from '../../../images/Frame 60964.png'

const Box = () => {
  return (
    <div className='box-each row'>

    <div className='col-sm-12 col-md-12 col-lg-7 p-0'>
        <h2 className='fs-1'>Operations Management</h2>
      <Text className="box-eachtxt" children="Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. " />
      <p className="eachtime pt-3 mb-0" >Duration:<span> 3hours</span> |<span> Beginner Level</span> | <span>100% Online</span></p>
      <div className='eachtime2 py-2 pb-3'>
        <Image src={starwhite} /><span> 24,369 ratings </span> | <Image src={likewhite}/><span> 67%</span>
      </div>
    </div>
    <div className='col-sm-12 col-md-12 col-lg-5 p-0 d-flex align-items-center justify-content-end'>
        <Button className="btn cert-btn" children="Enroll" />
    </div>
    </div>
  )
}

export default Box
