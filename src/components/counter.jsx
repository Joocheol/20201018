import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn=sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.state.counter === 0 ? "Zero" : this.state.counter;
  }
}

export default Counter;
