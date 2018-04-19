import React, { Component } from "react";

class KeyLogger extends Component {
  state = { key: "" };
  onKeyPress = e => this.setState({ key: e.key });
  render() {
    const { key } = this.state;
    const { children } = this.props;
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        onKeyPress={this.onKeyPress}
        tabIndex="0"
      >
        {children(key)}
      </div>
    );
  }
}

const KeyMapper = ({ k }) => (
  <div>
    <span style={{ color: "white" }}>Key: {k}</span>
    <span style={{ color: "white" }}>
      {" "}
      {k >= "0" && k <= "9" ? "is a number" : null}
    </span>
  </div>
);

export { KeyMapper };
export default KeyLogger;
