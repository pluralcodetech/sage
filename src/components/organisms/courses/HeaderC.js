import React from 'react'
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

const HeaderC = () => {
  return (
    <div className='row p-4 p-lg-5 headerc'>
      <div className='col-sm-12 col-md-12 col-lg-3 p-0 leftfilterr'>

      <LeftHeader  />
      </div>
      <div className='col p-0'>
        <RightHeader/>
      </div>
    </div>
  )
}

export default HeaderC
