import React from "react";

const Coordinate = ({ label, coord }) => (
  <div>
    <span style={{ color: "#CCCCCC" }}>{label}: </span>
    <span style={{ color: "white" }}>
      <b>{coord}</b>
    </span>
  </div>
);

export default Coordinate;
