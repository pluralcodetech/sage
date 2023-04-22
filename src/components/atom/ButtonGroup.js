import React from 'react'

const ButtonGroup = ({num, length}) => {
  // console.log(num)
  return (
    <>
    <div className='ms-auto rounded-5 px-3 h-25 m-3 butgroup justify-content-center d-flex align-items-center'>
      <span className='fs-1'>&#8249;</span>{num}/0{length}<span className='fs-1'>&#8250;</span>
    </div>
    </>
  )
}

export default ButtonGroup
