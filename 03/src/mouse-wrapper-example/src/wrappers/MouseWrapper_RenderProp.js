import React, { Component } from "react";

class MouseWrapper_RenderProp extends Component {
  state = { coordinates: { x: 0, y: 0 } };
  onMouseMove = e =>
    this.setState({ coordinates: { x: e.clientX, y: e.clientY } });
  render() {
    const { coordinates } = this.state;
    const { children } = this.props;
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        onMouseMove={this.onMouseMove}
      >
      { children(coordinates) }
      </div>
    );
  }
}

export default MouseWrapper_RenderProp;