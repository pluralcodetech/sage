import React from 'react'
import HeaderA from '../organisms/about/HeaderA'
import Culture from '../organisms/about/Culture'
import Impact from '../organisms/about/Impact'
import Why from '../molecules/Why'
import ReachOut from '../organisms/about/ReachOut'
import CaseStudy from '../molecules/CaseStudy'
import Faq from '../molecules/Faq'
import Footer from '../molecules/Footer'

const AboutUs = () => {
  return (
    <>
      <HeaderA/>
      <Culture/>
      <Impact/>
      <Why/>
      <ReachOut/>
      <CaseStudy/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default AboutUs
