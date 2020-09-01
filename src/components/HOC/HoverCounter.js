import React, { Component } from "react";
import higherOComponent from "../HOC/HigherOComponent";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count By Mouse Hover : {this.props.count} </h1>
        <button onMouseOver={this.props.increment}> Increment </button>
      </div>
    );
  }
}
export default higherOComponent(HoverCounter);
