import React from "react";
import Filter from "./Filter";
// import TextLinks from '../../atom/TextLinks'

const LeftHeader = () => {
  return (
    <div className="pt-3">
      <h5 className="text-center pb-4">Filter by</h5>
      <div className="py-3">
        <Filter
          h5="Subject"
          p1="Operations Management"
          p2="Product Management"
          p3="Agile Project Management"
          p4="Business Analytics"
          p5="International Business"
          p6="Accounting & Finance"
          p7="Growth Hacking"
          p8="Marketing"
          p9="Team Leadership"
          p10="Innovation & Design Thinking"
        />
        <div className="text-center see-course">
          {/* <TextLinks to="#" children="See more" className="txt" /> */}
        </div>
      </div>
      <div className="py-2">
        <Filter
          h5="Skills"
          p1="Management"
          p2="Analytics"
          p3="Marketing"
          p4="Leadership"
          p5="Operation"
          fifth3="d-none"
        />
        <div className="text-center see-course"></div>
      </div>
      <div className="py-2">
        <Filter
          h5="Level"
          p1="Certificate Courses"
          p2="Mini MBA Courses"
          fifth="d-none"
          fifth1="d-none"
          fifth2="d-none"
          fifth3="d-none"
        />
        <div className="text-center see-course">
          {/* <TextLinks to="#" children="See more" className="txt" /> */}
        </div>
      </div>
      {/* <div className='py-2'>
        <Filter h5="Duration" p1="Less than 2 hours" p2="1-4 weeks" p3="1-3 months" p4="3-6 months" fifth='d-none'/>
        <div className='text-center see-course'>
        
        </div>
      </div> */}
    </div>
  );
};

export default LeftHeader;
