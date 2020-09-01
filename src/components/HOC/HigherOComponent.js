import React, { Component } from "react";

const higherOComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.increment = this.increment.bind(this);
      this.state = {
        count: 0,
      };
    }
    increment() {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return NewComponent;
};
export default higherOComponent;
