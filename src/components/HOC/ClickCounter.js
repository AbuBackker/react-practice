import React, { Component } from "react";
import higherOComponent from "../HOC/HigherOComponent";

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count By Click : {this.props.count} </h1>
        <button onClick={this.props.increment}> Increment </button>
      </div>
    );
  }
}
export default higherOComponent(ClickCounter);
