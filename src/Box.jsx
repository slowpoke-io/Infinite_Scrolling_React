import React, { forwardRef } from "react";

const Box = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-amber-300 w-full aspect-square rounded-lg shadow-md ${
        props?.className || ""
      }`}
    ></div>
  );
});

export default Box;
