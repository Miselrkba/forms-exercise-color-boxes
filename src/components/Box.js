import React from "react";

export const Box = ({ color, width, height,removeBox }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: `${color}`,
          width: `${width}em`,
          height: `${height}em`,
        }}
      ></div>
      <button onClick={removeBox}>X</button>
    </>
  );
};
