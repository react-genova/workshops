import React, { Component } from "react";

const mouseWrapper_HOC = Comp => {
  class MouseWrapper_HOC extends Component {
    state = { coordinates: { x: 0, y: 0 } };
    onMouseMove = e =>
      this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
    render() {
      const { coordinates } = this.state;
      return (
        <div
          style={{ width: "100%", height: "100%" }}
          onMouseMove={this.onMouseMove}
        >
          <Comp coords={coordinates} />
        </div>
      );
    }
  }
  return MouseWrapper_HOC;
};

export default mouseWrapper_HOC;