import React from "react";
import "../../App.scss";

const Inner = (props) => {
  return <div className="Inner">{props.children}</div>;
};

export default Inner;
