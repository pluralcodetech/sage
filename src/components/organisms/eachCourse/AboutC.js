import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import profile from '../../../images/profile.png'
import abtimgA from '../../../images/Frame 60999.png'
import abtimgB from '../../../images/Frame 60999 (1).png'

const AboutC = () => {
  return (
    <div className='px-4 px-lg-5 py-4 py-lg-5 abtC'>
      <h2 className='d-none d-lg-block text-center py-lg-5 text-black'>About Courses</h2>
      <div className='row align-items-center'>
        <div className='col-sm-12 col-md-12 col-lg-6 p-0'>
            <Text className="abtC-textone" children="About this course" />
            <Text className="abtC-texttwo " children="1,388,463 recent views" />
            <Text className="abtC-textthree" children="Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. Netus maecenas sit augue pretium interdum. Lorem ipsum dolor sit amet consectetur. Tellus nullam et mauris diam et lobortis tincidunt neque arcu. Aliquam eu adipiscing massa posuere pulvinar nulla tortor. Netus maecenas sit augue pretium interdum. " />
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6 abt-body p-0'>
            <div className='blueleft'></div>
            <div className='blueright'></div>
            <div className='square'>
                <div className='d-flex gap-3 py-4'>
                    <div className="square-logo">
                        <Image src={profile} />
                    </div>
                    <Text className="square-text" children="Learner Career Outcomes" />
                </div>
                <div className='d-flex gap-3 '>
                    <div className="square-logo2">
                        <Image src={abtimgA} />
                    </div>
                    <Text className="square-textone" children="26%" />
                    <Text className="square-texttwo" children="started a new career after completing these courses" />
                </div>
                <div className='d-flex gap-3 '>
                    <div className="square-logo3">
                        <Image src={abtimgB} />
                    </div>
                    <Text className="square-textone" children="35%" />
                    <Text className="square-texttwo" children="got a tangible career benefit from this course" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutC
