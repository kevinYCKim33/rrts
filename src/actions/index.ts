import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  // network request means it's asnyc
  // so have to use redux-thunk
  // so have to return a function instead of an action
  // dispatch comes from redux; arbitrarily dispatch actions as we please
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url); // crazy...

    // optional generic, but great at typeguarding
    // useful when you have really complicated actions
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos, // just enums
      payload: response.data,
    });
  };
};
