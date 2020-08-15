import React, { Component } from "react";

export default class IntroToFroms extends Component {
  state = {
    name: "Ryn",
    age: 35,
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
        <form>
          <input type="text" onChange="{this.handleChange}" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
