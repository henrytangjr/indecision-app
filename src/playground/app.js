class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
      // options: [],
    };
  }

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

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });

    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  handlePick() {
    const selectedOption = Math.floor(
      Math.random() * this.state.options.length
    );
    // console.log(selectedOption);

    alert(`Picked ${this.state.options[selectedOption]}`);
  }

  handleAddOption(option) {
    console.log(option);
    if (!option) {
      return "Enter valid value";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "Value exists";
    }

    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option),
    //   };
    // });

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

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
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.substitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
        disabled={props.options.length === 0}
      >
        Remove All
      </button>
      <p>{`Number of options: ${props.options.length}`}</p>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
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
};

// class Options extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     console.log(this.props.options);
//     return (
//       <div>
//         <p>{`Number of options: ${this.props.options.length}`}</p>
//         <ol>
//           {this.props.options.map((option) => (
//             <Option key={option} optionText={option} />
//           ))}
//         </ol>
//         <button
//           onClick={this.props.handleDeleteOptions}
//           disabled={this.props.options.length === 0}
//         >
//           Remove All
//         </button>
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
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
};

// class Option extends React.Component {
//   render() {
//     return <div>Option: {this.props.optionText}</div>;
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    // console.log(e.target.elements);
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // this.props.handleAddOption(option);

    // this.setState(() => {
    //   return {
    //     error: error,
    //   };
    // });

    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
ReactDOM.render(
  <IndecisionApp options={["Bar 1", "Bar 2", "Bar 3"]} />,
  document.getElementById("app")
);
