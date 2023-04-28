import React from 'react'
import Filter from './Filter'
import TextLinks from '../../atom/TextLinks'

const LeftHeader = () => {
  return (
    <div className='pt-3'>
      
      <h5 className='text-center'>Filter by</h5>
      <div className='py-4'>
        <Filter h5="Subject" p1="Operation Management" p2="Operation Management" p3="Operation Management" p4="Operation Management" p5="Operation Management" />
        <div className='text-center see-course'>

        <TextLinks to="#" children="See more" className="txt" />
        </div>
      </div>
    </div>
  )
}

export default LeftHeader
