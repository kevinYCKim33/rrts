import React from "react";
import { connect } from "react-redux"; // sighh hooks woulda been much cooler
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there!</div>;
  }
}

// const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
//   return { todos: state.todos };
// };

// ES6 equivalent
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
