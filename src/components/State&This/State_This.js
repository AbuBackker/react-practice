import React, { Component } from "react";

export default class StateThis extends Component {
  state = {
    name: "Ryu",
    age: 35,
  };
  handleClick = (e) => {
    this.setState({
      name: "Myu",
      age: 25,
    });
    // console.log(e.target);
    console.log(this.state);
  };
  handleMouseOver(e) {
    console.log(e.target);
  }
  render() {
    return (
      <div>
        <p>
          My name is {this.state.name} & I am {this.state.age}
        </p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>Hover Me</button>
      </div>
    );
  }
}
