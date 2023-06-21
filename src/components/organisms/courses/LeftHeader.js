import React from 'react'
import Filter from './Filter'
import TextLinks from '../../atom/TextLinks'

const LeftHeader = () => {
  return (
    <div className='pt-3'>
      
      <h5 className='text-center pb-4'>Filter by</h5>
      <div className='py-3'>
        <Filter h5="Subject" p1="Operation Management" p2="Operation Management" p3="Operation Management" p4="Operation Management" p5="Operation Management" />
        <div className='text-center see-course'>
        {/* <TextLinks to="#" children="See more" className="txt" /> */}
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Skills" p1="Management" p2="Analytics" p3="Marketing" p4="Leadership" p5="Operation" idp1="management" dp2="analytics" dp3="marketing" dp4="leadership" dp5="operation" />
        <div className='text-center see-course'>
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Level" p1="Beginner" p2="Intermediate" p3="Advanced" p4="Mixed" fifth='d-none' idp1="beginner" dp2="intermediate" dp3="advanced" dp4="mixed"  />
        <div className='text-center see-course'>
        {/* <TextLinks to="#" children="See more" className="txt" /> */}
        </div>
      </div>
      <div className='py-2'>
        <Filter h5="Duration" p1="Less than 2 hours" p2="1-4 weeks" p3="1-3 months" p4="3-6 months" fifth='d-none'/>
        <div className='text-center see-course'>
        {/* <TextLinks to="#" children="See more" className="txt" /> */}
        </div>
      </div>
    </div>
  )
}

export default LeftHeader
