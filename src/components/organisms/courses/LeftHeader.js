import React from 'react'
import Filter from './Filter'
import TextLinks from '../../atom/TextLinks'

const LeftHeader = () => {
  return (
    <div>
      <h4>Filter by</h4>
      <div className='w-50'>
        <Filter h5="Subject" p1="Operation Management" p2="Operation Management" p3="Operation Management" p4="Operation Management" p5="Operation Management" />
        <TextLinks to="#" children="See more" className="w-100 txt" />
      </div>
    </div>
  )
}

export default LeftHeader
