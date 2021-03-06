import React from "react";
import Options from "./Options";

const Option = (props) => (
  <div>
    Option: {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
