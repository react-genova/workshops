import React from "react";
import Coordinate from "./Coordinate";

const Coordinates = ({ coords: { x, y } }) => (
  <div style={{ position: "absoulte", padding: "5px" }}>
    <Coordinate label="x" coord={x} />
    <Coordinate label="y" coord={y} />
  </div>
);

export default Coordinates;
