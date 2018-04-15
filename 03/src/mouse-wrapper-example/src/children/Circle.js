import React from "react";

const Circle = ({ coords: { x, y }, radius: r = 10 }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "cyan",
      left: `${x - r}px`,
      top: `${y - r}px`,
      width: `${r / 2}px`,
      height: `${r / 2}px`,
      borderRadius: `${r}px`
    }}
  />
);

export default Circle;
