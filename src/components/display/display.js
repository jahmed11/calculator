import React from "react";
import "./display.css";
const Display = (props) => {
  return (
    <div className="display">
      <p>{props.value}</p>
    </div>
  );
};
export default Display;
