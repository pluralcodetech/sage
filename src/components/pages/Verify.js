import React from 'react'
import HeaderV from '../organisms/verify/HeaderV'
import Training from '../molecules/Training'
import Why from '../molecules/Why'
import Say from '../molecules/Say'
import Video from '../molecules/Video'
import MBA from '../molecules/MBA'
import CaseStudy from '../molecules/CaseStudy'
import Faq from '../molecules/Faq'
import Footer from '../molecules/Footer'


const Verify = () => {
  return (
    <>
    <HeaderV/>
    <Training/>
    <Why/>
    <Say/>
    <Video/>
    <div className="w-100 px-4 px-lg-5 py-3 box">

    <MBA/>
    </div>
    <CaseStudy/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Verify
