import React, { useState } from "react";
import Input from "../../atom/Input";

const Filter = ({ h5, p1, p2, p3, p4, p5,p6, p7, p8, p9, p10, fifth="d-flex gap-2", fifth1="d-flex gap-2", fifth2="d-flex gap-2", fifth3="d-flex gap-2" }) => {

  const [check] = useState(true)

  const courseArr= []
  
  localStorage.setItem("checkb",JSON.stringify(courseArr))
  
  
  return (
    <div className="leftfilter">
      <h5 className="">{h5}</h5>
      <div className="d-flex gap-2">
        <label className="check my-2" >
          <Input type="checkbox"  value={check} onChange={(e)=>{
           
            if(e.target.checked){
              console.log("checked")
              console.log("t",e.target.value)
              console.log(check)
              courseArr.push(p1)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }else{
              console.log("unchecked")
            }
          

          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p1}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" value={check} onChange={(e)=>{
            
            if(e.target.checked){
              // courseArr.pop()
            courseArr.push(p2)
            localStorage.setItem("checkb",JSON.stringify(courseArr))
          }

          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p2}</p>
      </div>
      <div className={fifth}>
        <label className="check my-2">
          <Input type="checkbox"  value={check} onChange={(e)=>{
            if(e.target.checked === true){
              courseArr.push(p3)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }
            
          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p3}</p>
      </div>
      <div className={fifth1}>
        <label className="check my-2">
          <Input type="checkbox" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p4)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }

          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p4}</p>
      </div>
      <div className={fifth2} >
        <label className="check my-2 ">
          <Input type="checkbox" id="chk5" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p5)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p5}</p>
      </div>
      <div className={fifth3} >
        <label className="check my-2 ">
          <Input type="checkbox" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p6)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p6}</p>
      </div>
      <div className={fifth3} >
        <label className="check my-2 ">
          <Input type="checkbox"  value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p7)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p7}</p>
      </div>
      <div className={fifth3} >
        <label className="check my-2 ">
          <Input type="checkbox"  value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p8)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p8}</p>
      </div>
      <div className={fifth3} >
        <label className="check my-2 ">
          <Input type="checkbox"  value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p9)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p9}</p>
      </div>
      <div className={fifth3} >
        <label className="check my-2 ">
          <Input type="checkbox" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p10)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }


          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p10}</p>
      </div>
      
    </div>
  );
};

export default Filter;
