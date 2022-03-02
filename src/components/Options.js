import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button
      onClick={props.handleDeleteOptions}
      disabled={props.options.length === 0}
    >
      Remove All
    </button>
    <p>{`Number of options: ${props.options.length}`}</p>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ol>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
