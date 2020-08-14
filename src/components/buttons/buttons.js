import React from "react";
import "./buttons.css";
const Buttons = (props) => {
  return (
    <div className="container">
      <div>
        <button onClick={props.reset}>AC</button>
        <button onClick={props.clicked}>+/-</button>
        <button value="%" onClick={props.clicked}>
          %
        </button>
        <button className="operator" value="/" onClick={props.clicked}>
          /
        </button>
      </div>
      <div>
        <button value="7" onClick={(e) => props.clicked(e)}>
          7
        </button>
        <button value="8" onClick={props.clicked}>
          8
        </button>
        <button value="9" onClick={props.clicked}>
          9
        </button>
        <button className="operator" value="*" onClick={props.clicked}>
          x
        </button>
      </div>
      <div>
        <button value="4" onClick={props.clicked}>
          4
        </button>
        <button value="5" onClick={props.clicked}>
          5
        </button>
        <button value="3" onClick={props.clicked}>
          6
        </button>
        <button className="operator" value="-" onClick={props.clicked}>
          -
        </button>
      </div>
      <div>
        <button value="1" onClick={props.clicked}>
          1
        </button>
        <button value="2" onClick={props.clicked}>
          2
        </button>
        <button value="3" onClick={props.clicked}>
          3
        </button>
        <button className="operator" value="+" onClick={props.clicked}>
          +
        </button>
      </div>
      <div>
        <button className="zero" value="0" onClick={props.clicked}>
          0
        </button>
        <button value="." onClick={props.clicked}>
          .
        </button>
        <button className="operator" value="=" onClick={props.evaluate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Buttons;
