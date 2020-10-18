import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <React.Fragment>
        <h1>World!</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
