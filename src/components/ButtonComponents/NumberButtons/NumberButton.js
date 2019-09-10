import React from "react";
import "./numBtn.css";

const NumberButton = (props) => {
  console.log(props);
  return (
    <>
    <button className="numButtons">{props.num}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;