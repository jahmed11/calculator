import React, { Component } from "react";
import Buttons from "./components/buttons/buttons";
import Display from "./components/display/display";
import "./App.css";
import * as math from "mathjs";
class Calculator extends Component {
  state = {
    display: "",
  };
  buttonHandler = (event) => {
    event.preventDefault();
    this.setState({
      display: this.state.display + event.target.value,
    });
    console.log(this.state.display);
  };
  resethandler = () => {
    this.setState({
      display: "",
    });
  };
  evaluateHandler = () => {
    this.setState({
      display: math.evaluate(this.state.display),
    });
  };
  render() {
    return (
      <div className="calculator">
        <h1>My Calculator</h1>
        <Display value={this.state.display} />
        <Buttons
          clicked={this.buttonHandler}
          reset={this.resethandler}
          evaluate={this.evaluateHandler}
        />
      </div>
    );
  }
}

export default Calculator;
