import React from "react";
import "./numBtn.css";
import App from "../../../App";

const NumberButton = (props) => {
  console.log(props);
  return (
    <>
    {/*couldn't get it to recognize props from App.js. It's already getting props from Numbers.js and I don't know how to help it "see" both sets of props*/}
    <button className="numButtons" onClick={() => props.setDispNum(props.num)}>{props.num}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;