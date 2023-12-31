import React from "react";
import "../components/Button.css";
const Button = (props) => {
  return (
    <button
      className="location-button"
      data-location={props.location}
      onClick={() => {
        props.handleClick(props.location);
      }}
    >
      {props.location ? props.location : "All Locations"}
    </button>
  );
};

export default Button;
