import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import CourseList from './CourseList';
// import Search from "../../molecules/Search";
import Text from "../atom/Text";
import TextLinks from "../atom/TextLinks";
import star from "../../images/star.png";
import course from "../../images/course.png";
import clock from "../../images/clock.png";
import system from "../../images/system.png";
import Image from "../atom/Image";



const Pagination = () => {
 const [data, setData] = useState([]);
 const [currentPage,setCurrentPage] = useState(1);
 const [postPerPage] = useState(9)

 useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response=>response.json())
//     .then(data=>setData(data))
setData(CourseList)
 },[])

 const lastPostIndex = currentPage * postPerPage;
 const firstPostIndex = lastPostIndex - postPerPage;
 const currentPosts = data.map(list=>{
    return list}).slice(firstPostIndex,lastPostIndex)
 console.log(currentPosts)
 const each = currentPosts.map(eachtitle=> 
 <div
 key={eachtitle.id}
   className="cert-box-course p-3 col-sm-12 col-md-12 col-lg-4"
   data-aos="fade-up"
   data-aos-duration="2000"
 >
   <div className="training-logo">
     <Image src={eachtitle.img} className="training-logo" />
   </div>
   <div className="pt-3 certb">
     <h5>{eachtitle.title}</h5>
   </div>
   <div className=''>
     <div>
       <Image src={star} alt="" />
     </div>
     <div>
       <div className="d-flex">
         <div className="d-flex align-items-center  iconw ">
           <Image src={course} alt="" className="w-50" />
         </div>
         <Text
           className="moduletext m-0"
           children="Courses certificate"
         />
       </div>
       <div className="d-flex">
         <div className="d-flex align-items-center iconw" >
           <Image src={clock} alt="" className="w-50"/>
         </div>
         <Text
           className="moduletext m-0"
           children="3hours (self-paced)"
         />
       </div>
       <div className="d-flex ">
         <div className="d-flex align-items-center iconw">
           <Image src={system} alt="" className="icons2" />
         </div>
         <Text className="moduletext m-0" children="100% online" />
       </div>
     </div>
   </div>
   <TextLinks to={eachtitle.link} children="View Course" className="view"/>
 </div>
 
)
const pageCount =  Math.ceil(data.length/postPerPage)
const handlePageClick = (event) => {
    const newOffset = (event.selected + 1 );
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
        className='page d-flex justify-content-center justify-content-lg-end align-items-end'
        pageLinkClassName='lin'
        pageClassName='page-class'
        activeClassName='page-active'
        activeLinkClassName='activelin'
        previousClassName='label'
        nextClassName='label'
        previousLinkClassName='labellink'
        nextLinkClassName='labellink'
      />
    </div>
  )
}

export default Pagination
