import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'


const Pagination = () => {
 const [data, setData] = useState([]);
 const [currentPage,setCurrentPage] = useState(1);
 const [postPerPage] = useState(5)

 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response=>response.json())
    .then(data=>setData(data))
 },[])

 const lastPostIndex = currentPage * postPerPage;
 const firstPostIndex = lastPostIndex - postPerPage;
 const currentPosts = data.map(list=>{
    return list}).slice(firstPostIndex,lastPostIndex)
 console.log(currentPosts)
//  const each = currentPosts.map(eachtitle=> <p key={eachtitle.id}>{eachtitle.title}</p>)
const pageCount =  Math.ceil(data.length/postPerPage)
const handlePageClick = (event) => {
    const newOffset = (event.selected + 1 );
    setCurrentPage(newOffset);
  };
  return (
    <div className=''>
        {/* {each} */}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='page'
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
