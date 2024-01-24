import React from "react";

const OtherComponent = (props) => {
  return (
    <div>
      <h2>Other Component</h2>
      <p>Selected Year: {props.selectedYear}</p>
    </div>
  );
};

export default OtherComponent;
