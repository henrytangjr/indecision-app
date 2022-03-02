"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
      // options: [],
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        // do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount!");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options: [],
      //   };
      // });

      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var selectedOption = Math.floor(Math.random() * this.state.options.length);
      // console.log(selectedOption);

      alert("Picked " + this.state.options[selectedOption]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
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

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const title = "Indecision App";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          handlePick: this.handlePick,
          hasOptions: this.state.options.length > 0
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"]
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.substitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision"
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

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What should I do?"
    )
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

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handleDeleteOptions,
        disabled: props.options.length === 0
      },
      "Remove All"
    ),
    React.createElement(
      "p",
      null,
      "Number of options: " + props.options.length
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add an option to get started!"
    ),
    React.createElement(
      "ol",
      null,
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    )
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

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    "Option: ",
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return <div>Option: {this.props.optionText}</div>;
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      // console.log(e.target.elements);
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      // this.props.handleAddOption(option);

      // this.setState(() => {
      //   return {
      //     error: error,
      //   };
      // });

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));


ReactDOM.render(React.createElement(IndecisionApp, { options: ["Bar 1", "Bar 2", "Bar 3"] }), document.getElementById("app"));
