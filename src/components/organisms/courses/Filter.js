import React from "react";
import Input from "../../atom/Input";

const Filter = ({ h5, p1, p2, p3, p4, p5, fifth="d-flex gap-2" }) => {
  return (
    <div className="leftfilter">
      <h5 className="">{h5}</h5>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" className="position-absolute chk" />
        </label>
        <p className="m-1">{p1}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" className="position-absolute chk" />
        </label>
        <p className="m-1">{p2}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" className="position-absolute chk" />
        </label>
        <p className="m-1">{p3}</p>
      </div>
      <div className="d-flex gap-2">
        <label className="check my-2">
          <Input type="checkbox" className="position-absolute chk" />
        </label>
        <p className="m-1">{p4}</p>
      </div>
      <div className={fifth} >
        <label className="check my-2 ">
          <Input type="checkbox" className="position-absolute chk" />
        </label>
        <p className="m-1">{p5}</p>
      </div>
      
    </div>
  );
};

export default Filter;
