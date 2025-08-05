import React from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sayHello = () => {
    console.log("Hello! You clicked increment.");
    alert("Hello from React!");
  };

  handleIncrementClick = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic event
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <h1>React Events Demo</h1>
        <h2>Counter: {this.state.counter}</h2>

        <button onClick={this.handleIncrementClick}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React!")}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Synthetic Event (OnPress)</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
