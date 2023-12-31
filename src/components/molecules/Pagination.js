import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CourseList from "./CourseList";
// import Search from "../../molecules/Search";
import Text from "../atom/Text";
import TextLinks from "../atom/TextLinks";
import star from "../../images/star.png";
import course from "../../images/course.png";
import clock from "../../images/clock.png";
import system from "../../images/system.png";
import Image from "../atom/Image";

const Pagination = ({ setClen }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);

  localStorage.setItem("course",JSON.stringify(CourseList));
  const cc = JSON.parse(localStorage.getItem("course"))
  const getName = JSON.parse(localStorage.getItem("checkb"))
  const arr = []
  arr.push(getName)


  useEffect(() => {
    setData(cc);
  }, [cc]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  setClen(data.length);
  const currentPosts = data
    .map((list) => {
      
      return list;
    }).filter(n=>{
      for (let a of getName){
      if(n.title.includes(a) && n.skills[0] === a && n.level !== a ){
        return n
      }
      
    } 
      if (getName.length ===0){
       
        return n
      }
      return null
      
      
    })
    .slice(firstPostIndex, lastPostIndex);
    console.log(currentPosts)
  const each = currentPosts.map((eachtitle) => (
    <div
      key={eachtitle.id}
      className="cert-box-course p-3 col-sm-12 col-md-12 col-lg-4"
    >
      <div className="training-logo">
        <Image src={eachtitle.img} className="training-logo" />
      </div>
      <div className="pt-3 certbc">
        <h5>{eachtitle.title}</h5>
      </div>
      <div className="">
        <div>
          <Image src={star} alt="" />
        </div>
        <div>
          <div className="d-flex">
            <div className="d-flex align-items-center  iconw ">
              <Image src={course} alt="" className="w-50" />
            </div>
            <Text className="moduletext m-0" children="Courses certificate" />
          </div>
          <div className="d-flex">
            <div className="d-flex align-items-center iconw">
              <Image src={clock} alt="" className="w-50" />
            </div>
            <Text className="moduletext m-0" children="3hours (self-paced)" />
          </div>
          <div className="d-flex ">
            <div className="d-flex align-items-center iconw">
              <Image src={system} alt="" className="icons2" />
            </div>
            <Text className="moduletext m-0" children="100% online" />
          </div>
        </div>
      </div>
      <TextLinks to={eachtitle.link} children="View Course" className="view" />
    </div>
  ));

  const pageCount = Math.ceil((currentPosts.length +1 ) / postPerPage);
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setCurrentPage(newOffset);
  };
  return (
    <div className="row gap-4 pt-5 pb-4 px-2 cc">
      {each}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="page d-flex justify-content-center justify-content-lg-end align-items-end"
        pageLinkClassName="lin"
        pageClassName="page-class"
        activeClassName="page-active"
        activeLinkClassName="activelin"
        previousClassName="label"
        nextClassName="label"
        previousLinkClassName="labellink"
        nextLinkClassName="labellink"
      />
    </div>
  );
};

export default Pagination;
