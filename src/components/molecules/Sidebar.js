import React from 'react'
import TextLinks from '../atom/TextLinks'
import Button from '../atom/Button' 

const Sidebar = () => {
  return (
    <div className="px-5 py-4 nav-container">
      <div className="list-container">
        <div className="navlist d-flex justify-content-center gap-4">
          <TextLinks to="#" children="Home" />
          <div className="d-flex items-center">
            <TextLinks to="#" children="Courses" />
            <box-icon name="chevron-down"></box-icon>
          </div>
          <TextLinks to="#" children="About Sage" />
          <div className="d-flex items-center">
            <TextLinks to="#" children="More" />
            <box-icon name="chevron-down"></box-icon>
          </div>
        </div>
        <div className="navbtn-container">
          <Button children="Login" className="btn px-4 logBtn m-2" />
          <Button children="Sign up" className="btn px-4 signBtn m-2" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
