import React from "react";
import "./specBtns.css";

const SpecialButton = (props) => {
  return (
    <>
    <button className="specBtns">{props.spec}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;