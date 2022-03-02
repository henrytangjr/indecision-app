class Note extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      // console.log(`prevState: ${prevState.visibility}`);

      return { visibility: !prevState.visibility };
    });
  }

  render() {
    console.log("App.js is running!");

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Some details for you to see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Note />, document.getElementById("app"));

// const app = {
//   title: "Visibility Toggle",
//   details: "Hello Details",
// };
// let visibility = false;
// const appRoot = document.getElementById("app");

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderApp();
// };

// const renderApp = () => {
//   console.log(app.details.length);
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {visibility && <p>Some details for you to see!</p>}
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();
