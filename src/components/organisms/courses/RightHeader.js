import React, { useState, useRef } from "react";
import Search from "../../molecules/Search";
import Image from "../../atom/Image";
import Pagination from "../../molecules/Pagination";
import Button from "../../atom/Button";
import searchi from "../../../images/searchi.png"
import filterlist from "../../../images/viewfilter.png"
import Filter from "./Filter";

const RightHeader = () => {
  const [search, setSearch] = useState(false)
  const [clen, setClen] = useState()

  const searchbar = useRef()
  const chkdrop = useRef()

  const handleSearch=()=>{
    setSearch(!search)
  }
  
  const handleChk = () =>{
    if (chkdrop.current.className === "secondfil"){

      chkdrop.current.className += " hide"
    }else{
      chkdrop.current.className = "secondfil"
    }
  }
  
 
  return (
    <>
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 d-flex align-items-center justify-content-between">
          <div>

          <h5>{clen} Available Courses</h5>
          </div>
          <div className="filicon d-lg-none d-flex">
            <Button className="btn" onClick={handleSearch} children={<Image className="w-75" src={searchi}/>}/>
            <Button className="btn" onClick={handleChk} children={<Image className="w-75" src={filterlist}/>}/>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 p-0 pb-3 d-none d-lg-block" ref={searchbar}>
          <Search
            inputtype="text"
            searchplaceholder="What do you want to learn"
            inputclass="col rounded-start srchinp form-control"
            className="row"
          />
        </div>
        {search &&<div className="col-sm-12 col-md-12 col-lg-6 p-0 searchright" ref={searchbar}>
          <Search
            inputtype="text"
            searchplaceholder="What do you want to learn"
            inputclass="col rounded-start srchinp form-control"
            className="row"
          />
        </div>}
      </div>
      
      <div className='secondfil' ref={chkdrop} >
      
      <h5 className='text-center pb-4'>Filter by</h5>
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

      
    </div>

        <Pagination setClen={setClen} />
      
    </>
  );
};

export default RightHeader;
