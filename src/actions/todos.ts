import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  // network request means it's asnyc
  // so have to use redux-thunk
  // so have to return a function instead of an action
  // dispatch comes from redux; arbitrarily dispatch actions as we please
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    // <Todo[]> optional but much better explanation

    // optional generic, but great at typeguarding
    // useful when you have really complicated actions
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos, // just enums
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
