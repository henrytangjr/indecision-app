import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    selectedOption: undefined,
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //     this.handlePick = this.handlePick.bind(this);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options: options,
        }));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  handlePick = () => {
    const selectedOption = Math.floor(
      Math.random() * this.state.options.length
    );
    const option = this.state.options[selectedOption];
    this.setState(() => ({
      selectedOption: option,
    }));

    // alert(`Picked ${this.state.options[selectedOption]}`);
  };

  handleClearSelection = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleAddOption = (option) => {
    console.log(option);
    if (!option) {
      return "Enter valid value";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "Value exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  render() {
    // const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelection={this.handleClearSelection}
        />
      </div>
    );
  }
}
