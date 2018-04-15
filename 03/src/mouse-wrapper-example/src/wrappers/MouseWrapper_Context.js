import React, { Component } from "react";
import Both from "./children/Both";

const CoordinatesContextDefault = { coordinates: { x: 0, y: 0 } };
const CoordinatesContext = React.createContext(CoordinatesContextDefault);

class MouseWrapper_Context extends Component {
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
        <CoordinatesContext.Provider value={coordinates}>
          {children}
        </CoordinatesContext.Provider>
      </div>
    );
  }
}

const MouseConsumer = () => (
  <CoordinatesContext.Consumer>
    {coordinates => <Both coords={coordinates} />}
  </CoordinatesContext.Consumer>
);

export { MouseConsumer };
export default MouseWrapper_Context;
