import React from "react";

export const Box = ({ color, width, height }) => {
  return (
      <>
    <div
      style={{
        backgroundColor: `${color}`,
        width: `${width}em`,
        height: `${height}em`,
      }}
    ></div>
    <button>X</button>
    </>
  );
};
