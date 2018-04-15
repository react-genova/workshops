import React, { Fragment } from "react";
import Coordinates from "./Coordinates";
import Circle from "./Circle";

const Both = ({ coords }) => (
  <Fragment>
    <Coordinates coords={coords} />
    <Circle coords={coords} />
  </Fragment>
);

export default Both;
