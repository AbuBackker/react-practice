import React, { Component } from "react";
// import IntroToFroms from "../components/IntroToFroms/IntroToFroms";
import ConditionalRendering from "../components/ConditionalRendering/ConditionalRendering";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <IntroToFroms /> */}
        <ConditionalRendering />
      </div>
    );
  }
}
