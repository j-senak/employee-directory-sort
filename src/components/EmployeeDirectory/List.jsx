import React from "react";
import Item from "./Item";
import "./List.css";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        {/* <h1>You have {props.employees.length} employees.</h1> */}
        <div className="col-3">Employee Name</div>
        <div className="col-3">Employee ID</div>
        <div className="col-3">Position</div>
        <div className="col-3">Phone Number</div>
      </div>
      <div>
            {props.employees.map((employee) => (
              <Item {...employee}/>
            ))}
        </div>
        </div>
  );
};

export default List;
