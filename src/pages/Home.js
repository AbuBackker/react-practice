import React, { Component } from "react";
// import IntroToFroms from "../components/IntroToFroms/IntroToFroms";
// import ConditionalRendering from "../components/ConditionalRendering/ConditionalRendering";
import LiftingStateUp from "../components/LiftingStateUp/LiftingStateUp";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <IntroToFroms /> */}
        {/* <ConditionalRendering /> */}
        <LiftingStateUp />
      </div>
    );
  }
}
