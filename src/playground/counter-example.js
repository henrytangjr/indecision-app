class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");

    try {
      const stringCount = localStorage.getItem("count");
      const count = JSON.parseInt(stringCount, 10);

      if (count) {
        this.setState(() => ({
          count: count,
        }));
      }
    } catch (e) {
      // do nothing
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidChange");
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    // alert("plus one");
    this.setState((prevState) => {
      console.log(`prevState: ${prevState.count}`);
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      console.log(`prevState: ${prevState.count}`);
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleReset() {
    this.setState((prevState) => {
      console.log(`prevState: ${prevState.count}`);
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0
// const addOne = () => {
//     count++
//     console.log('addOne', count)
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     console.log('minusOne', count)
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     console.log('reset', count)
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button">Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp()
