// if/else
// element varialbes
// ternary operator
// short circut operator
import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: true,
    };
  }
  render() {
    //1
    // if (this.state.isUser) {
    //   return <div>Hello Everyone</div>;
    // } else {
    //   return <div>Bye</div>;
    // }
    //2
    // let msg;
    // if (this.state.isUser) {
    //   msg = <div>Hello Everyone</div>;
    // } else {
    //   msg = <div>Bye</div>;
    // }
    // return <div> {msg} </div>;
    //3
    // return this.state.isUser ? <div>Hello Everyone</div> : <div>Bye</div>;
    //4
    return this.state.isUser && <div>Hello Everyone</div>;
  }
}
