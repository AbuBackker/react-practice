import React, { Component } from "react";

export default class IntroToFroms extends Component {
  state = {
    name: "Ryn",
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted By", this.state.name);
  };
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
