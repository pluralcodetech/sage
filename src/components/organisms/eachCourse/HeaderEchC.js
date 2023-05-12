import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import staryellow from '../../../images/star.png'
import likeyellow from '../../../images/likeyellow.png'
import Button from '../../atom/Button'
import TextLinks from '../../atom/TextLinks'

const HeaderEchC = ({childreneach}) => {
  return (
    <div className='text-lg-center training headereach'>
      <Text className="eachtitle" children={childreneach}/>
      <Text className="eachbody" children="Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor." />
      <p className="eachtime pt-3 mb-0" >Duration:<span> 3hours</span> |<span> Beginner Level</span> | <span>100% Online</span></p>
      <div className='eachtime2 py-2 pb-3'>
        <Image src={staryellow} /><span> 24,369 ratings </span> | <Image src={likeyellow}/><span> 67%</span>
      </div>
      <div className='mb-5'>
        <TextLinks to="/checkout" children={<Button className="btn cert-btn" children="Enroll" />} />
      </div>
    </div>
  )
}

export default HeaderEchC
