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
  <div style={{ color: "white" }}>
    <span>Key </span>
    <span style={{ fontWeight:'bold', color: "lightgreen" }}>{k}</span>
    <span>
      {k >= "0" && k <= "9" ? " is a number" : null}
    </span>
  </div>
);

const Main = () => (
    <KeyLogger>
    {key => <KeyMapper k={key} />}
    </KeyLogger>    
);

export default Main;
