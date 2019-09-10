import React from "react";
import "./opBtns.css";

const OperatorButton = (props) => {
  return (
    <>
      <button className="opButton">{props.opr}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;