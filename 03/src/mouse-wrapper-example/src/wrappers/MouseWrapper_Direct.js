import React, { Component } from "react";
import Coordinates from "../children/Coordinates";
import Circle from "../children/Circle";

class MouseWrapper_Direct extends Component {
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
        <Coordinates coords={coordinates} />
        <Circle coords={coordinates} />
      </div>
    );
  }
}

export default MouseWrapper_Direct;
