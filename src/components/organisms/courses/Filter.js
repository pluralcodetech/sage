import React, { useState } from "react";
import Input from "../../atom/Input";

const Filter = ({ h5, p1, p2, p3, p4, p5, fifth="d-flex gap-2", idp1, idp2, idp3, idp4, idp5 }) => {

  const [check,setCheck] = useState(true)

  const courseArr= []
  
  localStorage.setItem("checkb",JSON.stringify(courseArr))
  
  
  return (
    <div className="leftfilter">
      <h5 className="">{h5}</h5>
      <div className="d-flex gap-2">
        <label className="check my-2" htmlFor={idp1}>
          <Input type="checkbox" id="chk1" value={check} onChange={(e)=>{
           
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
          <Input type="checkbox" id="chk2" value={check} onChange={(e)=>{
            
            if(e.target.checked){
              // courseArr.pop()
            courseArr.push(p2)
            localStorage.setItem("checkb",JSON.stringify(courseArr))
          }

          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p2}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" id="chk3" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              courseArr.push(p3)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }
            
          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p3}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" id="chk4" value={check} onChange={(e)=>{
            if(e.target.checked === true){
              // courseArr.pop()
              courseArr.push(p4)
              localStorage.setItem("checkb",JSON.stringify(courseArr))
            }

          }} className="position-absolute chk" />
        </label>
        <p className="m-1">{p4}</p>
      </div>
      <div className={fifth} >
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
      
    </div>
  );
};

export default Filter;
