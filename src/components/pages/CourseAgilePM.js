import React from 'react'
import HeaderEchC from '../organisms/eachCourse/HeaderEchC'
import AboutC from '../organisms/eachCourse/AboutC'
import Benefits from '../organisms/eachCourse/Benefits'
import Video from '../molecules/Video'
import Learn from '../organisms/eachCourse/Learn'
import Box from '../organisms/eachCourse/Box'
import Say from '../molecules/Say'
import CaseStudy from '../molecules/CaseStudy'
import Footer from '../molecules/Footer'

const CourseAgilePM = () => {
  return (
    <div>
      <HeaderEchC childreneach="Agile Project Management"/>
      <AboutC />
      <Benefits/>
      <Video />
      <Learn />
      <div className="px-4 px-lg-5 py-2">
        <Box boxtitle="Agile Project Management"/>
      </div>
      <Say />
      <CaseStudy newCase="#fff" pbCase="4rem"/>
      <Footer />
    </div>
  )
}

export default CourseAgilePM
