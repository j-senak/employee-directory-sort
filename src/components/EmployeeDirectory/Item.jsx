import React from "react";

const Item = (props) => {
  return <div className="row">
  <div className="col">{props.name}</div>
  <div className="col">{props.id}</div>
  <div className="col">{props.position}</div>
  <div className="col">{props.phone}</div>
    </div>
};

export default Item;
