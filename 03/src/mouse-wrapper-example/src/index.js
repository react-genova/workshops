import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Both from "./children/Both";
import * as Styles from "./index.style.js";
import Application from './exercises/ApplicationSkeleton';

const App = () => (
  <div style={Styles.main}>
    <Application />
  </div>
);

render(<App />, document.getElementById("root"));
