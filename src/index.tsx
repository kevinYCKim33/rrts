// https://github.com/FEDCAP/single-stop-frontend-code-challenge-SUBMISSIONS/pull/6/files
import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string; // ? for optional
}

// Functional Component Syntax: huge for the future
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class App extends React.Component<AppProps> {
  state = { counter: 1 }; // TLDR: don't do constructors in Typescript + React, confusing enough;

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color={"red"} />, document.querySelector("#root"));
