import React from "react";

function InputBox(props) {
  console.log("test");
  return (
    <input
      {...props}
      className={`form-control ${!props.valid && props.touched ? "error" : ""}`}
    />
  );
}

export default InputBox;
