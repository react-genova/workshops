import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Both from "./children/Both";
import * as Styles from "./index.style.js";
import Application from './exercises/KeyLogger';

let test = null;
if(process.env.NODE_ENV === 'production') {
    test = 'produzione';
}
else {
    test = 'sviluppo';
}
export { test };

const App = () => (
  <div style={Styles.main}>
    <Application />
  </div>
);

render(<App />, document.getElementById("root"));
